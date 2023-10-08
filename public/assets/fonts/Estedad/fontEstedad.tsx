import localFont from "next/font/local";

// 100 – Thin
// 200 – Extra Light (Ultra Light)
// 300 – Light
// 400 – Normal (Regular)
// 500 – Medium
// 600 – Semi Bold (Demi Bold)
// 700 – Bold
// 800 – Extra Bold (Ultra Bold)
// 900 – Black (Heavy)

const estedad = localFont({
  src: [
    {
      path: "./Estedad-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Estedad-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Estedad-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Estedad-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Estedad-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--estedad-font",
});

export default estedad;
