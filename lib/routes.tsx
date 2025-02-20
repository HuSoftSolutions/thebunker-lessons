export const routes = [
  {
    id: 1,
    title: 'LOCATIONS',
    type: 'dropdown',
    to: '/location',
    options: [
      {
        title: 'Clifton Park',
        to: '/location/cliftonpark',
        id: 8,
      },
      {
        title: 'Guilderland',
        to: '/location/guilderland',
        id: 9,
      },
      {
        title: 'North Greenbush',
        to: '/location/northgreenbush',
        id: 10,
      },
      {
        title: 'New Hartford',
        to: '/location/newhartford',
        id: 11,
      },
      {
        title: 'Mohawk Harbor',
        to: '/location/mohawkharbor',
        id: 12,
      },
			{
        title: 'Saratoga',
        to: '/location/saratoga',
        id: 13,
      },
			{
        title: 'Latham',
        to: '/location/latham',
        id: 14,
      },
    ],
  },
  {
    id: 3,
    title: 'GALLERY',
    to: '/gallery',
    type: 'link',
  },
  {
    id: 4,
    title: 'FAQs',
    to: '/faqs',
    type: 'link',
  },
	{
    id: 5,
    title: 'TESTIMONIALS',
    to: '/testimonials',
    type: 'link',
  },
  {
    id: 6,
    title: 'MAIN SITE',
    to: 'https://www.getinthebunker.golf',
    type: 'link',
  },
];
