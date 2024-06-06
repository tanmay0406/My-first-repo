import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

export default function Repair() {
  return (
    <div>
      <Head>
        <title>Repair Services | Electrify eRepair</title>
        <meta name="description" content="Repair services for electric vehicles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto mt-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Repair Services</h1>
        <div className="mb-8">
          <Image src="/images/bg/b15.jpg" alt="Repair Services" width={800} height={400} />
        </div>
        <p className="text-lg mb-4">At Electrify eRepair, we specialize in providing high-quality repair services for electric vehicles (EVs)!</p>
        <p className="text-lg mb-4">Our repair services cover:</p>
        <ul className="text-left mb-4">
          <li>Electrical system diagnosis and repair</li>
          <li>Battery system maintenance and replacement</li>
          <li>Brake system repair and replacement</li>
          <li>Suspension system repair</li>
          <li>General vehicle maintenance</li>
        </ul>
        <p className="text-lg mb-4">Trust our experienced technicians to keep your EV running smoothly!</p>
      </main>

      <Footer />

      <Switcher />
    </div>
  );
}
