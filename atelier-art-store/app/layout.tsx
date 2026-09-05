import "./globals.css";
import { StoreProvider } from "./store";
export const metadata={title:"Atelier — Contemporary Original Art",description:"Original contemporary paintings from an independent artist."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreProvider>{children}</StoreProvider></body></html>}