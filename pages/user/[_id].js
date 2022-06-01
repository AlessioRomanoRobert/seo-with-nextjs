import Link from 'next/link';
import AppLayout from '../../components/AppLayout';
import styles from '../../styles/UserDetails.module.css';

export async function getServerSideProps({ params }) {
  const resp = await fetch(`http://localhost:3000/users/${params._id}`);
  const respJson = await resp.json();
  return {
    props: {
      user: respJson.existingUser,
    },
  };
}

export default function Details({ user }) {
  return (
    <AppLayout title={`${user.name} web page`} description={user.description ? user.description : 'This user has no description'}>
      <h1 className={styles.title}>{user.email}</h1>
      <nav>
        <Link href="/">
          <a> Back to home</a>
        </Link>
      </nav>
    </AppLayout>
  );
}
