export const headerRoutes = [
  { name: 'Home', route: '#home' },
  { name: 'About', route: '#about' },
  { name: 'Collection', route: '#' },
  { name: 'Community', route: '#' },
];

export const countdownOptionsArray = [
  { color: '#37A2FD', unit: 'Days' },
  { color: '#59B313', unit: 'Hours' },
  { color: '#FFDB5C', unit: 'Minutes' },
  { color: '#D017BE', unit: 'Seconds' },
];

export const getTimeDiff = (endDate: number, startDate: number) => {
  if (endDate - startDate < 1) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      ended: true,
    };
  }
  // console.log(startDate);

  let diffInMilliSeconds = (endDate - startDate) / 1000;

  // console.log(endDate - startDate);

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;
  // console.log('calculated days', days);

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;
  // console.log('calculated hours', hours);

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;
  // console.log('minutes', minutes);

  // calculate seconds
  const seconds = Math.floor(diffInMilliSeconds % 60);
  diffInMilliSeconds -= seconds;
  // console.log('seconds', seconds);

  return {
    days,
    hours,
    minutes,
    seconds,
    ended: false,
  };
};

export const quarterItemArray = [
  { title: 'Q1', color: '#E82768', img: './img/red_arrow.png' },
  { title: 'Q2', color: '#33CCFF', img: './img/blue_arrow.png' },
  { title: 'Q3', color: '#CCDF23 ', img: './img/yellow_arrow.png' },
  { title: 'Q4', color: '#21EDBA', img: './img/green_arrow.png' },
];

export const socialMediaLinksArray = [
  { name: 'facebok', url: '/', img: './img/social_facebook.png' },
  { name: 'twitter', url: '/', img: './img/social_twitter.png' },
  { name: 'instagram', url: '/', img: './img/social_instagram.png' },
  { name: 'linkedin', url: '/', img: './img/social_linkedin.png' },
];

export const metaData = {
  siteName: 'INUX Tech',
  title: 'INUX Tech | Decentralized Finance Redefined',
  description:
    'Creation of highly efficient, secure and scalable Next-generation DeFi products on the Solana network.',
  //   'https://res.cloudinary.com/iobami/image/upload/w_500/v1631699445/email-templates/medixab10_duqlwm.png',
  keywords: 'inux, inux tech, crypto, solana, DeFi, finance',
  url: '',

  // geo: {
  //   placeName: 'Ikeja',
  //   position: '6.5474147;3.3639306',
  //   region: 'NG',
  // },
};

export const currencyFormat = (number: any) => {
  const num = parseFloat(number);
  return `$${num.toFixed(7).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};

export const cryptoFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 7,
});

export const cryptoCardFormatter = new Intl.NumberFormat('en-US', {
  // style: 'currency',
  // currency: 'USD',
  maximumFractionDigits: 7,
});
