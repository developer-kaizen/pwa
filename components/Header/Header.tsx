import * as Styled from './styles';
import { useState } from 'react';

const Header = ({ mainNavigation }: any) => {
    console.log(mainNavigation);

    const [open, setOpen] = useState(false);

    const handleButtonClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <Styled.Container>
                <Styled.Inner>
                    <Styled.MobileNavigation open={open}>
                        {mainNavigation?.map((item: any) => {
                            return (
                                <Styled.NavLink key={item.slug} href={item.slug}>
                                    <Styled.NavValue>{item.title}</Styled.NavValue>
                                </Styled.NavLink>
                            );
                        })}
                    </Styled.MobileNavigation>

                    <Styled.LogoLink href='/'>
                        <Styled.Logo open={open}>Kaizen</Styled.Logo>
                    </Styled.LogoLink>

                    <Styled.Burger onClick={handleButtonClick} open={open}>
                        <Styled.BurgerInner>
                            <Styled.Line />
                            <Styled.Line />
                            <Styled.Line />
                        </Styled.BurgerInner>
                    </Styled.Burger>
                </Styled.Inner>
            </Styled.Container>
        </>
    );
};

export default Header;