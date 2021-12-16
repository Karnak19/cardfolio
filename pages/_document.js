import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://analytics.basile.vernouillet.dev/tracker.js"
            data-ackee-server="https://analytics.basile.vernouillet.dev"
            data-ackee-domain-id="a8e3cfd6-429f-45a1-b14a-1b3a7a2faf47"
          ></script>
        </Head>
        <body
          style={{
            backgroundImage: "url('/images/bg.svg')",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
