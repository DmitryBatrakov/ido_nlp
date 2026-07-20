import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import "./globals.css";

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "עידו ספרא — מטפל ב-NLP ודמיון מודרך | חיפה ואונליין",
  description:
    "NLP Master. משלב עומק רגשי עם חשיבה אסטרטגית — טיפול בטראומה, זוגיות וחרדה. לא השראה רגעית, אלא שינוי שמחזיק לאורך זמן. מפגשים בחיפה ואונליין.",
  openGraph: {
    title: "עידו ספרא — מטפל ב-NLP ודמיון מודרך",
    description:
      "טיפול בטראומה, זוגיות וחרדה. עבודה עם התת-מודע לשינוי שמחזיק לאורך זמן. חיפה ואונליין.",
    locale: "he_IL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "עידו ספרא",
  alternateName: "Ido Safra",
  jobTitle: "מטפל ב-NLP ודמיון מודרך",
  description:
    "NLP Master — טיפול בטראומה, זוגיות וחרדה. מפגשים בחיפה ואונליין.",
  telephone: "+972525106411",
  address: {
    "@type": "PostalAddress",
    addressLocality: "חיפה",
    addressCountry: "IL",
  },
  sameAs: [
    "https://www.instagram.com/mastersafra",
    "https://www.youtube.com/@idosafra2595",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frankRuhl.variable} ${heebo.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
