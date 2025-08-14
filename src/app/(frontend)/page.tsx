import Bounded from '@/components/Bounded';
import CTA from '@/components/CTA';
import Hero from '@/components/homepage/Hero';
import ShopByCategories from '@/components/homepage/ShopByCategories';
import ProductCard from '@/components/ProductCard';
import Review from '@/components/Review';
import Title from '@/components/Title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { sanityFetch } from '@/sanity/lib/live';
import { FAQS_QUERY, PRODUCTS_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';

export default async function Home() {
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });
  const { data: faqs } = await sanityFetch({ query: FAQS_QUERY });

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

      <div className="padded text-center">
        <p className="font-medium">
          We work with multiple suppliers to provide wholesale options.{' '}
          <CTA href="/contact-us">Contact Us</CTA> for more details.
        </p>
      </div>

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

      {/* faq */}
      <div className="flex flex-col  padded justify-center items-center bg-brand-accent-100/50">
        <Title as="h2">Frequently Asked Questions</Title>

        {faqs.map((faq) =>
          faq.faqs?.map((q) => (
            <Accordion
              key={q.question}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value={q.question || ''}>
                <AccordionTrigger>{q.question}</AccordionTrigger>
                {q.answer && (
                  <AccordionContent>
                    <PortableText value={q.answer} />
                  </AccordionContent>
                )}
              </AccordionItem>
            </Accordion>
          )),
        )}
      </div>

      {/* reviews */}
      <Review />
    </Bounded>
  );
}
