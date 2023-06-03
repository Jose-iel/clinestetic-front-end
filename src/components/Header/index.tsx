import { useContext } from 'react';
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
import FieldCustom from 'components/form/FieldCustom';
import Button from 'components/form/Button';
import DataContext from 'contexts/data.context';
import { IResponseCms } from 'pages/interfaces';

export default function Header() {
  const cms = useContext<IResponseCms>(DataContext);
  const theme: Theme = useTheme();

  if (!cms) return null;

  const { colors } = theme;
  const { header } = cms;

  return (
    <S.Header data-testid="header">
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box color={colors?.main.primary['default']}>
            <Link id="brand" href="/">
              Clinestetic
            </Link>
          </Box>
          <S.HeaderDesktop>
            <FieldCustom
              options={{
                id: 'search',
                name: 'search',
                placeholder: 'Encontre o tratamento',
                iconElement: (
                  <AiOutlineSearch size={18} color={colors?.dark[400]} />
                ),
                rounded: true
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
              <Button
                options={{
                  width: '8rem',
                  variant: 'primary'
                }}
                hasIcon={false}
              >
                Login
              </Button>
              <Button
                options={{
                  variant: 'secondary',
                  width: '3.2rem',
                  height: '3.2rem'
                }}
                hasIcon={true}
              >
                <AiOutlineShoppingCart size={30} />
              </Button>
            </Box>
          </S.HeaderDesktop>
          <S.HeaderMobile>
            <Button
              options={{
                variant: 'primary',
                width: '3rem',
                height: '3rem'
              }}
              hasIcon={true}
            >
              <AiOutlineMenu size={24} />
            </Button>
          </S.HeaderMobile>
        </Box>
      </Container>
    </S.Header>
  );
}
