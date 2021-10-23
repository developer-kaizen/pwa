import styled from 'styled-components';
import NextImage from 'next/image';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    ${up('md')} {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const ImageContainer = styled.div`
    vertical-align: bottom;
    line-height: 0;

    ${up('md')} {
        width: 50%;
    }
`;

export const Image = styled(NextImage)`
    filter: grayscale(100%);
    transition: filter 0.5s ease;

    &:hover {
        filter: grayscale(0);
    }
`;
