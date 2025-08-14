'use client';

import Bounded from '@/components/Bounded';
import LoadingDot from '@/components/LoadingDot';
import PageHero from '@/components/PageHero';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { handleContact } from '@/lib/actions';
import clsx from 'clsx';
import Form from 'next/form';
import { useActionState } from 'react';

const initialFormState = {
  status: '',
  message: '',
  field: '',
};

const ContactUsPage = () => {
  const [state, actionFunction, isPending] = useActionState(
    handleContact,
    initialFormState,
  );
  return (
    <Bounded>
      <div className="flex flex-col gap-y-5">
        <PageHero
          title="Contact Us"
          body="We work with multiple suppliers to provide wholesale options. Contact us for more details."
        />
      </div>

      <div className="padded md:max-w-[80%] md:mx-auto space-y-5">
        <div className="text-center">
          <Title as="h2">Get in Touch</Title>
          <p>Our friendly team would love to hear from you</p>
        </div>

        <Form action={actionFunction} className="flex flex-col gap-y-5">
          <div className="space-y-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <Input
              name="name"
              autoComplete="name"
              id="name"
              placeholder="eg.John Doe"
              required
            />
            {state.status === 'error' && state.field === 'name' ? (
              <p className="form-error-message">{state.message}</p>
            ) : null}
          </div>

          <div className="space-y-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Input
              name="email"
              autoComplete="email"
              id="email"
              placeholder="eg.johndoe@example.com"
              required
            />
            {state.status === 'error' && state.field === 'email' ? (
              <p className="form-error-message">{state.message}</p>
            ) : null}
          </div>

          <div className="space-y-3">
            <label htmlFor="phone" className="block">
              Phone (optional)
            </label>
            <Input
              name="phone"
              autoComplete="phone"
              id="phone"
              placeholder="+95123456789"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <Textarea
              name="message"
              id="message"
              placeholder="I'd like to make bulk purchases for resale."
            />
            {state.status === 'error' && state.field === 'message' ? (
              <p className="form-error-message">{state.message}</p>
            ) : null}
          </div>

          <Button
            className={clsx(isPending ? 'pointer-events-none bg-muted' : '')}
          >
            {isPending ? <LoadingDot /> : <span>Send Message</span>}
          </Button>
        </Form>
      </div>
    </Bounded>
  );
};

export default ContactUsPage;
