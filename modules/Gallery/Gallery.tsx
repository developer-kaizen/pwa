import { ST } from 'next/dist/shared/lib/utils';
import * as Styled from './styles';

const Gallery = (props: any) => {
    const images = props?.moduleGallery?.imagesCollection?.items;

    if (!images) {
        return null;
    }

    if (images?.length < 1) {
        return null;
    }

    return (
        <Styled.Container>
            {images.map((image: any) => {
                const imageWidth = 900;
                const imageHeight = 750;
                const imageUrl = `${image?.url}?w=${imageWidth}&h=${imageHeight}&fit=fill`;
                return (
                    <Styled.ImageContainer key={image?.sys?.id}>
                        <Styled.Image src={imageUrl} width={imageWidth} height={imageHeight} />
                    </Styled.ImageContainer>
                );
            })}
        </Styled.Container>
    );
};

export default Gallery;
