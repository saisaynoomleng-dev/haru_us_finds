'use server';

import { client } from '@/sanity/lib/client';
import { PrevFormStateProps } from './types';

export const handleSubscription = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{ status: string; message: string }> => {
  const email = formData.get('email')?.toString().trim() || '';
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!email) {
    return {
      status: 'error',
      message: 'Email field cannot be empty',
    };
  }

  if (!reg_email.test(email)) {
    return {
      status: 'error',
      message: 'Must be a valid email address',
    };
  }

  try {
    await client.create({
      _type: 'subscription',
      email,
    });

    return {
      status: 'success',
      message: 'Thank you for your subscription!',
    };
  } catch (err) {
    console.error(err);
    return {
      status: 'error',
      message: 'Something went wrong! Try again later!',
    };
  }
};
