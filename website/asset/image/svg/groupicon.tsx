const groupicon = () => {
  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='25' cy='25' r='25' fill='white' />
      <path
        className='animate-float'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13 30L19 24L25 18L37 30L34.6 32.4L25 22.8L15.4 32.4L13 30Z'
        fill='#00A973'
      />
      <path
        className='animate-float'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.8 28.0001L17.4 25.6001L13 30.0001L15.4 32.4001L19.8 28.0001ZM30.2 28.0001L34.6 32.4001L37 30.0001L32.6 25.6001L30.2 28.0001Z'
        fill='#00A973'
      />
    </svg>
  );
};

export default groupicon;
