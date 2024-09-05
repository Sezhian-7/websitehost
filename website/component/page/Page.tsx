import Head from "next/head";

interface PageProps {
  children: any;
  title?: string;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  const pageTitle = `${title} | Mediwave Digital`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      {children}
    </>
  );
};

export default Page;
