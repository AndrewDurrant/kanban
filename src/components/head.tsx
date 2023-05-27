import Head from 'next/head';

interface Props {
  title: string;
  metaObject?: {};
}

export default function CustomHead({title, metaObject}: Props) {

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Kanban for Task Management" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}