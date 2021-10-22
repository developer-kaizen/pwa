import * as Styled from './styles';
import Header from '../Header';

const Layout = ({ children, mainNavigation, footerNavigation }: any) => {
    return (
        <Styled.Container>
            <Header mainNavigation={mainNavigation} />
            {children}
        </Styled.Container>
    );
};

export default Layout;
