import React from 'react';
import Title from './Title';

const PageHero = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="pageHeroBg flex flex-col justify-center items-center h-64 text-center">
      <Title as="h1" size="sm" className="!text-brand-black-50">
        {title}
      </Title>

      <p className="text-fs-200 text-brand-black-50/80">{body}</p>
    </div>
  );
};

export default PageHero;
