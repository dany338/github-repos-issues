import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #ebebeb;
  }

  .content__info {
    margin-left: 15px;
  }

  .content__info > h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;
