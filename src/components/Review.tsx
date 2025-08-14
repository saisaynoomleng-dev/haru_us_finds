'use client';

import Form from 'next/form';
import Title from './Title';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useActionState, useState } from 'react';
import { handleReview } from '@/lib/actions';
import LoadingDot from './LoadingDot';
import { IoMdStar } from 'react-icons/io';

const initialFormState = {
  status: '',
  message: '',
  field: '',
};

const Review = () => {
  const [starRating, setStarRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [state, actionFunction, isPending] = useActionState(
    handleReview,
    initialFormState,
  );

  return (
    <div className="padded flex flex-col gap-y-4 bg-brand-accent-100/50">
      <Title as="h2" size="sm">
        Leave us Your Experience
      </Title>

      <Form action={actionFunction} className="flex flex-col gap-y-3">
        <div className="flex gap-x-3">
          {Array.from({ length: 5 }, (_, i) => {
            const ratingValue = i + 1;
            return (
              <button
                type="button"
                key={i}
                onClick={() => setStarRating(ratingValue)}
                onMouseEnter={() => setHoverRating(ratingValue)}
                onMouseLeave={() => setHoverRating(0)}
              >
                <IoMdStar
                  className={
                    ratingValue <= (hoverRating || starRating)
                      ? 'text-brand-accent-600'
                      : 'text-brand-accent-200'
                  }
                />
              </button>
            );
          })}

          <input hidden name="rating" value={starRating} readOnly />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <Input name="name" id="name" placeholder="John Doe" />
          {state.status === 'error' && state.field === 'name' ? (
            <p className="form-error-message">{state.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <Textarea
            name="message"
            id="message"
            placeholder="I love shopping with Haru's USA Finds..."
            className="h-32"
          />
          {state.status === 'error' && state.field === 'message' ? (
            <p className="form-error-message">{state.message}</p>
          ) : null}
        </div>

        <Button className="">
          {isPending ? (
            <span style={{ fill: 'white' }}>
              <LoadingDot />
            </span>
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </Form>
    </div>
  );
};

export default Review;
