import React from 'react';
import Title from '../Title';
import { GiLipstick } from 'react-icons/gi';
import { FaKeyboard, FaSprayCan } from 'react-icons/fa';
import { CiDumbbell, CiPill } from 'react-icons/ci';
import { LuCandy } from 'react-icons/lu';
import { IoBagHandle } from 'react-icons/io5';
import { PiSneakerBold } from 'react-icons/pi';
import Link from 'next/link';
import { RiTShirtFill } from 'react-icons/ri';
import CTA from '../CTA';

const CATEGORIES = [
  { name: 'Beauty', icon: <GiLipstick /> },
  { name: 'Hair Care', icon: <FaSprayCan /> },
  { name: 'Clothing', icon: <RiTShirtFill /> },
  { name: 'Electronics', icon: <FaKeyboard /> },
  { name: 'Supplements', icon: <CiPill /> },
  { name: 'Snacks', icon: <LuCandy /> },
  { name: 'Bags', icon: <IoBagHandle /> },
  { name: 'Shoes', icon: <PiSneakerBold /> },
  { name: 'Sportwears', icon: <CiDumbbell /> },
];

const ShopByCategories = () => {
  return (
    <div className="padded flex flex-col gap-y-6">
      <div>
        <div className="flex justify-between items-center">
          <Title as="h2">Shop by Categories</Title>
          <CTA href="/shop">Shop All</CTA>
        </div>
        <p>
          Easily explore our carefully curated categories to find your favorite
          items
        </p>
      </div>

      <div className="grid grid-cols-3  gap-3">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            href={`/shop?category=${cat.name.toLowerCase()}`}
            className="flex flex-col p-3 bg-brand-red-200 rounded-sm justify-center items-center group hover:scale-[1.01] transition-transform duration-200"
          >
            <span className="text-brand-red-800 text-fs-800 group-hover:rotate-[20deg] transition-transform duration-200">
              {cat.icon}
            </span>
            <p className="group-hover:tracking-widest transition-all duration-200">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
