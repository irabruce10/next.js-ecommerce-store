import localFont from 'next/font/local';
import './globals.css';
import { StoreProvider } from './redux/StoreProvider';

import App from './components/App';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>

        <footer>Copyright@ MyApp {new Date().getFullYear()} </footer>
      </body>
    </html>
  );
}
