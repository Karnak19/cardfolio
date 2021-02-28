import Head from 'next/head';
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
        <div className="card-content">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="image-wrapper">
              <img src="/images/portrait-small.webp" alt="" className="rounded-full shadow-xl" />
            </div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Basile Vernouillet</h1>
            <div className="separator"></div>
            <h2 className="pt-4 subtitle">
              <BagSvg />
              Developer & Instructor React / NodeJS
            </h2>
            <h3 className="subtitle">
              <BagSvg />
              Wild Code School
            </h3>
            <p className="pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-blue-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              Biarritz, France
            </p>
            <p className="pt-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi reprehenderit quidem eligendi numquam quo
              quas ipsa officiis suscipit, obcaecati architecto perferendis autem modi in quibusdam laboriosam sed sint. Quisquam?
            </p>
            <div className="pt-12 pb-6">
              <a href="mailto:basile.vernouillet@gmail.com" target="_blank" rel="noreferrer noopener" className="blue-button">
                Email me
              </a>
            </div>

            <SocialLinksWrapper />
          </div>
        </div>

        <div className="w-full lg:w-5/12">
          <img src="/images/portrait-height.jpg" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
        </div>
      </div>
    </>
  );
}
