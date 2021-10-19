import * as Styled from './styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Props = {
    moduleText: {
        title: string;
        text: any;
    };
};

const Text = ({ moduleText }: any) => {
    if (!moduleText?.text?.json) {
        return null;
    }

    return (
        <Styled.Container>
            <Styled.Headline>{moduleText?.title}</Styled.Headline>
            <Styled.Text>{documentToReactComponents(moduleText?.text?.json)}</Styled.Text>
        </Styled.Container>
    );
};

export default Text;
