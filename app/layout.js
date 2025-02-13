import '../styles/globals.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
        <meta
          name="description"
          content="HackStreet is a 24 hour long running hackathon, being held on 3rd and 4th of February. We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take part to win awesome prizes and collaborate with other developers and gain immersive experiences. Throughout the weekend hackers at Hackstreet will have unique opportunities to learn from each other. We are determined to have an all-inclusive and diverse group of students joining us for the hackathon."
        />
        <meta
          name="keywords"
          content="Hackathon, Hackstreet, Codeathon, Hackers"
        />
        <link rel="icon" href="/hackstreetlogo.ico" />
        <title>Codeathon</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
