import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    padding: 80px 24px;
`;

export const Headline = styled.div`
    font-size: 28px;
    line-height: 39px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    margin-bottom: 40px;
    text-transform: uppercase;
`;

export const Text = styled.div`
    p {
        margin-bottom: 40px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
