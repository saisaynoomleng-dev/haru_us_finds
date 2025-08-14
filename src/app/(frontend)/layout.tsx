import Header from '@/components/Header';
import '../globals.css';
import Footer from '@/components/Footer';
import { SanityLive } from '@/sanity/lib/live';

const FrontendLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />

      <SanityLive />
    </main>
  );
};

export default FrontendLayout;
