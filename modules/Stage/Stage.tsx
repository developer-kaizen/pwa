import { Parallax } from 'react-scroll-parallax';
import * as Styled from './styles';

const Stage = (props: any) => {
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
                        <Styled.Image
                            src={props?.moduleStage?.image?.url}
                            width={props?.moduleStage?.image?.width}
                            height={props?.moduleStage?.image?.height}
                        />
                    </Parallax>
                </Styled.ImageContainer>
            </Styled.Inner>
        </Styled.Container>
    );
};

export default Stage;
