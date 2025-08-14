'use client';

import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { handleSubscription } from '@/lib/actions';
import Form from 'next/form';
import { useActionState } from 'react';
import { GrSend } from 'react-icons/gr';
import LoadingDot from './LoadingDot';
import clsx from 'clsx';

const initialFormState = {
  status: '',
  message: '',
};

const ComingSoon = () => {
  const [state, actionFunction, isPending] = useActionState(
    handleSubscription,
    initialFormState,
  );
  return (
    <Bounded className="flex flex-col justify-center items-center padded comingsoon-bg">
      <div className="space-y-3 text-center">
        <Title as="h1" size="lg">
          Coming Soon
        </Title>
        <p className="text-fs-900">Join Our Waitlist</p>
      </div>

      <Form action={actionFunction} className="w-full relative">
        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <Input name="email" id="email" placeholder="eg.johndoe@example.com" />
          {state.status === 'error' ? (
            <p className="form-error-message">{state.message}</p>
          ) : null}
        </div>

        <div className="absolute right-[0.5rem] top-1">
          <Button
            type="submit"
            className={clsx('h-7', isPending && 'pointer-events-none bg-muted')}
          >
            {isPending ? <LoadingDot /> : <GrSend />}
          </Button>
        </div>
      </Form>
    </Bounded>
  );
};

export default ComingSoon;
