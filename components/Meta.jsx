import Head from 'next/head';

const Meta = (props) => {
  return (
    <Head>
      <meta
        name='description'
        content='We offer services that turn local businesses into profitable organisations'
      />
      <title>{props.title}</title>
    </Head>
  );
};

export default Meta;
