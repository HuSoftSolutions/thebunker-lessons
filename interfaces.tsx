import { ReactNode } from "react";


export interface LayoutProps {
	children: ReactNode;
}

export interface CardContentProps extends LayoutProps {
	className?: string;
}

export interface ProfileCardProps {
	name: string, 
	title: string, 
	bio: string, 
	image?: string
}