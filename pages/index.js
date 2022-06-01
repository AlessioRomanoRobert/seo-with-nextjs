import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

export async function getServerSideProps() {
  const resp = await fetch('http://localhost:3000/users');
  const respJson = await resp.json();
  console.log('---->', respJson);
  return {
    props: {
      users: respJson.userData,
    },
  };
}

export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>SEO with NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1>
          <a href="https://nextjs.org">Users</a>
        </h1>
        <h2>Users list</h2>
        {users.map((user) => (
          <div key={user._id}>
            <Link href={`user/${user._id}`}>
              <a>
                <h3>{user.name}</h3>
              </a>
            </Link>
          </div>
        ))}
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
