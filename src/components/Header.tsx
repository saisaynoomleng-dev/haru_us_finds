'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import Logo from './Logo';
import { IoBagHandleOutline, IoChevronDownSharp } from 'react-icons/io5';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { CiUser } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Title from './Title';
import Image from 'next/image';

const CATEGORIES_LINKS = [
  { name: 'Beauty', url: '/shop?category=beauty' },
  { name: 'Hair Care', url: '/shop?category=hair-care' },
  { name: 'Fashion', url: '/shop?category=clothing' },
  { name: 'Supplements', url: '/shop?category=supplements' },
  { name: 'Shoes', url: '/shop?category=shoes' },
  { name: 'Electronics', url: '/shop?category=electronics' },
  { name: 'Shop All Categories', url: '/shop' },
];

const COLLECTIONS_LINKS = [
  { name: 'Glow & Go', url: '/collection/glow-and-go' },
  { name: 'Wellness Wonders', url: '/collection/wellness-wonders' },
  { name: 'Summer Streets', url: '/collection/summer-streets' },
  { name: "Parents' Picks", url: '/collection/parents-picks' },
  { name: 'Self-care Sunday', url: '/collection/self-care-sunday' },
  { name: 'Shop All Collections', url: '/collection' },
];

const Header = () => {
  const [navFixed, setNavFixed] = useState<boolean>(false);
  const [shopOpen, setShopOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavFixed(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'grid grid-cols-3 items-center justify-center px-4 py-2 fixed top-0 shadow-sm z-30 h-20 w-screen backdrop-blur-sm',
        navFixed ? ' bg-white/20 ' : 'bg-white',
      )}
    >
      <nav role="navigation" aria-label="Main Navigation Menu">
        <ul className="flex items-center justify-around font-tenor">
          <li>
            <Button
              variant="navLink"
              onClick={() => setShopOpen((prevOpen) => !prevOpen)}
            >
              <span>Shop</span>
              <IoChevronDownSharp
                className={clsx(
                  'transition-all duration-200',
                  shopOpen ? 'rotate-180' : '',
                )}
              />
              <div
                className={clsx(
                  'absolute bg-white z-900 top-15 left-0 w-screen flex justify-between gap-x-5 p-5 transition-opacity duration-200',
                  shopOpen ? 'opacity-100' : 'opacity-0 hidden',
                )}
              >
                <div className="grid grid-cols-2 gap-y-5 md:grid-cols-[1fr_1fr_2fr] md:gap-x-3 w-full">
                  {/* categories */}
                  <div className="flex flex-col gap-y-3 text-left">
                    <Title
                      as="h4"
                      size="sm"
                      className="!text-fs-300 font-semibold text-brand-black-50/80"
                    >
                      Categories
                    </Title>
                    <ul className="flex flex-col gap-y-2">
                      {CATEGORIES_LINKS.map((cat) => (
                        <li key={cat.url}>
                          <Link
                            href={cat.url}
                            className="hover:font-medium font-jost font-normal"
                          >
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* collections */}
                  <div className="flex flex-col gap-y-3 text-left">
                    <Title
                      as="h4"
                      size="sm"
                      className="!text-fs-300 font-semibold text-brand-black-50/80"
                    >
                      Collections
                    </Title>

                    <ul className="flex flex-col gap-y-2">
                      {COLLECTIONS_LINKS.map((col) => (
                        <li key={col.url}>
                          <Link
                            href={col.url}
                            className="hover:font-medium font-jost font-normal"
                          >
                            {col.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* images */}
                  <div className="flex gap-x-4 items-start">
                    <Link className="group" href="/shop?categories=shoes">
                      <div className="flex flex-col gap-y-2 overflow-hidden">
                        <Image
                          src="/link-1.webp"
                          width={300}
                          height={300}
                          className="w-[300px] rounded-sm group-hover:scale-[1.01] transition-all duration-200"
                          alt=""
                        />
                        <p className="group-hover:font-semibold ">
                          Women&apos;s Summer Sneakers
                        </p>
                      </div>
                    </Link>

                    <Link href="/shop?categories=supplements" className="group">
                      <div className="flex flex-col gap-y-2 overflow-hidden">
                        <Image
                          src="/link-2.webp"
                          width={300}
                          height={300}
                          className="w-[300px] rounded-sm group-hover:scale-[1.01] transition-all duration-200"
                          alt=""
                        />
                        <p className="group-hover:font-semibold ">
                          Parents&apos; daily multi-vitamin
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Button>
          </li>
        </ul>
      </nav>

      <div className="mx-auto">
        <Logo />
      </div>

      <div className="flex justify-end md:gap-x-3 items-center">
        <div>
          <Button variant="navLink" onClick={() => setShopOpen(false)}>
            <HiMagnifyingGlass className="md:size-5" />
          </Button>
        </div>

        <Link href="/cart">
          <Button variant="navLink" onClick={() => setShopOpen(false)}>
            <IoBagHandleOutline className="md:size-5" />
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button variant="navLink" onClick={() => setShopOpen(false)}>
            <CiUser className="md:size-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
