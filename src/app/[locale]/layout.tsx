import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../global.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
});
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}
export const metadata: Metadata = {
  title: "ClickShare",
  description: "Description",
  icons: "https://v4.clickshare.store/theme/images/favicon-32x32.png",
};
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  if (!messages) {
    notFound();
  }
  const direction = locale === "en" || locale === "en" ? "ltr" : "rtl";

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${cairo.variable} font-sans scroll-smooth antialiased `}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
