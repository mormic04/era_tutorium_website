import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes';
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* Google Analytics Tag */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-K5G5RSBLR8"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K5G5RSBLR8');
        `}
      </Script>

      {/* Main App */}
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
