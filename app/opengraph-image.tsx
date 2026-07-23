import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brand, hero, tagline } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "עידו ספרא — מרצה ומנחה סדנאות לחוסן, תקשורת והתפתחות אישית";


export default async function OpengraphImage() {
  const fonts = join(process.cwd(), "assets/fonts");
  const [montserrat, assistantBold, assistantRegular, photo] = await Promise.all([
    readFile(join(fonts, "Montserrat-ExtraBold.ttf")),
    readFile(join(fonts, "Assistant-ExtraBold.ttf")),
    readFile(join(fonts, "Assistant-Regular.ttf")),
    readFile(join(process.cwd(), "public/images/ido.png")),
  ]);

  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#14161a",
          color: "#efeae0",
          fontFamily: "Assistant",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={420}
          height={630}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 22,
              letterSpacing: 3,
              fontWeight: 800,
              color: "#e3c275",
              textTransform: "uppercase",
            }}
          >
            {tagline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat",
              fontSize: 96,
              lineHeight: 0.92,
              letterSpacing: -2,
              margin: "28px 0 24px",
            }}
          >
            <span>{brand.wordmark.first}</span>
            <span style={{ color: "#d9b45f" }}>{brand.wordmark.second}</span>
          </div>

         
          <div
            style={{
              display: "flex",
              borderLeft: "4px solid #b8873b",
              paddingLeft: 18,
              fontSize: 30,
              fontWeight: 800,
              lineHeight: 1.3,
              maxWidth: 520,
            }}
          >
            {hero.roleEn}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 22,
              letterSpacing: 2,
              color: "#a79e8c",
              textTransform: "uppercase",
            }}
          >
            {hero.locationEn}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Montserrat", data: montserrat, style: "normal", weight: 800 },
        { name: "Assistant", data: assistantBold, style: "normal", weight: 800 },
        { name: "Assistant", data: assistantRegular, style: "normal", weight: 400 },
      ],
    },
  );
}
