import { urlFor } from '@/sanity/lib/image';
import { PRODUCTS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Title from './Title';
import { formatCurrency } from '@/lib/utils';

const ProductCard = (props: NonNullable<PRODUCTS_QUERYResult>[number]) => {
  const { name, slug, brand, price, mainImages } = props;
  const imageURL = mainImages ? mainImages[0].asset?.url : '';

  return (
    <Link
      href={`/shop/${slug?.current}`}
      className="flex flex-col h-[350px] w-[250px] p-5 group shadow-sm"
    >
      <div className="overflow-hidden pt-2 h-[200px]">
        {imageURL ? (
          <Image
            src={urlFor(imageURL).format('webp').url()}
            width={200}
            height={200}
            alt={name || ''}
            className="mx-auto max-h-[180px] w-fit group-hover:scale-[1.05] transition-transform duration-200"
          />
        ) : null}
      </div>

      <div className="flex flex-col">
        <p className="text-brand-black-50 text-fs-100">{brand?.name}</p>
        <Title as="h3" className="!text-fs-300 text-brand-black-200">
          {name}
        </Title>
        {price && <p className="text-fs-200">{formatCurrency(price)}</p>}
      </div>
    </Link>
  );
};

export default ProductCard;
