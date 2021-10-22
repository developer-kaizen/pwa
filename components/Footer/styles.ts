import link from 'next/link';
import styled from 'styled-components';

export const Container = styled.footer``;

export const TopContainer = styled.div`
    padding: 80px 24px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
`;

export const Headline = styled.div`
    font-weight: 900;
    font-family: ${({ theme }) => theme.fonts.headlines};
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 20px;
    text-transform: uppercase;
`;

export const Text = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 40px;
`;

export const Head = styled.div``;

export const LocationData = styled.div``;

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
`;

export const BottomContainer = styled.div`
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
`;

export const CopyrightContainer = styled.div`
    order: 2;
    width: 100%;
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
`;

export const NavigationItem = styled(link)``;

export const NavigationValue = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const Logo = styled.img`
    display: none;
`;
