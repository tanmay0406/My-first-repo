import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Electrify eWash</title>
        <meta name="description" content="Car wash website for EVs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto mt-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Electrify eWash</h1>
        <div className="mb-8">
          <Image src="/images/bg/carw.jpg" alt="Car Wash" width={800} height={400} />
        </div>
        <p className="text-lg mb-4">We offer eco-friendly car wash services for electric vehicles (EVs)!</p>
        <p className="text-lg mb-4">Our services include:</p>
        <ul className="text-left mb-4">
          <li>Exterior wash</li>
          <li>Interior vacuum</li>
          <li>Tire cleaning</li>
          <li>Window cleaning</li>
        </ul>
        <p className="text-lg mb-4">Visit us today and experience the future of car washing!</p>
      </main>

      <Footer />

      <Switcher />
    </div>
  );
}
