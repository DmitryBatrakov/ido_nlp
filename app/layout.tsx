import type { Metadata } from "next";
import { Assistant, Montserrat } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";


const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "עידו ספרא — מרצה ומנחה סדנאות לחוסן, תקשורת והתפתחות אישית",
    template: "%s | עידו ספרא",
  },
  description:
    "הרצאות וסדנאות לארגונים, צוותים ומנהלים בנושאי חוסן מנטלי, לחץ וחרדה, תקשורת ושינוי הרגלים. NLP Master, מנחה סדנאות, סופר ומנחה פודקאסט. כל מפגש מותאם לצורכי הארגון.",
  keywords: [
    "מרצה לארגונים",
    "סדנאות לארגונים",
    "הרצאות העשרה",
    "סדנת חוסן",
    "התמודדות עם לחץ וחרדה",
    "NLP",
    "מאסטר NLP",
    "פיתוח מנהלים",
    "מרצה מילואימניקים",
    "עידו ספרא",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "עידו ספרא — מרצה ומנחה סדנאות",
    description:
      "הרצאות וסדנאות לארגונים וצוותים: חוסן מנטלי, לחץ וחרדה, תקשורת ושינוי הרגלים. כלים פרקטיים ליישום מיידי.",
    url: "/",
    siteName: SITE_NAME,
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "עידו ספרא — מרצה ומנחה סדנאות",
    description:
      "הרצאות וסדנאות לארגונים וצוותים: חוסן מנטלי, לחץ וחרדה, תקשורת ושינוי הרגלים.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "עידו ספרא",
  alternateName: "Ido Safra",
  jobTitle: "מרצה, מנחה סדנאות ומאסטר NLP",
  description:
    "מרצה ומנחה סדנאות לפיתוח חוסן, תקשורת והתפתחות אישית — לארגונים, צוותים ואנשים פרטיים.",
  url: SITE_URL,
  image: `${SITE_URL}/images/ido.png`,
  telephone: "+972525106411",
  knowsAbout: [
    "חוסן מנטלי",
    "התמודדות עם לחץ וחרדה",
    "תקשורת בין-אישית",
    "NLP",
    "שינוי הרגלים",
  ],
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
      className={`${assistant.variable} ${montserrat.variable} antialiased`}
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
