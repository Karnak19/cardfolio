import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Basile Vernouillet</title>
      </Head>

      <div>
        <h1>Basile Vernouillet</h1>
      </div>
      <div>
        <p>Développeur, formateur React / NodeJS</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">basile</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
