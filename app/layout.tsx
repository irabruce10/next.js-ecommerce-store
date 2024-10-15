import './globals.css';
import { StoreProvider } from './redux/StoreProvider';
import { Salsa } from 'next/font/google';

import App from './components/App';
import Footer from './components/footer/Footer';
import type { ReactNode } from 'react';

const salsa = Salsa({
  subsets: ['latin'],

  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s / E-soko',
    default: 'Welcome / E-soko',
  },
  description: 'E-soko market ,beautiful market ...',
};

type Props = {
  children: ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${salsa.className}  text-primary-100 min-h-screen flex flex-col`}
      >
        <StoreProvider>
          <App>
            {children}
            <Footer />
          </App>
        </StoreProvider>
      </body>
    </html>
  );
}
