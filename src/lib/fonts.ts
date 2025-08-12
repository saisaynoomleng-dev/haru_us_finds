import localFont from 'next/font/local';

export const Jost = localFont({
  src: [
    {
      path: '../app/fonts/jost/Jost-Thin.ttf',
      style: 'normal',
      weight: '100',
    },
    {
      path: '../app/fonts/jost/Jost-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../app/fonts/jost/Jost-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../app/fonts/jost/Jost-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../app/fonts/jost/Jost-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../app/fonts/jost/Jost-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../app/fonts/jost/Jost-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../app/fonts/jost/Jost-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../app/fonts/jost/Jost-Black.ttf',
      style: 'normal',
      weight: '900',
    },
  ],
  variable: '--font-jost',
});

export const Tenor = localFont({
  src: '../app/fonts/tenor/TenorSans-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-tenor',
});
