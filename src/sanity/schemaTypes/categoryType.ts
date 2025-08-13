import { CiDumbbell, CiPill } from 'react-icons/ci';
import { FaKeyboard, FaSprayCan } from 'react-icons/fa';
import { GiLipstick, GiTShirt } from 'react-icons/gi';
import { IoBagHandle } from 'react-icons/io5';
import { LuCandy } from 'react-icons/lu';
import { MdCategory } from 'react-icons/md';
import { PiSneakerBold } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

const iconList = [
  { name: 'Beauty', icon: GiLipstick },
  { name: 'Hair Care', icon: FaSprayCan },
  { name: 'Clothing', icon: GiTShirt },
  { name: 'Electronics', icon: FaKeyboard },
  { name: 'Supplements', icon: CiPill },
  { name: 'Snacks', icon: LuCandy },
  { name: 'Bags', icon: IoBagHandle },
  { name: 'Shoes', icon: PiSneakerBold },
  { name: 'Sportwears', icon: CiDumbbell },
];

export const categoryType = defineType({
  name: 'category',
  title: 'Categories',
  icon: MdCategory,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      options: {
        list: [
          { title: 'Beauty', value: 'beauty' },
          { title: 'Hair Care', value: 'hair care' },
          { title: 'Clothing', value: 'clothing' },
          { title: 'Electronics', value: 'electronics' },
          { title: 'Supplements', value: 'supplements' },
          { title: 'Snacks', value: 'snacks' },
          { title: 'Bags', value: 'bags' },
          { title: 'Shoes', value: 'shoes' },
          { title: 'Sportwears', value: 'sportwears' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      const nameFormatted = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;

      const iconObj = iconList.find(
        (icon) => icon.name.toLowerCase() === name.toLowerCase(),
      );
      const iconComponent = iconObj ? iconObj.icon : MdCategory;

      return {
        title: name ? nameFormatted : 'Untitled Category',
        media: iconComponent,
      };
    },
  },
});
