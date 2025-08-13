import { GiConverseShoe } from 'react-icons/gi';
import { MdCategory, MdOutlinePhoneCallback } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { SiNike } from 'react-icons/si';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Haru's USA Finds")
    .items([
      S.divider().title('Store'),
      S.documentTypeListItem('product').title('Products').icon(GiConverseShoe),
      S.documentTypeListItem('brand').title('Brands').icon(SiNike),
      S.documentTypeListItem('category')
        .title('Product Categories')
        .icon(MdCategory),

      S.divider().title('Management'),
      S.documentTypeListItem('contact')
        .title('Contacts')
        .icon(MdOutlinePhoneCallback),
      S.documentTypeListItem('subscription')
        .title('Subscriptions')
        .icon(RiMoneyDollarCircleFill),
    ]);
