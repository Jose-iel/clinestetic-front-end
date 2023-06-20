import Card from 'components/common/Card';
import Heading from 'components/common/Heading';
import Button from 'components/form/Button';
import FieldCustom from 'components/form/FieldCustom';
import Banner from 'components/groups/Banner';
import { BannerTextWrap } from 'components/groups/Banner/style';
import Products from 'components/groups/Products';
import Faq from 'components/pages/home/Faq';
import { css, useTheme } from 'styled-components';
import {
  bannerFreeTrial,
  bannerIntroStyled
} from 'styles//components/banners.component';
import { Theme } from 'styles/interfaces';
import fetcher from 'utilities/cms';

import { ICmsData } from './interfaces';

export default function Home({ cms }: ICmsData) {
  const theme: Theme = useTheme();
  const { colors, fontSizes, space, bp } = theme;

  return (
    <>
      <Banner
        options={{
          contentWidth: '68.75rem',
          background: 'img/home/girl-background-carousel.svg',
          css: bannerIntroStyled
        }}
      >
        <BannerTextWrap>
          <Heading
            title={{
              text: `${cms?.banners?.intro?.title}`,
              css: css`
                color: ${colors?.light[150]};
                margin-bottom: ${space && space[16]};
              `
            }}
            subtitle={{
              text: `${cms?.banners?.intro?.subtitle}`,
              css: css`
                color: ${colors?.light[150]};
                margin-bottom: ${space && space[49]};
                font-weight: 400;
              `
            }}
            paragraph={{
              text: `${cms?.banners?.intro?.paragraph}`,
              css: css`
                color: ${colors?.light[150]};
                font-weight: 300;
                line-height: 1.4;
              `
            }}
          />
        </BannerTextWrap>
        <Card
          options={{
            rounded: false,
            css: css`
              width: 25rem;

              @media screen and (max-width: ${bp?.sm}) {
                width: 100%;
                padding: ${space && space[32]};
              }
            `
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
        products={cms?.topSellingProducts}
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
          background: 'img/home/agende-avaliacao.svg',
          css: bannerFreeTrial
        }}
      >
        <BannerTextWrap>
          <Heading
            title={{
              as: 'h3',
              size: `${fontSizes && fontSizes[15]}`,
              text: `AVALIAÇÃO GRATUITA`,
              css: css`
                color: ${colors?.light[150]};
                margin-bottom: ${space && space[16]};
                font-weight: 400;
                letter-spacing: 3px;

                @media (max-width: ${bp?.lg}) {
                  font-size: ${fontSizes && fontSizes[15]};
                }
              `
            }}
            subtitle={{
              size: `${fontSizes && fontSizes[52]}`,
              text: `Agende uma avaliação`,
              css: css`
                color: ${colors?.light[150]};
                font-weight: 700;

                @media (max-width: ${bp?.lg}) {
                  font-size: ${fontSizes && fontSizes[40]};
                }

                @media (max-width: ${bp?.sm}) {
                  font-size: ${fontSizes && fontSizes[36]};
                }
              `
            }}
          />
        </BannerTextWrap>
        <Card
          options={{
            rounded: false,
            css: css`
              width: 25rem;
              @media (max-width: ${bp?.sm}) {
                width: 100%;
                padding: ${space && space[32]};
              }
            `
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
        products={cms?.treatmentProducts}
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
