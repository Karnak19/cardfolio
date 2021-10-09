import Head from 'next/head';

import BuildingSvg from '../components/BuildingSvg.jsx';
import BagSvg from '../components/BagSvg';
import SocialLinksWrapper from '../components/SocialLinksWrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Basile Vernouillet</title>
        <meta name="description" content="Développeur, Formateur, React & NodeJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <div className="content">
        <div className="card-content backdrop-filter backdrop-blur-md">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="image-wrapper">
              <img src="/images/portrait-small.webp" alt="" className="rounded-full shadow-xl" />
            </div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Basile Vernouillet</h1>
            <div className="separator"></div>
            <h2 className="pt-4 subtitle">
              <BagSvg />
              Lead Developer
            </h2>
            <h3 className="subtitle">
              <BuildingSvg />
              Pytheas Capital Advisor
            </h3>
            <p className="pt-2 text-blue-200 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-blue-300 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Biarritz, France
            </p>
            <p className="pt-8 text-sm">
              Passionate by code, I used to be a javascript instructor, transmitting my passion for
              code to my students. 💛
            </p>
            <p className="pt-4 text-sm">
              I love trying new stuffs, libraries, frameworks in the JS/TS ecosystem !
            </p>
            <p className="pt-6 text-sm">I also love custom keyboards !</p>
            <div className="pt-8 pb-6">
              <a
                href="mailto:basile.vernouillet@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blue-button group shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 inline-block transform group-hover:rotate-90 group-hover:translate-x-30 transition duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="mr-4">EMAIL ME</span>
              </a>
            </div>
            <SocialLinksWrapper />
          </div>
        </div>

        <div className="w-full lg:w-5/12 z-10">
          <img
            src="/images/portrait-height.webp"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}
