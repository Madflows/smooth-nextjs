import useSmoothScroll from '@/hooks/useSmoothScroll';
import '@/styles/globals.scss';
import { Bodoni_Moda, Syncopate, Bai_Jamjuree } from 'next/font/google';

const bodoni = Bodoni_Moda({ subsets: ['latin'], variable: '--font-bodoni' });
const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate',
});
const baijamjuree = Bai_Jamjuree({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jamjuree',
});

export default function App({ Component, pageProps }) {
  useSmoothScroll();
  return (
    <main
      className={`${bodoni.variable} ${syncopate.variable} ${baijamjuree.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
