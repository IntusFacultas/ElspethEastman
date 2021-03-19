import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
  ${(props) => css`
    background-color: ${props.theme.flavors.footerBlue};
    padding: ${props.theme.spacing.md};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
  `}
`;
export const FooterTitle = styled.h2`
  ${(props) => css`
    color: ${props.theme.navbar};
    ${props.theme.text.baseTitleStyling};
  `}
  `;
export const FooterSubTitle = styled.h3`
  ${(props) => css`
    ${props.theme.text.smallTitleFontSize};
    color: ${props.theme.navbar};
    ${props.theme.text.baseTitleStyling};
    margin: 0;
  `}
`;
export const FooterContent = styled.p`
  ${(props) => css`
    ${props.theme.text.normalFontSize};
    color: ${props.theme.navbar};
    ${props.theme.text.baseContentFont};
    margin: ${props.theme.spacing.xs} 0;
  `}
`;

export default StyledFooter;
