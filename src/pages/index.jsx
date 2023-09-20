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
    <main
      className={`${inter.variable} ${ubuntu.variable} features text-paragraph font-inter overflow-hidden`}
    >
      <MobileNavbar />
      <div className="bg-screen">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Image
        src={"/Vector.png"}
        width={2400}
        height={100}
        alt="Scroll Down"
        className="absolute opacity-20 md:-mt-80 -mt-20 mx-auto 2xl:-mt-[500px]"
      />
      <div className="md:py-20 py-14 "></div>
      <Brandza />
      <Offer />
      <CTA />
      <DownloadApp />
      <div className="bg-[#171717] h-20" />
      <div className="bg-[#171717] ">
        <Footer />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto px-5 py-10 md:py-20  text-white md:text-left text-center flex flex-col md:flex-row md:gap-0 gap-8">
      <div className="space-y-6 md:basis-1/2 md:mt-28 ">
        <h1
          className={`"font-semibold md:text-6xl text-3xl tracking-wide uppercase font-ubuntu`}
        >
          How much do you love
          <span className="text-grad"> Mzansi</span>?
        </h1>

        <p className=" text-sm text-paragraph my-4 md:w-4/5">
          Test your knowledge of South African brandz, track your progress and
          learn more about the brandz you love.
        </p>
        <button className="py-3 px-4 btn-grad inline-flex items-center gap-2  rounded-full text-center">
          <BiDownload className="w-5 h-5 inline fill-white" />
          <span className="font-medium">Dowload Now</span>
        </button>
      </div>

      <div className=" md:basis-1/2 heroBG">
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

function Features() {
  return (
    <div className="features">
      <div className="container 2xl:max-w-screen-2xl mx-auto md:px-10 px-5 pt-10 md:pt-20 ">
        <span className="h-1 mb-1 w-8 btn-grad inline-block mr-2 rounded-lg"></span>
        <h2 className="inline-block uppercase font-medium md:text-xl text-lg mb-4">
          Best Features
        </h2>
        <div className="flex md:flex-row flex-col md:justify-between md:mx-10">
          <h1 className="uppercase md:text-4xl text-3xl font-ubuntu font-semibold md:basis-1/2">
            <span className="text-green-grad">key features </span>
            of <br /> brandza mobile app
          </h1>
          <div className="md:basis-1/2 flex">
            <span className="inline-block h-full w-2 rounded-lg btn-grad"></span>
            <p className="md:ml-4 md:my-0 my-4">
              Challenge yourself with engaging quizzes about your favorite South
              African brands to discover how well you know them.
            </p>
          </div>
        </div>
        <div className="my-20 text-lg font-bold">
          <div className="flex justify-between md:flex-row flex-col md:gap-0  items-end text-center mb-20">
            <div>
              <Image
                src={"/feature-1.png"}
                width={470}
                height={508}
                alt="Feature"
                className="w-96 h-full mx-auto"
              />
              <div className="mt-4">
                <span className="px-4 py-2 rounded-full btn-grad inline-block mr-4">
                  1
                </span>
                <span>BrandZA Quizzes</span>
              </div>
            </div>
            <div>
              <Image
                src={"/feature-2.png"}
                width={470}
                height={508}
                alt="Feature"
                className="w-96 h-full mx-auto"
              />
              <div className="mt-4">
                <span className="px-4 py-2 rounded-full btn-grad inline-block mr-4">
                  2
                </span>
                <span>Know which brand</span>
              </div>
            </div>
            <div>
              <Image
                src={"/feature-3.png"}
                width={470}
                height={508}
                alt="Feature"
                className="w-96 h-full mx-auto"
              />
              <div className="mt-4">
                <span className="px-4 py-2 rounded-full btn-grad inline-block mr-4">
                  3
                </span>
                <span>Earn Star and Track Progress</span>
              </div>
            </div>
          </div>
          <Image
            src={"/down-btn.svg"}
            height={159}
            width={105}
            alt="Scroll Down"
            className="w-16 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
function Brandza() {
  return (
    <div className="container features 2xl:max-w-screen-2xl mx-auto flex md:flex-row flex-col md:gap-32 md:px-40 px-5 md:py-20 py-10 justify-center">
      <Image
        src={"/mockup-2.png"}
        width={434}
        height={740}
        alt="Ellipse"
        className="md:w-[400px] md:h-[500px] w-60 mx-auto order-2 md:order-1"
      />
      <div className="md:mt-20 order-1 md:order-2">
        <h6 className="uppercase font-medium text-green-grad tracking-wider">
          brandza
        </h6>
        <h1 className="font-ubuntu md:text-5xl text-4xl text-white my-2">
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
    <div className="container 2xl:max-w-screen-2xl mx-auto flex md:flex-row flex-col md:gap-32 md:px-40 px-5 pb-20 text-white">
      <div className="mt-20">
        <h6 className="uppercase font-medium text-green-grad tracking-wider">
          we offer
        </h6>
        <h1 className="font-ubuntu md:text-5xl text-4xl text-white my-4">
          Your Brand, Your Way
        </h1>
        <p className="text-paragraph mb-4">
          {`Empower your brand with our versatile solutions. Our white-label platform allows you to customize to your heart's content, while our advertising banner puts your message front and center. Take control of your brand's destiny today.`}
        </p>

        <div className="flex flex-wrap gap-4">
          <span className="inline-flex">
            <span className="h-1 w-8 green-grad inline-block mr-2 mt-2 rounded-lg"></span>
            <span>Feature your brand</span>
          </span>
          <span className="inline-flex">
            <span className="h-1 w-8 green-grad inline-block mr-2 mt-2 rounded-lg"></span>
            <span>Advertising Banner</span>
          </span>
          <span className="inline-flex">
            <span className="h-1 w-8 green-grad inline-block mr-2 mt-2 rounded-lg"></span>
            <span>White-labeled version for your country & brand</span>
          </span>
        </div>
      </div>
      <Image
        src={"/hero-mockup.png"}
        width={434}
        height={740}
        alt="Ellipse"
        className="md:w-[400px] md:h-[500px] w-60 md:mt-0 mt-20 mx-auto"
      />
    </div>
  );
}
function CTA() {
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto flex md:flex-row flex-col md:gap-32 md:px-40 px-5 py-20">
      <div className="mt-10">
        <h6 className="uppercase font-medium text-green-grad tracking-wider">
          contact us
        </h6>
        <h1 className="font-ubuntu md:text-5xl text-4xl text-white my-4">
          We help you to feature your brand in our platform
        </h1>
        <p className="text-paragraph">
          {`   Need an advertising banner or white-labeling for your brand on our platform? Contact us today, and let's make it happen. Your brand, your way.`}
        </p>
      </div>
      <div className="basis-1/3 md:mt-0 mt-20">
        <Form />
      </div>
    </div>
  );
}

function Form() {
  return (
    <form className="md:w-96 w-full rounded-2xl bg-black p-8 flex flex-col gap-6">
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
        <span className="font-medium text-white border-image">
          Send Message
        </span>
      </button>
    </form>
  );
}

function DownloadApp() {
  return (
    <div className=" relative bg-black md:pt-32 pt-10">
      <div className="container 2xl:max-w-screen-2xl mx-auto flex md:gap-24 gap-5 md:px-48 px-10">
        <Image
          src={"/download-section-mockup.png"}
          width={350}
          height={565}
          alt="Ellipse"
          className="md:w-72 w-32 object-contain"
        />

        <div className="mt-10">
          <h6 className="uppercase font-medium text-green-grad md:text-base text-xs">
            try on mobile
          </h6>
          <h1 className="font-ubuntu md:text-6xl text-xl text-white md:my-4">
            Download our app for free
          </h1>

          <div className="flex md:-ml-7 -ml-3">
            <Link href={"#"}>
              <Image
                src={"/app-store.png"}
                width={310}
                height={140}
                alt="App store button"
                className="md:w-60 w-24"
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/google-play.png"}
                width={310}
                height={140}
                alt="playstore button"
                className="md:w-60 w-24"
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
        className="absolute left-0 top-0 md:w-auto w-6"
      />
      <Image
        src={"/ellipse-right.png"}
        width={85}
        height={361}
        alt="Ellipse"
        className="absolute bottom-0 right-0 md:w-auto w-6"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="">
      <div className="border-y border-dashed ">
        <div className="container 2xl:max-w-screen-2xl px-5 md:py-16 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="md:w-1/3 w-full flex-shrink-0 md:mx-0 mx-auto ">
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

            <div className="flex md:-ml-7 -ml-3">
              <Link href={"#"}>
                <Image
                  src={"/app-store.png"}
                  width={310}
                  height={140}
                  alt="App store button"
                  className="md:w-40 w-24"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/google-play.png"}
                  width={310}
                  height={140}
                  alt="playstore button"
                  className="md:w-40 w-24"
                />
              </Link>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 ">
            <div className="lg:w-1/4 w-1/2">
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
                    Feature your brand
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
            <div className="lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-heading tracking-widest text-lg mb-3">
                Contact
              </h2>
              <nav className="list-none mb-10 space-y-4">
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-400 hover:text-gray-100"
                  >
                    admin@brandza.co.za
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
            <div className="lg:w-1/4 md:w-1/2 w-full  md:ml-20 mb-10">
              <h2 className="title-font font-medium text-heading tracking-widest text-lg mb-3">
                Follow us
              </h2>
              <div className="flex gap-4">
                <Link href={"#"} className="rounded-full p-2 green-grad">
                  <FaFacebookF className="w-4 h-4 fill-black" />
                </Link>
                <Link href={"#"} className="rounded-full p-2 green-grad">
                  <BsTwitter className="w-4 h-4 fill-black" />
                </Link>
                <Link href={"#"} className="rounded-full p-2 green-grad">
                  <ImInstagram className="w-4 h-4 fill-black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 px-5 flex md:flex-row md:justify-between gap-2 flex-col justify-between md:text-left text-center text-sm">
        <p className="">Copyrights 2023 @ All Rights Reserved</p>
        <p>
          Crafted by{" "}
          <a href={"https://mrrobotdev.com"} target="_blank">
            mrrobotdev.com
          </a>
        </p>
      </div>
    </footer>
  );
}
