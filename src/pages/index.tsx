"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [yes, setYes] = useState(false); // Initialize as false if you're using it as a boolean

  const handleNoButtonClick = () => {
    setYesButtonScale(yesButtonScale => yesButtonScale * 1.1);
  };

  const handleSetYes = () => {
    setYes(true);
  }

  return (
    <Layout>
      <div className='flex gap-4 bg-love p-6 rounded-2xl'>Will you date me ?<div className='heartbeat -pt-4'>❤️</div></div>
      {
        !yes ? <div className="flex gap-4">
          <button
            className="bg-emerald-300 px-12 py-6 rounded-md hover:bg-emerald-400"
            style={{ transform: `scale(${yesButtonScale})` }}
            onClick={handleSetYes}
          >
            Yes
          </button>
          <button
            className="bg-red-300 px-12 py-6 rounded-md hover:bg-red-400"
            onClick={handleNoButtonClick}
          >
            No
          </button>
        </div> : <div className='text-center gap-4'>
          I LOVE YOU !
          <Image
            className='rounded-3xl mb-12'
            src="/cony_and_brown_love.gif"
            alt="Love GIF"
            width={400}
            height={240}
          />
          <Link href='/activity' legacyBehavior>
            <a className='text-3xl bg-[#FCA5A5] hover:bg-[#F87171] p-4 rounded-lg animate-bounceOnce'>Select an activity</a>
          </Link>
        </div>
      }
    </Layout>
  );
}
