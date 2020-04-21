import styled, {css} from 'styled-components';

const Preview = css`
    display: flex;
`;

export const CollectionPreviewContainer= styled.div`
   
    flex-direction: column;
    margin-bottom: 30px;
    ${Preview};
`;

export const TitleContainer = styled.h1`
   
    font-size: 28px;
    margin-bottom: 25px;
`;

export const PreviewContainer = styled.div`
    justify-content: space-between;
    ${Preview}
`;