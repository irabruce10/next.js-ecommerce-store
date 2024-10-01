import localFont from 'next/font/local';
import './globals.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';

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
        <header>
          <Logo />
          <Navigation />
        </header>

        <main> {children}</main>
        <footer>Copyright@ 2024 MyApp</footer>
      </body>
    </html>
  );
}
