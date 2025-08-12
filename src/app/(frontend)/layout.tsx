import Header from '@/components/Header';
import '../globals.css';

const FrontendLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default FrontendLayout;
