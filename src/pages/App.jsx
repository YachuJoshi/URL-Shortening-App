import Head from "next/head";

export function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Create Next App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
