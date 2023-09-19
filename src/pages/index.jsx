import Image from "next/image";
import { Inter, Ubuntu } from "next/font/google";

import MobileNavbar from "@/components/NavbarMobile";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { BiDownload } from "react-icons/bi";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FiFacebook, FiTwitch, FiTwitter } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "500",
});

export default function Home() {
  return (
    <div className={`${inter.variable} ${ubuntu.variable} bg-screen`}>
      <MobileNavbar />
      <Navbar />
      <Hero />
      <div className="breaker"></div>
      <Brandza />
      <Offer />
      <CTA />
      <DownloadApp />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto px-10 py-10 md:py-20  text-white md:text-left text-center flex flex-col md:flex-row md:gap-0 gap-8">
      <div className="space-y-6 md:basis-1/2 md:mt-28">
        <h1
          className={`"font-semibold md:text-6xl text-4xl tracking-wide uppercase font-ubuntu`}
        >
          How much do you love
          <span className="text-grad"> Mzansi</span>?
        </h1>

        <p className=" font-inter text-paragraph my-4 md:w-4/5">
          Test your knowledge of South African brandz, track your progress and
          learn more about the brandz you love.
        </p>
        <button className="py-3 px-4 btn-grad inline-flex items-center gap-2  rounded-full text-center">
          <BiDownload className="w-5 h-5 inline fill-white" />
          <span className="font-medium">Dowload Now</span>
        </button>
      </div>
      <div className=" md:basis-1/2">
        <Image
          src={"/hero-mockup.png"}
          width={434}
          height={740}
          alt="Ellipse"
          className="md:w-96 w-60 mx-auto"
        />
      </div>
    </div>
  );
}

function Brandza() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto flex gap-32 px-40 py-20">
      <Image
        src={"/mockup-2.png"}
        width={434}
        height={740}
        alt="Ellipse"
        className="md:w-96 w-60 mx-auto"
      />
      <div className="mt-20">
        <h6 className="uppercase font-medium text-green-grad tracking-wider">
          brandza
        </h6>
        <h1 className="font-ubuntu text-5xl text-white my-4">
          Master the World of ZA Brands
        </h1>
        <p className="text-paragraph">
          {`Are you ready to become a brand expert? Look no further than our app, the ultimate destination for all things ZA brands. Immerse yourself in a world of brand knowledge and challenge your expertise today. Your journey to brand mastery begins here.`}
        </p>
        <div className="flex -ml-7">
          <Link href={"#"}>
            <Image
              src={"/app-store.png"}
              width={310}
              height={140}
              alt="App store button"
            />
          </Link>
          <Link href={"#"}>
            <Image
              src={"/google-play.png"}
              width={310}
              height={140}
              alt="playstore button"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Offer() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto flex gap-32 px-40 py-20 text-white">
      <div className="mt-20">
        <h6 className="uppercase font-medium text-green-grad tracking-wider">
          we offer
        </h6>
        <h1 className="font-ubuntu text-5xl text-white my-4">
          Your Brand, Your Way
        </h1>
        <p className="text-paragraph mb-4">
          {`Empower your brand with our versatile solutions. Our white-label platform allows you to customize to your heart's content, while our advertising banner puts your message front and center. Take control of your brand's destiny today.`}
        </p>

        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center">
            <span className="h-1 w-8 green-grad inline-block mr-2 rounded-lg"></span>
            <span>Feature your brand</span>
          </span>
          <span className="inline-flex items-center">
            <span className="h-1 w-8 green-grad inline-block mr-2 rounded-lg"></span>
            <span>Advertising Banner</span>
          </span>
          <span className="inline-flex items-center">
            <span className="h-1 w-8 green-grad inline-block mr-2 rounded-lg"></span>
            <span>White-labeled version for your country & brand</span>
          </span>
        </div>
      </div>
      <Image
        src={"/hero-mockup.png"}
        width={434}
        height={740}
        alt="Ellipse"
        className="md:w-96 w-60 mx-auto"
      />
    </div>
  );
}
function CTA() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto flex gap-32 px-40 py-20">
      <div className="mt-10">
        <h6 className="uppercase font-medium text-green-grad tracking-wider">
          contact us
        </h6>
        <h1 className="font-ubuntu text-5xl text-white my-4">
          We help you to feature your brand in our platform
        </h1>
        <p className="text-paragraph">
          {`   Need an advertising banner or white-labeling for your brand on our platform? Contact us today, and let's make it happen. Your brand, your way.`}
        </p>
      </div>
      <Form />
    </div>
  );
}

function Form() {
  return (
    <form className="w-full rounded-xl bg-black p-8 flex flex-col gap-6">
      <input
        type="text"
        placeholder="First Name"
        className="rounded-full text-white py-2 px-4 bg-[#1E1E1E] placeholder:text-sm"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="rounded-full text-white py-2 px-4 bg-[#1E1E1E]  placeholder:text-sm"
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="rounded-full text-white py-2 px-4 bg-[#1E1E1E]  placeholder:text-sm"
      />
      <input
        type="text"
        placeholder="Email"
        className="rounded-full text-white py-2 px-4 bg-[#1E1E1E]  placeholder:text-sm"
      />
      <textarea
        placeholder="Message"
        rows={5}
        className="rounded-2xl text-white py-2 px-4 bg-[#1E1E1E]  placeholder:text-sm resize-none"
      />

      <button className="py-2 px-4 bg-black inline-flex items-center gap-2 mx-auto border rounded-full text-center">
        <span className="font-medium text-white">Send Message</span>
      </button>
    </form>
  );
}

function DownloadApp() {
  return (
    <div className=" relative bg-black pt-32">
      <div className="container 2xl:max-w-screen-2xl mx-auto flex gap-40 px-40">
        <Image
          src={"/download-section-mockup.png"}
          width={350}
          height={565}
          alt="Ellipse"
          className="w-60"
        />

        <div className="mt-10">
          <h6 className="uppercase font-medium text-green-grad">
            try on mobile
          </h6>
          <h1 className="font-ubuntu text-6xl text-white my-8">
            Download our app for free
          </h1>

          <div className="flex -ml-7">
            <Link href={"#"}>
              <Image
                src={"/app-store.png"}
                width={310}
                height={140}
                alt="App store button"
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/google-play.png"}
                width={310}
                height={140}
                alt="playstore button"
              />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={"/ellipse-left.png"}
        width={75}
        height={343}
        alt="Ellipse"
        className="absolute left-0 top-0"
      />
      <Image
        src={"/ellipse-right.png"}
        width={85}
        height={361}
        alt="Ellipse"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className=" ">
      <div className="border-y border-dashed mt-32">
        <div className="container 2xl:max-w-screen-2xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
              <Image
                src={"/brand-za-logo.png"}
                height={110}
                width={135}
                alt="Company Logo"
                className="w-20 object-cover"
              />
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Start your brand journey today and embrace the world of ZA brands.
              Download now
            </p>

            <div className="flex -ml-7">
              <Link href={"#"}>
                <Image
                  src={"/app-store.png"}
                  width={310}
                  height={140}
                  alt="App store button"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/google-play.png"}
                  width={310}
                  height={140}
                  alt="playstore button"
                />
              </Link>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-heading tracking-widest text-lg mb-3">
                Company
              </h2>
              <nav className="list-none mb-10 space-y-4">
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-400 hover:text-gray-100"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-400 hover:text-gray-100"
                  >
                    Download Now
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-400 hover:text-gray-100"
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-heading tracking-widest text-lg mb-3">
                Contact
              </h2>
              <nav className="list-none mb-10 space-y-4">
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-400 hover:text-gray-100"
                  >
                    brandza@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-400 hover:text-gray-100"
                  >
                    +0276567897
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full  md:ml-20">
              <h2 className="title-font font-medium text-heading tracking-widest text-lg mb-3">
                Follow us
              </h2>
              <div className="flex gap-4">
                <Link href={"#"} className="rounded-full p-2 green-grad">
                  <FaFacebookF className="w-4 h-4" />
                </Link>
                <Link href={"#"} className="rounded-full p-2 green-grad">
                  <BsTwitter className="w-4 h-4" />
                </Link>
                <Link href={"#"} className="rounded-full p-2 green-grad">
                  <ImInstagram className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 px-5 flex justify-between flex-wrap flex-col sm:flex-row text-gray-100 text-sm">
        <p className=" text-center sm:text-left">
          Copyrights 2023 @ All Rights Reserved
        </p>
        <span>
          Crafted by <Link href={"mrrobotdev.com"}>mrrobotdev.com</Link>
        </span>
      </div>
    </footer>
  );
}
