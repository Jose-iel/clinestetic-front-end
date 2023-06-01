import Link from 'next/link';
import { Box, Container } from 'styles/layout';
import { useTheme } from 'styled-components';
import { Theme } from 'styles/theme';
import * as S from './style';

const menus = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Tratamentos', path: '/tratamentos' },
  {
    id: 3,
    name: 'Cadastros',
    path: '#',
    submenu: [
      { id: 4, name: 'Agenda' },
      { id: 5, name: 'Combo' },
      { id: 6, name: 'Procedimentos' }
    ]
  }
];

export default function Header() {
  const theme: Theme = useTheme();
  const { colors } = theme;

  return (
    <S.Header>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box color={colors?.primary}>
            <Link id="brand" href="/">
              Clinestetic
            </Link>
          </Box>
          <S.NavbarLinks>
            <ul>
              {menus.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </S.NavbarLinks>
          <Box>Botão</Box>
        </Box>
      </Container>
    </S.Header>
  );
}
