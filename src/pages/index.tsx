import Card from 'components/common/Card';
import Heading from 'components/common/Heading';
import Text from 'components/common/Text';
import Button from 'components/form/Button';
import FormField from 'components/form/FormField';
import Banner from 'components/groups/Banner';
import { BannerTextWrap } from 'components/groups/Banner/style';
import Products from 'components/groups/Products';
import Faq from 'components/pages/home/Faq';
import * as CSS from 'styles/components/banners';
import { topSelling, treatment } from 'utilities/data';

export default function Home() {
  return (
    <>
      <Banner
        contentWidth="68.75rem"
        background="/img/home/girl-background-carousel.svg"
        styled={CSS.Intro}
      >
        <BannerTextWrap>
          <Heading
            primary={{
              content: `Somos a Clinestetic`,
              css: CSS.IntroTitle
            }}
            secondary={{
              content: `Sistema que te proporciona uma ampliação de beleza e bem estar mais perto de você.`,
              css: CSS.IntroSubtitle
            }}
          />
          <Text styled={CSS.IntroText}>
            Nosso objetivo de promover a saúde e o bem-estar físico e estético
            mais!
          </Text>
        </BannerTextWrap>
        <Card styled={CSS.IntroCard}>
          <form>
            <FormField
              formType="select"
              id="procedure"
              name="procedure"
              placeholder="Selecionar"
              label={{
                content: 'Procedimento'
              }}
              select={{
                options: [{ value: 'Opção 1', label: 'Opção 1' }]
              }}
            />
            <FormField
              formType="input"
              id="city"
              name="city"
              label={{
                content: 'Cidade'
              }}
              placeholder="São Paulo"
              type="text"
            />
            <FormField
              formType="input"
              id="neighborhood"
              name="neighborhood"
              label={{
                content: 'Bairro'
              }}
              placeholder="São Paulo"
              type="text"
            />
            <Button styled={CSS.IntroButton}>Buscar</Button>
          </form>
        </Card>
      </Banner>
      <Products
        products={topSelling}
        columns={3}
        heading={{
          content: `Os mais vendidos`
        }}
      />
      <Banner
        contentWidth="68.75rem"
        background="/img/home/agende-avaliacao.svg"
        styled={CSS.Evaluation}
      >
        <BannerTextWrap>
          <Heading
            primary={{
              as: 'h3',
              content: 'AVALIAÇÃO GRATUITA',
              css: CSS.EvaluationTitle
            }}
            secondary={{
              content: 'Agende uma avaliação',
              css: CSS.EvaluationSubtitle
            }}
          />
        </BannerTextWrap>
        <Card styled={CSS.EvaluationCard}>
          <form>
            <FormField
              formType="select"
              label={{
                content: 'Procedimento'
              }}
              id="procedures-evaluation"
              name="procedures-evaluation"
              placeholder="Selecionar"
              variant="primary"
              select={{
                options: [{ value: 'Opção 1', label: 'Opção 1' }]
              }}
            />
            <FormField
              id="city"
              name="city"
              type="text"
              placeholder="Cidade"
              formType="input"
            />
            <FormField
              id="cellphone"
              name="cellphone"
              type="text"
              placeholder="Celular"
              formType="input"
            />
            <Button styled={CSS.EvaluationButton}>Buscar</Button>
          </form>
        </Card>
      </Banner>
      <Products
        products={treatment}
        columns={4}
        heading={{
          content: 'Tratamentos',
          link: {
            content: 'Ver tudo',
            path: '/tratamentos'
          }
        }}
      />
      <Faq />
    </>
  );
}
