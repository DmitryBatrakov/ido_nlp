/**
 * Канонический адрес сайта. Пока домена нет — заглушка;
 * после покупки домена задать NEXT_PUBLIC_SITE_URL в .env
 * (или в настройках хостинга) — например https://idosafra.co.il
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ido-safra.example.com";

export const SITE_NAME = "עידו ספרא — מטפל ב-NLP ודמיון מודרך";
