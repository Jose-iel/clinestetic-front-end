import { getCmsData } from 'utilities/cms';
import { Container } from 'styles/layout';

export async function getServerSideProps() {
  const cms = await getCmsData();
  return {
    props: { cms }
  };
}

export default function Home() {
  return <Container>Hello</Container>;
}
