import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean West Studio | Luxury Wedding Photography",
  description:
    "Luxury wedding photography and videography studio. We capture authentic moments and create timeless memories for your special day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Iconify */}
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2M6V79H761"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2M6V79H761');
          `}
        </Script>
        {/* Google Fonts - Google Sans Flex */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&display=swap"
        />
        {/* Google Fonts - Additional fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .font-google-sans-flex {
                font-family: "Google Sans Flex", sans-serif !important;
              }
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-gray-800 selection:text-white text-white bg-[#0A0A0A]">
        {children}
      </body>
    </html>
  );
}
