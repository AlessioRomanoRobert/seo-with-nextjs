import Link from 'next/link';
import AppLayout from '../../components/AppLayout';

export default function Timeline({ userData }) {
  return (
    <>
      <AppLayout>
        <h1>This is the list of {userData.length} users</h1>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </AppLayout>
      <style jsx>{`
        h1 {
          font-size: 36px;
          color: red;
        }
      `}</style>
    </>
  );
}

Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/users')
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      return response;
    });
};
