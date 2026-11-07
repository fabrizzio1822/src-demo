import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"SDC Joyería Exclusiva | Pensada para vos",description:"Joyas con presencia y detalles que te representan. Descubrí el universo de SDC Joyería Exclusiva. Demo conceptual."};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="es-AR"><body>{children}</body></html>}
