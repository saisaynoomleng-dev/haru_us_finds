import { MdOutlinePhoneCallback } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Contacts',
  icon: MdOutlinePhoneCallback,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (rule) => rule.required().min(10),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
    },
    prepare({ name, email }) {
      return {
        title: name ? name : 'Name not Provided',
        subtitle: email ? email : 'Email not Provided',
      };
    },
  },
});
