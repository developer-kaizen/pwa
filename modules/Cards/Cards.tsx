import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as Styled from './styles';

const Cards = ({ moduleCards }: any) => {
    if (moduleCards?.cardsCollection?.items?.length < 1) {
        return null;
    }

    return (
        <Styled.Container>
            {moduleCards?.title && <Styled.Headline>{moduleCards.title}</Styled.Headline>}

            <Styled.Cards>
                {moduleCards.cardsCollection.items.map((item: any) => {
                    return (
                        <Styled.Card key={item?.sys?.id}>
                            <Styled.Image src={item.image.url} width={item.image.width} height={item.image.height} />
                            <Styled.Content>
                                {item?.title && <Styled.CardHeadline>{item.title}</Styled.CardHeadline>}

                                {item?.subtitle && <Styled.CardSubheadline>{item.subtitle}</Styled.CardSubheadline>}

                                {item?.text?.json && <Styled.Text>{documentToReactComponents(item?.text?.json)}</Styled.Text>}

                                {item?.externalLink && (
                                    <Styled.Link>
                                        <Styled.Button>Jetzt entdecken</Styled.Button>
                                    </Styled.Link>
                                )}

                                {item?.internalLink?.slug && (
                                    <Styled.InternalLink href={item.internalLink.slug}>
                                        <Styled.Button>Jetzt entdecken</Styled.Button>
                                    </Styled.InternalLink>
                                )}
                            </Styled.Content>
                        </Styled.Card>
                    );
                })}
            </Styled.Cards>
        </Styled.Container>
    );
};

export default Cards;
