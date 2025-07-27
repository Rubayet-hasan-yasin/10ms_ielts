import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Params = Promise<{ locale: string }>;

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  const availableLocales = ['en', 'bn'];

  if (!availableLocales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar currentLang={locale} />
        <main>{children}</main>
      </body>
    </html>
  );
}
