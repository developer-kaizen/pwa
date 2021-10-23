import styled from 'styled-components';
import NextImage from 'next/image';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.darkBlue};
    padding-top: 80px;
    padding-left: 24px;
    padding-right: 24px;

    ${up('xl')} {
        padding-top: 120px;
    }
`;

export const Content = styled.div`
    ${up('xl')} {
        flex: 1;
        padding-right: 31px;
    }
`;

export const Inner = styled.div`
    ${up('xl')} {
        width: ${({ theme }) => theme.maxWidth}px;
        margin: 0 auto;
        display: flex;
    }
`;

export const Headline = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 900;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 20px;
    text-transform: uppercase;

    ${up('xl')} {
        font-size: 48px;
        line-height: 67px;
    }
`;

export const Subheadline = styled.div`
    line-height: 23px;
    margin-bottom: 32px;
    font-weight: 700;
    font-style: italic;
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 60px;

    ${up('xl')} {
        font-size: 24px;
        line-height: 34px;
    }
`;

export const ImageContainer = styled.div`
    text-align: center;
    transform: translateY(40px);

    ${up('xl')} {
        flex: 1;
        padding-left: 31px;
    }
`;

export const Image = styled(NextImage)`
    filter: grayscale(100%);
`;
