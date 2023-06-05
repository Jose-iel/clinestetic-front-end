import Banner from 'components/groups/Banner';
import { Container } from 'styles/layout';
import fetcher from 'utilities/cms';

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <Banner />

      <Container></Container>
    </div>
  );
}

export async function getServerSideProps() {
  const cms = await fetcher(`${process.env.NEXT_PLUBIC_HOSTNAME}/api/cms`);
  return {
    props: { cms }
  };
}
