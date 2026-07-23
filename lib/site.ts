const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL =
  envUrl && URL.canParse(envUrl)
    ? envUrl
    : "https://ido-nlp.vercel.app";

export const SITE_NAME = "עידו ספרא — מרצה ומנחה סדנאות";
