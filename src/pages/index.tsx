import Card from 'components/common/Card';
import Heading from 'components/common/Heading';
import Button from 'components/form/Button';
import FieldCustom from 'components/form/FieldCustom';
import Banner from 'components/groups/Banner';
import { css, useTheme } from 'styled-components';
import { bannerIntroStyled } from 'styles/global.components';
import * as S from 'styles/global.components';
import { Theme } from 'styles/interfaces';
import fetcher from 'utilities/cms';

import { ICmsData } from './interfaces';

export default function Home({ cms }: ICmsData) {
  const theme: Theme = useTheme();
  const { colors } = theme;

  return (
    <>
      <Banner
        options={{
          contentWidth: '68.75rem',
          background: 'img/home/girl-background-carousel.svg',
          css: bannerIntroStyled
        }}
      >
        <S.BannerTextWrap>
          <Heading
            title={{
              text: `${cms?.banners?.intro?.title}`,
              css: css`
                color: ${colors?.light[150]};
                margin-bottom: 1rem;
              `
            }}
            subtitle={{
              text: `${cms?.banners?.intro?.subtitle}`,
              css: css`
                color: ${colors?.light[150]};
                margin-bottom: 3rem;
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
        </S.BannerTextWrap>
        <Card
          options={{
            rounded: false,
            css: css`
              width: 25rem;
              @media screen and (max-width: 540px) {
                width: 100%;
                padding: 2rem;
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
    </>
  );
}

export async function getServerSideProps() {
  const cms = await fetcher(`${process.env.NEXT_PLUBIC_HOSTNAME}/api/cms`);
  return {
    props: { cms }
  };
}
