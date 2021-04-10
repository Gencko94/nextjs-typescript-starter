import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="px-2 text-red-700">hello world</h1>
      <h1 className="py-2">{t('hello')}</h1>
    </div>
  );
}
