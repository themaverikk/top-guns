import Head from "next/head";
import {
  Hero,
  Services,
  Business,
  Features,
  Showcase,
  Testimonials,
  Team,
  Blog,
  Contact,
  Footer,
} from "../Views";

export default function Home() {
  return (
    <>
      <Head>
        <title>Top Guns</title>
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
      </Head>
      <Hero />
      <Services />
      <Business />
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
