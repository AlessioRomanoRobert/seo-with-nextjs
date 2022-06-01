import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const resp = await fetch('http://localhost:3000/users');
  const respJson = await resp.json();
  return {
    props: {
      users: respJson.userData,
    },
  };
}

export default function Home({ users }) {
  return (
    <AppLayout home={true}>
      <div className={styles.container}>
        <h1>Main page</h1>
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
      </div>
    </AppLayout>
  );
}
