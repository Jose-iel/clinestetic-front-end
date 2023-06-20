import Card from 'components/common/Card';
import Heading from 'components/common/Heading';
import Button from 'components/form/Button';
import FieldCustom from 'components/form/FieldCustom';
import Banner from 'components/groups/Banner';
import { BannerTextWrap } from 'components/groups/Banner/style';
import Products from 'components/groups/Products';
import Faq from 'components/pages/home/Faq';
import { useTheme } from 'styled-components';
import * as css from 'styles//components/banners.component';
import { Theme } from 'styles/interfaces';
import fetcher from 'utilities/cms';

import { ICmsData } from './interfaces';

export default function Home({ cms }: ICmsData) {
  const theme: Theme = useTheme();
  const { fontSizes } = theme;

  return (
    <>
      <Banner
        options={{
          contentWidth: '68.75rem',
          background: `${cms.home?.banners?.intro.image}`,
          css: css.bannerIntro
        }}
      >
        <BannerTextWrap>
          <Heading
            title={{
              text: `${cms.home?.banners?.intro.title}`,
              css: css.headingIntroTitle
            }}
            subtitle={{
              text: `${cms.home?.banners?.intro.subtitle}`,
              css: css.headingIntroSubtitle
            }}
            paragraph={{
              text: `${cms.home?.banners?.intro.paragraph}`,
              css: css.headingIntroParagraph
            }}
          />
        </BannerTextWrap>
        <Card
          options={{
            rounded: false,
            css: css.cardIntro
          }}
        >
          <form>
            <FieldCustom
              formType="select"
              options={{
                labelEnabled: true,
                select: {
                  id: 'procedures',
                  name: 'procedures',
                  placeholder: 'Selecionar',
                  textLabel: 'Procedimento',
                  selectOptions: [{ value: 'Opção 1', label: 'Opção 1' }]
                }
              }}
            />
            <FieldCustom
              formType="input"
              options={{
                labelEnabled: true,
                input: {
                  id: 'city',
                  name: 'city',
                  type: 'text',
                  placeholder: 'São Paulo',
                  textLabel: 'Cidade',
                  rounded: false
                }
              }}
            />
            <FieldCustom
              formType="input"
              options={{
                labelEnabled: true,
                input: {
                  id: 'neighborhood',
                  name: 'neighborhood',
                  type: 'text',
                  placeholder: 'Moca',
                  textLabel: 'Bairro',
                  rounded: false
                }
              }}
            />
            <Button
              options={{
                width: '100%'
              }}
              hasIcon={false}
            >
              Buscar
            </Button>
          </form>
        </Card>
      </Banner>
      <Products
        products={cms.products?.topSelling}
        options={{
          columns: 3,
          heading: {
            text: 'Os mais vendidos'
          }
        }}
      />
      <Banner
        options={{
          contentWidth: '68.75rem',
          background: `${cms.home?.banners?.evaluation.image}`,
          css: css.bannerEvaluation
        }}
      >
        <BannerTextWrap>
          <Heading
            title={{
              as: 'h3',
              size: `${fontSizes && fontSizes[15]}`,
              text: `${cms.home?.banners?.evaluation.title}`,
              css: css.headingEvaluationTitle
            }}
            subtitle={{
              size: `${fontSizes && fontSizes[52]}`,
              text: `${cms.home?.banners?.evaluation.subtitle}`,
              css: css.headingEvaluationSubtitle
            }}
          />
        </BannerTextWrap>
        <Card
          options={{
            rounded: false,
            css: css.cardEvaluation
          }}
        >
          <form>
            <FieldCustom
              formType="select"
              options={{
                labelEnabled: true,
                select: {
                  id: 'procedures-evaluation',
                  name: 'procedures-evaluation',
                  placeholder: 'Selecionar',
                  textLabel: 'Procedimento',
                  selectOptions: [{ value: 'Opção 1', label: 'Opção 1' }]
                }
              }}
            />
            <FieldCustom
              formType="input"
              options={{
                labelEnabled: false,
                input: {
                  id: 'city',
                  name: 'city',
                  type: 'text',
                  placeholder: 'Cidade',
                  rounded: false
                }
              }}
            />
            <FieldCustom
              formType="input"
              options={{
                labelEnabled: false,
                input: {
                  id: 'neighborhood',
                  name: 'neighborhood',
                  type: 'text',
                  placeholder: 'Celular',

                  rounded: false
                }
              }}
            />
            <Button
              options={{
                width: '100%'
              }}
              hasIcon={false}
            >
              Buscar
            </Button>
          </form>
        </Card>
      </Banner>
      <Products
        products={cms.products?.treatment}
        options={{
          columns: 4,
          heading: {
            text: 'Tratamentos',
            link: {
              text: 'Ver tudo',
              path: '/tratamentos'
            }
          }
        }}
      />
      <Faq />
    </>
  );
}

export async function getServerSideProps() {
  const cms = await fetcher(`${process.env.NEXT_PLUBIC_HOSTNAME}/api/cms`);
  return {
    props: { cms }
  };
}
