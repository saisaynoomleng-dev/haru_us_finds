import { defineQuery } from 'next-sanity';

export const PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
 && defined(slug.current)]
 |order(_createdAt desc)
 {
  name,
  price,
  brand->{
    name
  },
  _createdAt,
  mainImages[]{
    asset->{url},
    alt
  },
  slug
 }`);
