import Head from "next/head";
import { ShortURLsProvider } from "../context";

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
      <ShortURLsProvider>
        <Component {...pageProps} />
      </ShortURLsProvider>
    </>
  );
}
