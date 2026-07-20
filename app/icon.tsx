import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const frankRuhl = await readFile(
    join(process.cwd(), "assets/fonts/FrankRuhlLibre-Medium.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c1015",
          border: "2px solid #c9a24b",
          color: "#e0c076",
          fontFamily: "FrankRuhl",
          fontSize: 40,
          paddingBottom: 6,
        }}
      >
        ע
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "FrankRuhl", data: frankRuhl, style: "normal", weight: 500 },
      ],
    },
  );
}
