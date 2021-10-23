import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    padding: 80px 24px;
    text-align: center;

    ${up('lg')} {
        padding: 120px 0;
        width: ${({ theme }) => theme.maxWidth}px;
        margin: 0 auto;
    }
`;

export const Headline = styled.div`
    font-size: 22px;
    line-height: 30px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-weight: 900;
    margin-bottom: 40px;
    text-transform: uppercase;

    ${up('lg')} {
        margin-bottom: 60px;
    }
`;

export const Table = styled.div`
    text-align: left;
    display: flex;
`;

export const Row = styled.div`
    margin-bottom: 80px;
    flex: 1;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Cell = styled.div`
    margin-bottom: 40px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Day = styled.div`
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
`;

export const Time = styled.div`
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
    line-height: 28px;
`;

export const Session = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 5px;
    font-size: 20px;
    line-height: 28px;
`;

export const Trainer = styled.div`
    font-size: 20px;
    line-height: 28px;
`;
