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

export const handleReview = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{
  status: string;
  message: string;
  field?: string;
}> => {
  const name = formData.get('name')?.toString().trim() || '';
  const message = formData.get('message')?.toString().trim() || '';
  const ratingNumber = formData.get('rating')?.toString().trim() || '';
  const rating = ratingNumber ? parseInt(ratingNumber) : 0;

  if (!name) {
    return {
      status: 'error',
      message: 'Name field cannot be empty!',
      field: 'name',
    };
  }

  if (!message) {
    return {
      status: 'error',
      message:
        'Message filed cannot be empty and must have at least 10 characters',
      field: 'message',
    };
  }

  try {
    await client.create({
      _type: 'review',
      name,
      message,
      rating,
    });

    return {
      status: 'success',
      message: 'Thank you for your review!',
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Something went wrong, try again later!',
    };
  }
};
