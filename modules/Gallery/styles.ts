import styled from 'styled-components';
import NextImage from 'next/image';

export const Container = styled.div``;

export const ImageContainer = styled.div`
    vertical-align: bottom;
    line-height: 0;
`;

export const Image = styled(NextImage)`
    filter: grayscale(100%);
    transition: filter 0.5s ease;

    &:hover {
        filter: grayscale(0);
    }
`;
