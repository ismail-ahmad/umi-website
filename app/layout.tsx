import { Metadata } from "next";

//Following will need work
export const metadata: Metadata = {
  title: 'UMI Consultants',
  description: 'Right Desicion, Your Right!'
}

export default function RootLayout({children}: {children: React.ReactNode}){
return(
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    {children}
  </body>
  </html>
);
}