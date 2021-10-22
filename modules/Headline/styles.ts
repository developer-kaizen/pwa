import styled from 'styled-components';

export const Container = styled.div`
    padding: 80px 24px;
    text-align: center;
`;

export const Headline = styled.h1`
    font-size: 24px;
    line-height: 32px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    text-transform: uppercase;
`;
