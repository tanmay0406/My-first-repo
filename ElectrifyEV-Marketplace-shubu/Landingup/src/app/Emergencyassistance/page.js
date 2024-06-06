import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";


export default function EmergencyAssistance() {
  return (
    <div>
      <Head>
        <title>Emergency Assistance | Electrify eAssist</title>
        <meta name="description" content="Emergency assistance services for electric vehicles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto mt-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Emergency Assistance Services</h1>
        <div className="mb-8">
          <Image src="/images/bg/bs1.jpeg" alt="Emergency Assistance" width={800} height={400} />
        </div>
        <p className="text-lg mb-4">At Electrify eAssist, we provide reliable emergency assistance for electric vehicles (EVs)!</p>
        <p className="text-lg mb-4">Our services include:</p>
        <ul className="text-left mb-4">
          <li>Roadside assistance</li>
          <li>Battery jump-start</li>
          <li>Flat tire repair</li>
          <li>Vehicle towing</li>
        </ul>
        <p className="text-lg mb-4">Stay safe on the road with our prompt and professional assistance!</p>
      </main>

      <Footer />

      <Switcher />
    </div>
  );
}
