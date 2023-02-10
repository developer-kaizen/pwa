import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    padding: 80px 24px;
    text-align: center;

    ${up('xl')} {
        width: ${({ theme }) => theme.maxWidth}px;
        margin: 0 auto;
        padding: 120px 0;
    }
`;

export const Inside = styled.div``;

export const Head = styled.div`
    margin-bottom: 65px;
`;

export const Headline = styled.h3`
    font-size: 28px;
    line-height: 40px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    text-transform: uppercase;

    ${up('xl')} {
        font-size: 32px;
        line-height: 40px;
    }
`;

export const Subheadline = styled.h4`
    font-size: 28px;
    line-height: 40px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    text-transform: uppercase;

    ${up('xl')} {
        font-size: 32px;
        line-height: 40px;
    }
`;

export const Accordion = styled.div`
    text-align: left;
`;

export const Item = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const Content = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    padding-top: 40px;
    padding-right: 65px;
    max-width: 800px;
`;

export const HeaderContainer = styled.div`
    padding-right: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${up('xl')} {
        padding-right: 65px;
    }
`;

export const Header = styled.div`
    font-size: 24px;
    line-height: 34px;
    font-weight: 700;
`;

export const Icon = styled.div<{ isOpen: boolean }>`
    ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;
