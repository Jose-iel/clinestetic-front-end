import Link from 'next/link';
import * as S from './style';
import { Box, Container } from 'styles/layout';
import { useTheme } from 'styled-components';
import { Theme } from 'styles/theme';
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu
} from 'react-icons/ai';
import Dropdown from 'components/common/Dropdown';
import Input from 'components/form/Input';
import { menudata } from './data';

export default function Header() {
  const theme: Theme = useTheme();
  const { colors } = theme;

  return (
    <S.Header data-testid="header-component">
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box color={colors?.aplicationColors['primary']}>
            <Link id="brand" href="/">
              Clinestetic
            </Link>
          </Box>
          <S.HeaderDesktop>
            <Input
              options={{
                variant: 'primary',
                id: 'search',
                name: 'search',
                placeholder: 'Encontre o tratamento',
                isRadius: true,
                iconRight: (
                  <AiOutlineSearch size={18} color={colors?.dark[400]} />
                )
              }}
            />
            <S.NavbarLinks>
              <ul>
                {menudata.map((item) => (
                  <li key={item.id}>
                    {item.submenu ? (
                      <Dropdown
                        action={
                          <Link href={item.path}>
                            {item.name} {item?.icon}
                          </Link>
                        }
                        hasChild={true}
                      >
                        <S.Content>
                          <Box display="flex" flexDirection="column">
                            {item?.submenu?.map((submenuItem) => (
                              <S.Item key={submenuItem.id}>
                                <Link href="#">
                                  {submenuItem?.icon}
                                  {submenuItem.name}
                                </Link>
                              </S.Item>
                            ))}
                          </Box>
                        </S.Content>
                      </Dropdown>
                    ) : (
                      <Link href={item.path}>{item.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </S.NavbarLinks>
            <Box display="flex" alignItems="center" gridGap={12}>
              <S.HeaderButton rounded>Login</S.HeaderButton>
              <S.HeaderButton className="icon-button" rounded>
                <AiOutlineShoppingCart size={30} />
              </S.HeaderButton>
            </Box>
          </S.HeaderDesktop>
          <S.HeaderMobile>
            <S.HeaderButton className="icon-button mobile" rounded>
              <AiOutlineMenu size={24} />
            </S.HeaderButton>
          </S.HeaderMobile>
        </Box>
      </Container>
    </S.Header>
  );
}
