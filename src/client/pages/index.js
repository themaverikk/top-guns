import Head from 'next/head';
import {
  Hero,
  Services,
  // Business,
  Features,
  Showcase,
  Testimonials,
  Team,
  Blog,
  Contact,
  Footer,
  Build,
} from '../Views';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hire James Bond</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="Bootstrap, Landing page, Template, Business, Service"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <script type="text/javascript" src="../js/jquery-min.js" />
        <script type="text/javascript" src="../js/owl.carousel.min.js" />
        <script type="text/javascript" src="../js/bootstrap.min.js" />
        <script type="text/javascript" src="../js/jquery.magnific-popup.min.js" />
        <script type="text/javascript" src="../js/nivo-lightbox.js" />
        <script type="text/javascript" src="../js/main.js" />

      </Head>
      <Hero />
      <Services />
      <Build />
      {/* <Business /> */}
      <Features />
      <Showcase />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
