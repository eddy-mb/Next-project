import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eddy Mamani",
  description: "Diseñado y desarrollado por Eddy",
  icons: {
    icon: "/src/app/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
