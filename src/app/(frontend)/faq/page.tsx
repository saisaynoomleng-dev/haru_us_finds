import Bounded from '@/components/Bounded';
import PageHero from '@/components/PageHero';
import Title from '@/components/Title';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { sanityFetch } from '@/sanity/lib/live';
import { FAQS_QUERY } from '@/sanity/lib/queries';
import { AccordionContent } from '@radix-ui/react-accordion';
import { Metadata } from 'next';
import { PortableText } from 'next-sanity';

export const metadata: Metadata = {
  title: 'FAQs',
};

const FAQPage = async () => {
  const { data: faqs } = await sanityFetch({ query: FAQS_QUERY });

  return (
    <Bounded>
      <PageHero
        title="Customer Help"
        body="If you need to ask any other questions, you can reach out to our Customer
        Support via Facebook."
      />

      <div className="flex flex-col gap-y-5 padded">
        {faqs.map((faq) => (
          <div key={faq.slug?.current}>
            <Title as="h3" className="border-b border-b-brand-black-50/30">
              {faq.title}
            </Title>

            {faq.faqs?.map((q) => (
              <Accordion
                key={q.question}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={q.question || ''}>
                  <AccordionTrigger className="font-normal">
                    {q.question}
                  </AccordionTrigger>
                  {q.answer && (
                    <AccordionContent>
                      <PortableText value={q.answer} />
                    </AccordionContent>
                  )}
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default FAQPage;
