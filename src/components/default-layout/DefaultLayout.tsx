import type { ReactNode } from 'react';
import Hud from '../hud/Hud.tsx';
import Footer from '../hud/Footer.tsx';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hud />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

