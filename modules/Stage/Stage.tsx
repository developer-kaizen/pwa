import * as Styled from './styles';

const Stage = (props: any) => {
    console.log('sdfasdf', props);
    return (
        <Styled.Container>
            <Styled.Inner>
                <Styled.Content>
                    <Styled.Headline>{props?.moduleStage?.title}</Styled.Headline>
                    <Styled.Subheadline>{props?.moduleStage?.subtitle}</Styled.Subheadline>
                </Styled.Content>

                <Styled.Image
                    src={props?.moduleStage?.image?.url}
                    width={props?.moduleStage?.image?.width}
                    height={props?.moduleStage?.image?.height}
                />
            </Styled.Inner>
        </Styled.Container>
    );
};

export default Stage;
