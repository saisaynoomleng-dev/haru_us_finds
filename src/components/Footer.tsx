'use client';

import Link from 'next/link';
import Title from './Title';
import Logo from './Logo';
import Form from 'next/form';
import { Input } from './ui/input';
import { GrSend } from 'react-icons/gr';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { useActionState } from 'react';
import { handleSubscription } from '@/lib/actions';
import LoadingDot from './LoadingDot';
import CTA from './CTA';

const COMPANY_LINKS = [
  { name: 'Contact Us', url: '/contact-us' },
  { name: 'FAQ', url: '/faq' },
];

const COLLECTION_LINKS = [
  { name: 'all', url: '/collection' },
  { name: 'Gift for her', url: '/collection/gift-for-her' },
  { name: "Parent's Picks", url: "/collection/parent's pick" },
  { name: 'Self-care Sunday', url: '/collection/self-care sunday' },
];

const SUPPORT_LINKS = [
  { name: 'Privacy Policy', url: '/privacy-policy' },
  { name: 'Shipping Policy', url: '/shipping-policy' },
  { name: 'Terms of Service', url: '/terms-of-service' },
];

const initialFormState = {
  status: '',
  message: '',
};

const Footer = () => {
  const [state, actionFunction, isPending] = useActionState(
    handleSubscription,
    initialFormState,
  );

  return (
    <footer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-x-8 padded bg-brand-red-200">
      <div>
        <Logo />
        <p className="text-fs-200">
          Discover premium beauty products, health supplements, tasty snacks,
          stylish bags, trendy sneakers, nourishing hair care, and fashionable
          clothing — all shipped straight from the US to your door in Myanmar.
          Quality you trust, service you love.
        </p>
      </div>

      {/* company */}
      <div className="flex flex-col gap-y-3 ">
        <Title as="h3" size="sm" className="!text-fs-400">
          Company
        </Title>

        <div className="flex flex-col gap-y-2">
          {COMPANY_LINKS.map((link) => (
            <Link key={link.url} href={link.url} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* collections */}
      <div className="flex flex-col gap-y-3 ">
        <Title as="h3" size="sm" className="!text-fs-400">
          Collections
        </Title>

        <div className="flex flex-col gap-y-2">
          {COLLECTION_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="hover:underline capitalize"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* support */}
      <div className="flex flex-col gap-y-3 ">
        <Title as="h3" size="sm" className="!text-fs-400">
          Support
        </Title>

        <div className="flex flex-col gap-y-2">
          {SUPPORT_LINKS.map((link) => (
            <Link key={link.url} href={link.url} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* subscription */}
      <div className="flex flex-col gap-y-3 col-span-full text-center">
        <Title as="h3" size="sm" className="!text-fs-400">
          Subscribe to our Email
        </Title>

        <p>Subscribe to receive to all our updates and offers.</p>

        <Form action={actionFunction} className="relative">
          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input name="email" autoComplete="email" id="email" />
            {state.status === 'error' && (
              <p className="form-error-message">{state.message}</p>
            )}
          </div>

          <div className="absolute right-3 top-2">
            <button type="submit">
              {isPending ? <LoadingDot /> : <GrSend />}
            </button>
          </div>

          <p className="text-right text-fs-200 my-2">
            By subscribing, you agree to the{' '}
            <CTA href="/terms-of-service">Terms of Service</CTA> &{' '}
            <CTA href="/privacy-policy">Privacy Policy</CTA>.
          </p>
        </Form>

        <div className="flex justify-center items center gap-x-5">
          <Link href="/">
            <FaFacebook />
          </Link>

          <Link href="/">
            <FaTiktok />
          </Link>
        </div>
      </div>

      <div className="col-span-full place-self-end">
        <p className="text-fs-100">
          Copyright &copy;
          {new Date().getFullYear()}{' '}
          <span className="uppercase">Haru&apos;s USA Finds</span>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
