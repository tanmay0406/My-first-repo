import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";


export default function BatteryCharge() {
  return (
    <div>
      <Head>
        <title>Battery Charge | Electrify eCharge</title>
        <meta name="description" content="Battery charging services for electric vehicles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto mt-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Battery Charging Services</h1>
        <div className="mb-8">
          <Image src="/images/bg/b16.jpg" alt="Battery Charging" width={800} height={400} />
        </div>
        <p className="text-lg mb-4">At Electrify eCharge, we provide efficient and eco-friendly battery charging solutions for electric vehicles (EVs)!</p>
        <p className="text-lg mb-4">Our services include:</p>
        <ul className="text-left mb-4">
          <li>Fast charging stations</li>
          <li>24/7 availability</li>
          <li>Compatible with all EV models</li>
          <li>Convenient locations</li>
        </ul>
        <p className="text-lg mb-4">Charge up your EV with us and drive worry-free!</p>
      </main>

      <Footer />

      <Switcher />
    </div>
  );
}
