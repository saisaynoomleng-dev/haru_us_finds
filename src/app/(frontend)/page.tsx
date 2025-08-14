import Bounded from '@/components/Bounded';
import CTA from '@/components/CTA';
import Hero from '@/components/homepage/Hero';
import ShopByCategories from '@/components/homepage/ShopByCategories';
import ProductCard from '@/components/ProductCard';
import Review from '@/components/Review';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { PRODUCTS_QUERY } from '@/sanity/lib/queries';

export default async function Home() {
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });
  const lastestProducts = products
    .sort(
      (a, b) =>
        new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime(),
    )
    .slice(0, 10);

  return (
    <Bounded>
      <Hero />

      {/* Brands Banner */}

      <ShopByCategories />

      {/* Latest Products */}
      <div className="padded flex flex-col gap-y-6">
        <div>
          <div className="flex justify-between items-center">
            <Title as="h2">Latest Products</Title>
            <CTA href="/shop">Shop All</CTA>
          </div>
          <p>Step into this week&apos;s top picks</p>
        </div>

        <div className="flex gap-x-2 max-w-screen overflow-x-auto">
          {lastestProducts.map((product) => (
            <ProductCard key={product.slug?.current} {...product} />
          ))}
        </div>
      </div>

      {/* reviews */}
      <Review />
    </Bounded>
  );
}
