import { MdOutlineReviews, MdOutlineStar } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const reviewType = defineType({
  name: 'review',
  title: 'Reviews',
  icon: MdOutlineReviews,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      rating: 'rating',
    },
    prepare({ name, rating }) {
      const nameFormatted = name || 'Unnamed User';
      const ratingFormatted = `Rating: ${rating} star${rating > 1 ? 's' : ''}`;

      return {
        title: name ? nameFormatted : '',
        subtitle: rating ? ratingFormatted : rating,
      };
    },
  },
});
