import React from 'react';

import Divider from 'components/common/Divider';
import Heading from 'components/common/Heading';
import Text from 'components/common/Text';
import Products from 'components/groups/Products';
import ProductView from 'components/pages/treatment/ProductView';
import Topics from 'components/pages/treatment/Topics';
import * as CSS from 'styles/components/treatment';
import { Container } from 'styles/layout';
import { treatment } from 'utilities/data';

export default function Treatment() {
  return (
    <>
      <Container>
        <ProductView />
      </Container>
      <Divider styled={CSS.TreatmentDivider} />
      <Container>
        <Heading
          primary={{
            as: 'h2',
            content: 'Sobre o procedimento',
            css: CSS.TreatmentHeading
          }}
        />
        <Text styled={CSS.TreatmentText}>
          Promove uma micro esfoliação da pele. Entre os principais objetivos do
          procedimento estão a remoção das células mortas que ficam na camada
          mais superficial da pele e a estimulação à produção de colágeno.
        </Text>
        <Topics
          title="Benefícios"
          list={[
            'Renova a camada celular da pele que ajudam a rejuvenescê-la.',
            'Estimula a produção de colágeno. ',
            'Esfoliação da epiderme promovendo a eliminação das manchas superficiais.',
            'Pode ser usado para melhorar o aspecto das estrias principalmente as avermelhadas, mais recentes'
          ]}
        />
        <Topics
          title="Quando não é indicado:"
          description="O peeling de diamante não é recomendado para Pessoas que possuam doenças inflamatórias da pele como eczema, psoríase, dermatites, ou com acne, inflamada ou com acne de graus II, III ou IV. Nesses casos é preciso esperar até que a pele esteja cicatrizada e que o dermatologista autorize o procedimento para evitar lesões."
          styled={{
            title: CSS.TreatmentTopicsTitle,
            description: CSS.TreatmentTopicsDescription
          }}
        />
      </Container>
      <Divider styled={CSS.TreatmentDivider} />
      <Container>
        <Heading
          primary={{
            as: 'h2',
            content: 'Regulamentos do procedimento'
          }}
        />
        <Topics
          styled={{
            list: CSS.TreatmentTopicsList
          }}
          list={[
            'Validade: 1 ano após data da compra.',
            'Áreas à escolher: Rosto.',
            'Perfil do cliente: Feminino e Masculino.',
            'AGENDAMENTO ONLINE no site',
            'Caso não consiga comparecer no dia agendado desmarcar com 24h de antecedência.',
            'Desmarcar através da AGENDA ONLINE no site ou pelo telefone (11) 3197-8132',
            'Duração do procedimento de 10 minutos.',
            'É necessário agendar uma avaliação antes de iniciar o tratamento.',
            'Avaliação e Procedimento poderá ou não serem realizados no mesmo dia, dependendo da disponibilidade de horários',
            'Sujeito a restrições Clínicas.',
            'Obrigatório a apresentação do RG',
            'Após o tratamento iniciado, não será possível a transferência das sessões para terceiros.',
            'Caso não consiga comparecer avisar com 24h de antecedência.',
            'Sujeito a disponibilidade de dias e horários.',
            'Promoção não cumulativa, não haverá troco nem crédito.',
            'Ao fazer o agendamento, fica o cliente ciente que será feita uma avaliação inicial por profissional qualificado do próprio estabelecimento, que analisará se o procedimento é indicado ou se existe alguma restrição.'
          ]}
        />
      </Container>
      <Divider styled={CSS.TreatmentLastDivider} />
      <Container>
        <Products
          columns={4}
          products={treatment}
          heading={{
            content: 'Tratamentos Relacionados',
            link: {
              path: '/tratamentos',
              content: 'Ver todos'
            }
          }}
        />
      </Container>
    </>
  );
}
