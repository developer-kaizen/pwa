import link from 'next/link';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.footer``;

export const TopContainer = styled.div`
    padding: 80px 24px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};

    ${up('lg')} {
        padding: 120px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const Headline = styled.div`
    font-weight: 900;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 20px;
    text-transform: uppercase;

    ${up('lg')} {
        text-align: center;
        font-size: 32px;
        line-height: 44px;
        width: 980xpx;
        margin: 0 auto;
        margin-bottom: 40px;
    }
`;

export const Text = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 40px;

    ${up('lg')} {
        width: 980px;
        margin: 0 auto;
    }
`;

export const Head = styled.div`
    ${up('lg')} {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }
`;

export const LocationData = styled.div`
    ${up('lg')} {
        text-align: left;
        padding-left: 10px;
    }
`;

export const Label = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const Value = styled.div`
    font-size: 20px;
    line-height: 32px;
`;

export const BoldValue = styled.div`
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
`;

export const ContactData = styled.div`
    margin-bottom: 40px;

    ${up('lg')} {
        text-align: right;
        margin-bottom: 0;
        padding-right: 10px;
    }
`;

export const BottomContainer = styled.div`
    padding: 40px 24px;
    display: flex;
    flex-direction: column;

    ${up('lg')} {
        flex-direction: inherit;
        width: ${({ theme }) => theme.maxWidth}px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: flex-end;
    }
`;

export const CopyrightContainer = styled.div`
    order: 2;
    width: 100%;

    ${up('lg')} {
        order: 1;
        width: auto;
    }
`;

export const Copyright = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const Navigation = styled.div`
    order: 1;
    width: 100%;
    margin-bottom: 40px;

    ${up('lg')} {
        order: 2;
        width: auto;
        margin-bottom: 0;
        display: flex;
    }
`;

export const NavigationItem = styled(link)``;

export const NavigationValue = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-left: 40px;

    &:last-child {
        margin-left: 0;
    }
`;

export const Logo = styled.img`
    display: none;

    ${up('lg')} {
        display: block;
        margin-bottom: 40px;
    }
`;
