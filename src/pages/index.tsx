import fetcher from 'utilities/cms';
import { Container } from 'styles/layout';

export default function Home() {
  return <Container>Home Page</Container>;
}

export async function getServerSideProps() {
  const cms = await fetcher(`${process.env.NEXT_PLUBIC_HOSTNAME}/api/cms`);
  return {
    props: { cms }
  };
}
