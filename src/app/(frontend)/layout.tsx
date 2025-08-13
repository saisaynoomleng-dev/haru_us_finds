import Header from '@/components/Header';
import '../globals.css';
import Footer from '@/components/Footer';

const FrontendLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default FrontendLayout;
