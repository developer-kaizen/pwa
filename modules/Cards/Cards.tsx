import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as Styled from './styles';

const Cards = ({ moduleCards }: any) => {
    if (moduleCards?.cardsCollection?.items?.length < 1) {
        return null;
    }

    return (
        <Styled.Container>
            {moduleCards?.title && <Styled.Headline>{moduleCards.title}</Styled.Headline>}

            <Styled.Cards
                colsSmall={moduleCards?.colsSmall || 1}
                colsMedium={moduleCards?.colsMedium || 2}
                colsLarge={moduleCards?.colsLarge || 3}
            >
                {moduleCards.cardsCollection.items.map((item: any) => {
                    const imageWidth = item.image.width / 2;
                    const imageHeight = item.image.height / 2;
                    const imageUrl = `${item.image.url}?w=${imageWidth}&h=${imageHeight}`;

                    return (
                        <Styled.Card key={item?.sys?.id}>
                            <Styled.ImageContainer>
                                <Styled.Image src={imageUrl} width={imageWidth} height={imageHeight} />
                            </Styled.ImageContainer>

                            <Styled.Content
                                colsSmall={moduleCards?.colsSmall || 1}
                                colsMedium={moduleCards?.colsMedium || 2}
                                colsLarge={moduleCards?.colsLarge || 3}
                            >
                                {item?.title && <Styled.CardHeadline>{item.title}</Styled.CardHeadline>}

                                {item?.text?.json && <Styled.Text>{documentToReactComponents(item?.text?.json)}</Styled.Text>}

                                {item?.externalLink && item?.buttonText && (
                                    <Styled.Link href={item.externalLink} target='_blank'>
                                        <Styled.Button>
                                            <Styled.ButtonValue>{item?.buttonText}</Styled.ButtonValue>
                                            <svg width='37' height='9' viewBox='0 0 37 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    fillRule='evenodd'
                                                    clipRule='evenodd'
                                                    d='M-7.43846e-06 4.3677C-7.44426e-06 4.23509 0.0526709 4.10791 0.146439 4.01414C0.240207 3.92037 0.367384 3.8677 0.499993 3.8677L35.293 4.00034L32.146 0.854344C32.0521 0.760458 31.9994 0.633119 31.9994 0.500344C31.9994 0.367569 32.0521 0.24023 32.146 0.146344C32.2399 0.0524574 32.3672 -0.000287517 32.5 -0.000287523C32.6328 -0.000287529 32.7601 0.0524573 32.854 0.146344L36.854 4.14634C36.9006 4.19279 36.9375 4.24797 36.9627 4.30871C36.9879 4.36946 37.0009 4.43458 37.0009 4.50034C37.0009 4.56611 36.9879 4.63123 36.9627 4.69198C36.9375 4.75272 36.9006 4.8079 36.854 4.85434L32.854 8.85434C32.7601 8.94823 32.6328 9.00098 32.5 9.00098C32.3672 9.00098 32.2399 8.94823 32.146 8.85434C32.0521 8.76046 31.9994 8.63312 31.9994 8.50034C31.9994 8.36757 32.0521 8.24023 32.146 8.14634L35.293 5.00034L0.499993 4.8677C0.367384 4.8677 0.240207 4.81502 0.146439 4.72125C0.052671 4.62748 -7.43267e-06 4.50031 -7.43846e-06 4.3677Z'
                                                    fill='black'
                                                />
                                            </svg>
                                        </Styled.Button>
                                    </Styled.Link>
                                )}

                                {item?.internalLink?.slug && item?.buttonText && (
                                    <Styled.InternalLink href={item.internalLink.slug}>
                                        <Styled.Button>
                                            <Styled.ButtonValue>{item?.buttonText}</Styled.ButtonValue>
                                            <svg width='37' height='9' viewBox='0 0 37 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    fillRule='evenodd'
                                                    clipRule='evenodd'
                                                    d='M-7.43846e-06 4.3677C-7.44426e-06 4.23509 0.0526709 4.10791 0.146439 4.01414C0.240207 3.92037 0.367384 3.8677 0.499993 3.8677L35.293 4.00034L32.146 0.854344C32.0521 0.760458 31.9994 0.633119 31.9994 0.500344C31.9994 0.367569 32.0521 0.24023 32.146 0.146344C32.2399 0.0524574 32.3672 -0.000287517 32.5 -0.000287523C32.6328 -0.000287529 32.7601 0.0524573 32.854 0.146344L36.854 4.14634C36.9006 4.19279 36.9375 4.24797 36.9627 4.30871C36.9879 4.36946 37.0009 4.43458 37.0009 4.50034C37.0009 4.56611 36.9879 4.63123 36.9627 4.69198C36.9375 4.75272 36.9006 4.8079 36.854 4.85434L32.854 8.85434C32.7601 8.94823 32.6328 9.00098 32.5 9.00098C32.3672 9.00098 32.2399 8.94823 32.146 8.85434C32.0521 8.76046 31.9994 8.63312 31.9994 8.50034C31.9994 8.36757 32.0521 8.24023 32.146 8.14634L35.293 5.00034L0.499993 4.8677C0.367384 4.8677 0.240207 4.81502 0.146439 4.72125C0.052671 4.62748 -7.43267e-06 4.50031 -7.43846e-06 4.3677Z'
                                                    fill='black'
                                                />
                                            </svg>
                                        </Styled.Button>
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
