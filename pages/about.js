import AppLayout from '../components/AppLayout';

export default function About() {
  return (
    // Estas llaves hacen falta si se usa jsx
    <>
      <AppLayout title="About us" description="This is a crazy framework">
        <h1>About</h1>
        <p>This is about page</p>
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
