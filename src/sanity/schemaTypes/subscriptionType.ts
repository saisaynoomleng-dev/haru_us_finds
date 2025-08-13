import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export const subscriptionType = defineType({
  name: 'subscription',
  title: 'Subscriptions',
  icon: RiMoneyDollarCircleFill,
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
