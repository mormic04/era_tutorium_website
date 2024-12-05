import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes';
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-K5G5RSBLR8`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K5G5RSBLR8', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* ThemeProvider and main app */}
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
