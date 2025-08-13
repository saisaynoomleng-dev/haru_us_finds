import { GiConverseShoe } from 'react-icons/gi';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Products',
  icon: GiConverseShoe,
  groups: [
    { name: 'details', title: 'Details' },
    { name: 'editorials', title: 'Editorials' },
  ],
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      group: 'details',
      validation: (rule) => rule.required(),
      hidden: ({ document }) => !document?.name,
    }),

    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      group: 'details',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'availableSize',
      title: 'Available Size',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      options: {
        list: [
          { title: 'XS', value: 'xs' },
          { title: 'S', value: 's' },
          { title: 'M', value: 'm' },
          { title: 'XL', value: 'xl' },
          { title: 'XXL', value: 'xxl' },
          { title: 'US M-4', value: 'us-m-4' },
          { title: 'US M-4.5', value: 'us-m-4.5' },
          { title: 'US M-5', value: 'us-m-5' },
          { title: 'US M-5.5', value: 'us-m-5.5' },
          { title: 'US M-6', value: 'us-m-6' },
          { title: 'US M-6.5', value: 'us-m-6.5' },
          { title: 'US M-7', value: 'us-m-7' },
          { title: 'US M-7.5', value: 'us-m-7.5' },
          { title: 'US M-8', value: 'us-m-8' },
          { title: 'US M-8.5', value: 'us-m-8.5' },
          { title: 'US M-9', value: 'us-m-9' },
          { title: 'US M-9.5', value: 'us-m-9.5' },
          { title: 'US M-10', value: 'us-m-10' },
          { title: 'US M-10.5', value: 'us-m-10.5' },
          { title: 'US M-11', value: 'us-m-11' },
          { title: 'US M-11.5', value: 'us-m-11.5' },
          { title: 'US M-12', value: 'us-m-12' },
          { title: 'US M-12.5', value: 'us-m-12.5' },
          { title: 'US W-4', value: 'us-w-4' },
          { title: 'US W-4.5', value: 'us-w-4.5' },
          { title: 'US W-5', value: 'us-w-5' },
          { title: 'US W-5.5', value: 'us-w-5.5' },
          { title: 'US W-6', value: 'us-w-6' },
          { title: 'US W-6.5', value: 'us-w-6.5' },
          { title: 'US W-7', value: 'us-w-7' },
          { title: 'US W-7.5', value: 'us-w-7.5' },
          { title: 'US W-8', value: 'us-w-8' },
          { title: 'US W-8.5', value: 'us-w-8.5' },
          { title: 'US W-9', value: 'us-w-9' },
          { title: 'US W-9.5', value: 'us-w-9.5' },
          { title: 'US W-10', value: 'us-w-10' },
          { title: 'US W-10.5', value: 'us-w-10.5' },
          { title: 'US W-11', value: 'us-w-11' },
          { title: 'US W-11.5', value: 'us-w-11.5' },
          { title: 'US W-12', value: 'us-w-12' },
          { title: 'US W-12.5', value: 'us-w-12.5' },
        ],
      },
      group: 'details',
    }),
    defineField({
      name: 'availableColor',
      title: 'Available Colors',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'mainImages',
      title: 'Product Images',
      type: 'array',
      of: [defineArrayMember({ type: 'mainImage' })],
    }),
    defineField({
      name: 'desc',
      title: 'Product Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      image: 'mainImages.0.asset',
    },
    prepare({ name, price, image }) {
      const priceFormatted = new Intl.NumberFormat('en-MM', {
        style: 'currency',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        currency: 'MMK',
      }).format(price);

      return {
        title: name ? name : 'Untitled Product Name',
        subtitle: price ? priceFormatted : 'Unknown price',
        media: image || GiConverseShoe,
      };
    },
  },
});
