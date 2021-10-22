import NextImage from 'next/image';
import styled from 'styled-components';
import NextLink from 'next/link';
import theme from 'theme';

export const Container = styled.div`
    padding: 80px 24px;
    text-align: center;
`;

export const Headline = styled.div`
    font-size: 24px;
    line-height: 32px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    margin-bottom: 40px;
`;

export const Cards = styled.div``;

export const Card = styled.div`
    margin-bottom: 40px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Content = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 20px;
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

export const Image = styled(NextImage)``;
