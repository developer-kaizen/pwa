import NextImage from 'next/image';
import styled from 'styled-components';
import NextLink from 'next/link';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    padding: 80px 24px;
    text-align: center;

    ${up('lg')} {
        width: ${({ theme }) => theme.maxWidth}px;
        margin: 0 auto;
        padding: 120px 0;
    }
`;

export const Headline = styled.div`
    font-size: 24px;
    line-height: 32px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    margin-bottom: 40px;
    text-transform: uppercase;

    ${up('lg')} {
        font-size: 32px;
        line-height: 40px;
    }
`;

export const Cards = styled.div<{ colsSmall: number; colsMedium: number; colsLarge: number }>`
    display: grid;
    grid-template-rows: auto;
    grid-auto-rows: 1fr;
    gap: 20px;

    grid-template-columns: repeat(${({ colsSmall }) => colsSmall}, 1fr);

    ${up('md')} {
        grid-template-columns: repeat(${({ colsMedium }) => colsMedium}, 1fr);
    }

    ${up('lg')} {
        grid-template-columns: repeat(${({ colsLarge }) => colsLarge}, 1fr);
    }
`;

export const Card = styled.div`
    overflow: hidden;
`;

export const Content = styled.div<{ colsSmall: number; colsMedium: number; colsLarge: number }>`
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 20px;
    padding-bottom: 40px;
    text-align: left;

    ${({ colsSmall }) => colsSmall > 1 && 'height: 100%'};

    ${up('md')} {
        ${({ colsMedium }) => (colsMedium > 1 ? 'height: 100%' : 'height: auto')};
    }

    ${up('lg')} {
        ${({ colsLarge }) => (colsLarge > 1 ? 'height: 100%' : 'height: auto')};
        padding-bottom: 60px;
    }
`;

export const CardHeadline = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 20px;
`;

export const Button = styled.div`
    display: inline-flex;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;

    svg {
        transition: transform 0.5s ease;
    }

    &:hover svg {
        transform: translateX(10px);
    }
`;

export const ButtonValue = styled.div`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    margin-right: 24px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;

export const InternalLink = styled(NextLink)``;

export const Text = styled.div`
    p {
        font-size: 20px;
        line-height: 32px;
    }
`;

export const ImageContainer = styled.div`
    vertical-align: bottom;
    line-height: 0;
`;

export const Image = styled(NextImage)`
    filter: grayscale(100%);
`;
