
import Nav from '@/app/_compo/Nav'

export default function RootLayout({ children }) {
  return (
    <div>
        <Nav/>
        {
            children
        }
    </div>
  );
}
