import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as Styled from './styles';
import { useState } from 'react';

const Accordion = ({ moduleAccordion }: any) => {
    const items = moduleAccordion?.itemsCollection?.items;
    const [open, setOpen] = useState<null | number>(null);

    const handleClick = (index: number) => {
        if (index === open) {
            setOpen(null);
            return;
        }

        setOpen(index);
    };

    if (items.length < 1) {
        return null;
    }

    const headline = moduleAccordion.headline;
    const subHeadline = moduleAccordion.subheadline;

    return (
        <Styled.Container>
            <Styled.Inside>
                {(headline || subHeadline) && (
                    <Styled.Head>
                        {headline && <Styled.Headline>{headline}</Styled.Headline>}
                        {subHeadline && <Styled.Subheadline>{subHeadline}</Styled.Subheadline>}
                    </Styled.Head>
                )}

                <Styled.Accordion>
                    {items.map((item: any, index: number) => {
                        const isOpen = open === index;

                        return (
                            <Styled.Item key={item.sys.id}>
                                <Styled.HeaderContainer
                                    onClick={() => {
                                        handleClick(index);
                                    }}
                                >
                                    <Styled.Header>{item.headline}</Styled.Header>
                                    <Styled.Icon isOpen={isOpen}>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='10' height='19' fill='none' viewBox='0 0 10 19'>
                                            <path
                                                fill='#000'
                                                fillRule='evenodd'
                                                d='M5.646.002a.5.5 0 01.5.5l-.147 15.794 3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L5 16.296 5.146.502a.5.5 0 01.5-.5z'
                                                clipRule='evenodd'
                                            ></path>
                                        </svg>
                                    </Styled.Icon>
                                </Styled.HeaderContainer>
                                <Styled.Content isOpen={isOpen}>{documentToReactComponents(item.text.json)}</Styled.Content>
                            </Styled.Item>
                        );
                    })}
                </Styled.Accordion>
            </Styled.Inside>
        </Styled.Container>
    );
};

export default Accordion;
