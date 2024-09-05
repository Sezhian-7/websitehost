import Head from 'next/head';
// import MVLogo from '../../asset/image/jpg&png/Mediwave Logo.png';

interface DynamicHeadProps {
  children: any;
  title: string;
  description?: string;
  image?: any;
  pageURL?:string;
}

const DynamicHead: React.FC<DynamicHeadProps> = ({
  children,
  title,
  description,
  image,
  pageURL,
}) => {
  const siteTitle = 'Mediwave Digital Private Limited';
  const siteUrl = 'https://www.mediwavedigital.com/';
  const ogImageUrl = `https://lh3.googleusercontent.com/p/AF1QipPbZXoHYnsDaRkblpvPlsoLk8pMAm85stpUksW2=s680-w680-h510`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        {/* Open Graph */}
        <meta
          property='og:title'
          content={title ? `${title} | ${siteTitle}` : siteTitle}
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={siteUrl ? siteUrl : pageURL} />
        <meta property='og:image' content={image ? image : ogImageUrl} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={siteTitle} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@MediwaveD' />
        <meta
          name='twitter:title'
          content={title ? `${title} | ${siteTitle}` : siteTitle}
        />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image ? image : ogImageUrl} />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default DynamicHead;
