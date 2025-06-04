import type {FC} from 'react';
import {Container, NavItem, NavList, UpdateIconWrapper} from "@/shared/ui/Header/Header.styles.ts";
import UpdateIcon from "@/shared/assets/icons/update.svg?react";
import LogoutIcon from "@/shared/assets/icons/logout.svg?react";
import {useDispatch} from "react-redux";
import {logout} from "@/store/slices/auth.slice.ts";
import {useRatesFetching} from "@/pages/Rates/hooks/useRatesFetching.ts";

interface HeaderProps {
  title: string;
  isMobile: boolean;
}

export const Header: FC<HeaderProps> = (props) => {
  const {
    title,
    isMobile
  } = props;

  const dispatch = useDispatch()
  const {
    isLoading,
    refetch
  } = useRatesFetching();

  const isConverterPage = title === 'Currency Converter';

  return (
    <>
      {isMobile ?
        <Container>

          {!isConverterPage &&
						<UpdateIconWrapper
							onClick={() => refetch()}
							$disabled={isLoading}
						>
							<UpdateIcon/>
						</UpdateIconWrapper>
          }


          <h1>
            {title}
          </h1>
          <LogoutIcon onClick={() => dispatch(logout())}/>
        </Container>
        :
        <Container>
          <NavList>
            <NavItem
              to="/rates"
              className={({isActive}) => isActive ? "active" : ""}
            >
              Rates
            </NavItem>
            <NavItem
              to="/convert"
              className={({isActive}) => isActive ? 'active' : ''}
            >
              Convert
            </NavItem>
          </NavList>
          <LogoutIcon onClick={() => dispatch(logout())}/>
        </Container>
      }
    </>
  );
};
