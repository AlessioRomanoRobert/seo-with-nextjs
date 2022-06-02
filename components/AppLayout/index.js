import Head from 'next/head';

export default function AppLayout({ children, title, description, home }) {
  return home ? (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>NAV HOME</nav>
      </header>
      <main>{children}</main>
      <footer>Footer home</footer>
    </>
  ) : (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>NAV</nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}

AppLayout.defaultProps = {
  title: 'SEO with NextJS 12.1',
  description: 'Awesome website and framewok',
  home: false,
};
