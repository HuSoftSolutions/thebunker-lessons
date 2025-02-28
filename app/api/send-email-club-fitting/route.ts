import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

console.log(process.env.SENDGRID_SENDER_EMAIL);
export async function POST(req: Request) {
  try {
    const {
      name,
      phone,
      email,
      fittingInterest,
      locationPreference,
      timePreference,
      notes,
    } = await req.json();

    if (
      !name ||
      !phone ||
      !email ||
      !fittingInterest ||
      !locationPreference ||
      !timePreference
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const msg: MailDataRequired = {
      to: ["codyhusek@gmail.com"],
      from: process.env.SENDGRID_SENDER_EMAIL as string,
      subject: "New Club Fitting Request",
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nFitting Interest: ${fittingInterest}\nLocation: ${locationPreference}\nTime Preference: ${timePreference}\nNotes: ${notes}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Fitting Interest:</strong> ${fittingInterest}</p>
        <p><strong>Location Preference:</strong> ${locationPreference}</p>
        <p><strong>Time Preference:</strong> ${timePreference}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("SendGrid Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
