import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../components/AppLayout';

export async function getServerSideProps({ params }) {
  const resp = await fetch(`http://localhost:3000/users/${params._id}`);
  const respJson = await resp.json();
  console.log('---->', respJson);
  return {
    props: {
      user: respJson.existingUser,
    },
  };
}

export default function Details({ user }) {
  return (
    <>
      <Head>
        <title>{user.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1>{user.email}</h1>
        <nav>
          <Link href="/">
            <a> Back to home</a>
          </Link>
        </nav>
      </AppLayout>

      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 48px;
        }
        a {
          color: orange;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
