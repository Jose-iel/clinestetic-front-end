import Link from 'next/link';
import * as S from './style';
import { Box, Container } from 'styles/layout';
import { useTheme } from 'styled-components';
import { Theme } from 'styles/theme';
import { BsChevronDown } from 'react-icons/bs';
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu
} from 'react-icons/ai';
import { renderIcon } from './utilities';
import Dropdown from 'components/common/Dropdown';
import Input from 'components/form/Input';
import { ICmsData } from 'pages/interfaces';

export default function Header({ cms }: ICmsData) {
  const theme: Theme = useTheme();

  if (!cms) return null;

  const { colors } = theme;
  const { header } = cms;

  return (
    <S.Header data-testid="header">
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box color={colors?.main['primary']}>
            <Link id="brand" href="/">
              Clinestetic
            </Link>
          </Box>
          <S.HeaderDesktop>
            <Input
              options={{
                id: 'search',
                name: 'search',
                placeholder: 'Encontre o tratamento',
                iconRight: (
                  <AiOutlineSearch size={18} color={colors?.dark[400]} />
                )
              }}
            />
            <S.NavbarLinks>
              <ul>
                {header?.map((item) => {
                  return item.submenu ? (
                    <Dropdown
                      key={item.id}
                      action={
                        <Link href={item.path}>
                          {item.name}
                          <BsChevronDown size={18} />
                        </Link>
                      }
                      hasChild={true}
                    >
                      <S.Content>
                        <Box display="flex" flexDirection="column">
                          {item?.submenu?.map((submenuItem) => (
                            <S.Item key={submenuItem.id}>
                              <Link href="#">
                                {renderIcon(submenuItem.icon)}
                                {submenuItem.name}
                              </Link>
                            </S.Item>
                          ))}
                        </Box>
                      </S.Content>
                    </Dropdown>
                  ) : (
                    <Link key={item.id} href={item.path}>
                      {item.name}
                    </Link>
                  );
                })}
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
