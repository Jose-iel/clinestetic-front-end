import { getCmsData } from 'utilities/cms';
import { Container } from 'styles/layout';
import { ICmsData } from './interfaces';

export async function getServerSideProps() {
  const cms = await getCmsData();
  return {
    props: { cms }
  };
}

export default function Home({ cms }: ICmsData) {
  return <Container>Hello</Container>;
}
