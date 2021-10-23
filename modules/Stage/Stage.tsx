import { Parallax } from 'react-scroll-parallax';
import * as Styled from './styles';

const Stage = (props: any) => {
    return (
        <Styled.Container>
            <Styled.Inner>
                <Styled.Content>
                    <Parallax y={[-20, 20]}>
                        <Styled.Headline>{props?.moduleStage?.title}</Styled.Headline>
                        <Styled.Subheadline>{props?.moduleStage?.subtitle}</Styled.Subheadline>
                    </Parallax>
                </Styled.Content>

                <Styled.ImageContainer>
                    <Parallax y={[-10, 10]}>
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
