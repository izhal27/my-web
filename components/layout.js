import Footer from '../components/footer';
import Meta from '../components/meta';
import Navbar from '../components/navbar'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
