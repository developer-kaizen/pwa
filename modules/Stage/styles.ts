import styled from 'styled-components';
import NextImage from 'next/image';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.darkBlue};
    padding-top: 80px;
    padding-left: 24px;
    padding-right: 24px;
`;

export const Content = styled.div``;

export const Inner = styled.div``;

export const Headline = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 900;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 20px;
    text-transform: uppercase;
`;

export const Subheadline = styled.div`
    line-height: 23px;
    margin-bottom: 32px;
    font-weight: 700;
    font-style: italic;
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 60px;
`;

export const ImageContainer = styled.div`
    text-align: center;
    transform: translateY(40px);
`;

export const Image = styled(NextImage)``;
