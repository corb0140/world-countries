import "./globals.css";
import StoreProvider from "./redux/StoreProvider";

export const metadata = {
  title: "World Countries",
  description: "Search for countries and get information about them",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Nunito">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
