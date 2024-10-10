import './globals.css';
import { StoreProvider } from './redux/StoreProvider';
import { Salsa } from 'next/font/google';

import App from './components/App';

const salsa = Salsa({
  subsets: ['latin'],
  family: 'Salsa',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${salsa.className}  text-primary-100 min-h-screen flex flex-col`}
      >
        <StoreProvider>
          <App>
            {children}
            <footer>Copyright@ MyApp {new Date().getFullYear()} </footer>
          </App>
        </StoreProvider>
      </body>
    </html>
  );
}
