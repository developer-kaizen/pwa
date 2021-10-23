import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    padding: 80px 24px;
    text-align: center;

    ${up('xl')} {
        max-width: 980px;
        padding: 120px 0;
        margin: 0 auto;
    }
`;

export const Headline = styled.h1`
    font-size: 24px;
    line-height: 32px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    text-transform: uppercase;

    ${up('xl')} {
        font-size: 36px;
        line-height: 50px;
    }
`;
