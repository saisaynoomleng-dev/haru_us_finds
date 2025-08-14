import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { brandType } from './brandType';
import { blockContentType } from './components/blockContentType';
import { imageType } from './components/imageType';
import { categoryType } from './categoryType';
import { contactType } from './contactType';
import { subscriptionType } from './subscriptionType';
import { reviewType } from './reviewType';
import { FAQType } from './FAQType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    brandType,
    blockContentType,
    imageType,
    categoryType,
    contactType,
    subscriptionType,
    reviewType,
    FAQType,
  ],
};
