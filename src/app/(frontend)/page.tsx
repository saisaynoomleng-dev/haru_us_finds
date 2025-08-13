import Bounded from '@/components/Bounded';
import Hero from '@/components/homepage/Hero';
import ShopByCategories from '@/components/homepage/ShopByCategories';
import ProductCard from '@/components/ProductCard';
import { sanityFetch } from '@/sanity/lib/live';
import { PRODUCTS_QUERY } from '@/sanity/lib/queries';

export default async function Home() {
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

  return (
    <Bounded>
      <Hero />

      <ShopByCategories />
    </Bounded>
  );
}
