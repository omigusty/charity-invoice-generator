import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// const manifestForPlugIn = {
//   registerType: "prompt",
//   includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
//   manifest: {
//     name: "Invoice Generator",
//     short_name: "invoice-generator",
//     description: "Aplikasi pembuatan bukti penerimaan shadaqah otomatis",
//     icons: [
//       {
//         src: "/android-chrome-192x192.png",
//         sizes: "192x192",
//         type: "image/png",
//         purpose: "favicon",
//       },
//       {
//         src: "./public/android-chrome-512x512.png",
//         sizes: "512x512",
//         type: "image/png",
//         purpose: "favicon",
//       },
//       {
//         src: "./public/apple-touch-icon.png",
//         sizes: "180x180",
//         type: "image/png",
//         purpose: "apple touch icon",
//       },
//       {
//         src: "./public/maskable_icon.png",
//         sizes: "512x512",
//         type: "image/png",
//         purpose: "any maskable",
//       },
//     ],
//     theme_color: "#171717",
//     background_color: "#f0e7db",
//     display: "standalone",
//     scope: "/",
//     start_url: "/",
//     orientation: "portrait",
//   },
// };

export default defineConfig({
  // plugins: [react(), VitePWA(manifestForPlugIn)],
  plugins: [
    react(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: ["**/*"],
      manifest: {
        name: "Invoice Generator",
        short_name: "invoice-generator",
        description: "Aplikasi pembuatan bukti penerimaan shadaqah otomatis",
        scope: "/",
        start_url: "/",
        theme_color: "#f69435",
        background_color: "#f69435",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "/maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
