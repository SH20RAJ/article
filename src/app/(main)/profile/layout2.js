import Footer from "@/_compo/homepage/Footer";
import Nav from "@/app/_compo/Nav";

export const metadata = {
  title: "Shade Article || Read Write Enjoy",
  description: "Know More About the World, Write More About the World",
};

export default function RootLayout({ children }) {
  return (
    <>
    <div>
        <Nav/>
        {children}
        <Footer/>
    </div>
    </>
    );
}
