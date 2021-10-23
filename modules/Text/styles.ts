import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    text-align: center;
    padding: 80px 24px;

    ${up('xl')} {
        padding: 120px 0;a
    }
`;

export const Headline = styled.div`
    font-size: 28px;
    line-height: 39px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    margin-bottom: 40px;
    text-transform: uppercase;
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;

    ${up('xl')} {
        font-size: 36px;
        line-height: 50px;
    }
`;

export const Text = styled.div`
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;

    p {
        margin-bottom: 40px;

        ${up('xl')} {
            font-size: 20px;
            line-height: 32px;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
