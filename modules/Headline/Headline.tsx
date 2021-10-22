import * as Styled from './styles';

const Headline = (props: any) => {
    return (
        <Styled.Container>
            <Styled.Headline>{props.moduleHeadline.title}</Styled.Headline>
        </Styled.Container>
    );
};

export default Headline;
