import * as Styled from './styles';
import { renderComponents } from '@ncb/lib/renderer';
import Modules from '@ncb/modules/mapping';

const Article = ({ modulesCollection, greyBackground }: any) => {
    return <Styled.Container greyBackground={greyBackground}>{renderComponents(modulesCollection.items, Modules)}</Styled.Container>;
};

export default Article;
