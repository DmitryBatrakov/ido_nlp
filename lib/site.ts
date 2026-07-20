/**
 * Канонический адрес сайта. Когда появится свой домен — задать
 * NEXT_PUBLIC_SITE_URL в env (например https://idosafra.co.il).
 * Пустое/невалидное значение переменной игнорируется, чтобы
 * new URL() не ронял сборку.
 */
const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL =
  envUrl && URL.canParse(envUrl)
    ? envUrl
    : "https://ido-nlp-dmitrybatrakovs-projects.vercel.app";

export const SITE_NAME = "עידו ספרא — מטפל ב-NLP ודמיון מודרך";
