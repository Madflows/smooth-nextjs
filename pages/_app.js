import useSmoothScroll from '@/hooks/useSmoothScroll';
import MonsterEnergy from '@/icons/MonsterEnergy';
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
      className={`${bodoni.variable} ${syncopate.variable} ${baijamjuree.variable} font-sans max-lg:max-h-screen overflow-hidden`}
    >
      <div className='invisible lg:visible cursor-none'>
        <Component {...pageProps} />
      </div>
      <div className='flex lg:hidden absolute inset-0 z-[10] bg-[#191919] text-[#ffffff] text-lg items-center justify-center font-jamjuree'>
        <div className='flex flex-col gap-4 items-center'>
          {/* <div className='text-white'>
            <MonsterEnergy className="animate-pulse" />
          </div> */}
          <p className='text-center font-semibold w-[90vw] max-w-sm'>
            GO GET A LAPTOP.
            <br />
            THIS SITE CAN ONLY BE VIEWED ON A DESKTOP DEVICE.
          </p>
        </div>
      </div>
    </main>
  );
}
