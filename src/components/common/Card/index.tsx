import Button from 'components/form/Button';
import FieldCustom from 'components/form/FieldCustom';

import * as S from './style';

// TODO: Última Tarefa, transformar Banner em responsivo e reutilizável
export default function Card() {
  return (
    <S.Card>
      {/* TODO: Implementar Formik */}
      <form>
        {/* TODO: Criar layout de select e implementar margin custom para o FieldCustom */}
        <FieldCustom
          options={{
            id: 'city',
            name: 'city',
            placeholder: 'Procedimento',
            rounded: false,
            label: {
              text: 'Cidade'
            }
          }}
        />
        <FieldCustom
          options={{
            id: 'city',
            name: 'city',
            placeholder: 'São Paulo',
            rounded: false,
            label: {
              text: 'Cidade'
            }
          }}
        />
        <FieldCustom
          options={{
            id: 'neighborhood',
            name: 'neighborhood',
            placeholder: 'Moca',
            rounded: false,

            label: {
              text: 'Cidade'
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
    </S.Card>
  );
}
