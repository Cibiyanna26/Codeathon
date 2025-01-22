import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hackstreet 2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/logo_hack.png" type="image/x-icon" />
        <link rel="preconnect" href="https://stijndv.com" />
        <meta
          name="description"
          content="HackStreet is a 24 hour long running hackathon, being held on 3rd and 4th of February. We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take part to win awesome prizes and collaborate with other developers and gain immersive experiences. Throughout the weekend hackers at Hackstreet will have unique opportunities to learn from each other. We are determined to have an all-inclusive and diverse group of students joining us for the hackathon."
        />
        <meta
          name="keywords"
          content="Hackathon, Hackstreet, Hackstreet 2.0, Hackers"
        />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
