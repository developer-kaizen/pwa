import { Parallax } from 'react-scroll-parallax';
import * as Styled from './styles';

const Stage = (props: any) => {
    const imageWidth = props?.moduleStage?.image?.width / 4;
    const imageHeight = props?.moduleStage?.image?.height / 4;
    const imageUrl = `${props?.moduleStage?.image?.url}?w=${imageWidth}&h=${imageHeight}`;

    console.log;

    return (
        <Styled.Container>
            <Styled.Inner>
                <Styled.Content>
                    <Parallax y={[-6, 6]}>
                        <Styled.Headline>{props?.moduleStage?.title}</Styled.Headline>
                        <Styled.Subheadline>{props?.moduleStage?.subtitle}</Styled.Subheadline>
                    </Parallax>
                </Styled.Content>

                <Styled.ImageContainer>
                    <Parallax y={[-4, 4]}>
                        <Styled.Image src={imageUrl} width={imageWidth} height={imageHeight} />
                    </Parallax>
                </Styled.ImageContainer>
            </Styled.Inner>
        </Styled.Container>
    );
};

export default Stage;
