import { defineField } from 'sanity';

export const imageType = defineField({
  name: 'mainImage',
  title: 'Main Images',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      validation: (rule) =>
        rule.required().info(`Image Caption is required for accessibility.`),
    }),
  ],
});
