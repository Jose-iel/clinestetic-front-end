import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu
} from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';

import Dropdown from 'components/common/Dropdown';
import Button from 'components/form/Button';
import FormField from 'components/form/FormField';
import Link from 'next/link';
import { useTheme } from 'styled-components';
import * as CSS from 'styles/components/header';
import { Theme } from 'styles/interfaces';
import { Box, Container } from 'styles/layout';
import { useNavigateTo } from 'utilities/navigate';

import { header } from './data';
import * as S from './style';
import { renderIcon } from './utilities';
export default function Header() {
  const theme: Theme = useTheme();
  const navigateToLogin = useNavigateTo('/login');

  const { colors } = theme;

  // TODO: Desenvolver login através do backend (variável temporária)
  const user = false;

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
            <FormField
              id="search"
              name="search"
              type="text"
              placeholder="Encontre o tratamento"
              icon={<AiOutlineSearch size={18} color={colors?.dark[400]} />}
              iconPosition="right"
              styledInput={CSS.HeaderInput}
              pill
            />
            <S.NavbarLinks>
              <ul>
                {header?.map((item) => {
                  return item.submenu ? (
                    <Dropdown
                      key={item.id}
                      options={{
                        action: user && (
                          <Link href={item.path}>
                            {item.name}
                            <BsChevronDown size={18} />
                          </Link>
                        ),
                        trigger: {
                          hasChild: true
                        }
                      }}
                    >
                      <S.Content>
                        <Box display="flex" flexDirection="column">
                          {item.submenu.map((submenuItem) => (
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
                onClick={() => navigateToLogin()}
                styled={CSS.HeaderButtonLogin}
              >
                Login
              </Button>
              <Button
                variant="secondary"
                styled={CSS.HeaderButtonCart}
                icon={true}
              >
                <AiOutlineShoppingCart size={26} />
              </Button>
            </Box>
          </S.HeaderDesktop>
          <S.HeaderMobile>
            <Button styled={CSS.HeaderButtonMobile} icon={true}>
              <AiOutlineMenu size={24} />
            </Button>
          </S.HeaderMobile>
        </Box>
      </Container>
    </S.Header>
  );
}
