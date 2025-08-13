import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="block">
      <span className="uppercase font-tenor text-fs-600 md:text-fs-700">
        haru&apos;s
      </span>
    </Link>
  );
};

export default Logo;
