'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import Title from '../Title';
import { useEffect, useState } from 'react';
import { GoDot, GoDotFill } from 'react-icons/go';

const allTabs = [
  {
    name: 'hero-1',
    category: 'cosmetics',
    title: 'Feel Fresh, Look Radiant',
    offset: 'right',
  },
  {
    name: 'hero-2',
    category: 'bags',
    title: 'Carry Elegance, Own the Moment',
    offset: 'left',
  },
  {
    name: 'hero-3',
    category: 'supplements',
    title: 'Fuel your body, power your life',
    offset: 'right',
  },
  {
    name: 'hero-4',
    category: 'sneakers',
    title: 'Step Into Style, Walk with Confidence',
    offset: 'left',
  },
  {
    name: 'hero-5',
    category: 'sportwears',
    title: 'Train in Style, perform at your best',
    offset: 'right',
  },
  {
    name: 'hero-6',
    category: 'electronics',
    title: 'Upgrade your gear, unlock your potential',
    offset: 'right',
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === allTabs.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="grid relative grid-cols-1">
        <div className="relative z-20 col-start-1 row-start-1">
          <Image
            src={`/${allTabs[activeIndex].name}.webp`}
            width={1600}
            height={800}
            alt={allTabs[activeIndex].category}
          />
        </div>

        <div
          className="grid col-start-1 row-start-1 relative z-50 px-5 self-center gap-y-3"
          style={{
            justifySelf:
              allTabs[activeIndex].offset === 'right' ? 'start' : 'end',
            justifyItems:
              allTabs[activeIndex].offset === 'right' ? 'start' : 'end',
            textAlign:
              allTabs[activeIndex].offset === 'right' ? 'start' : 'end',
          }}
        >
          <Title
            size="sm"
            className="text-brand-black-50 max-w-[60%] md:max-w-[80%] capitalize"
            style={{
              color:
                allTabs[activeIndex].category === 'electronics' ||
                allTabs[activeIndex].category === 'sneakers'
                  ? 'white'
                  : '',
            }}
          >
            {allTabs[activeIndex].title}
          </Title>
          <div className="flex items-center gap-x-3">
            <Link href="/shop">
              <Button>Shop Now</Button>
            </Link>
            <Link href="/shop">
              <Button variant="border">Shop All</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex absolute bottom-4 left-[50%] translate-x-[-50%] z-50 items-center justify-center gap-x-3">
        {allTabs.map((tab, i) => (
          <button
            key={tab.title}
            className="cursor-pointer text-white"
            onClick={() => setActiveIndex(i)}
          >
            {activeIndex === i ? (
              <GoDotFill className="size-5" />
            ) : (
              <GoDot className="size-3" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
