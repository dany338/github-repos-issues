import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #ebebeb;
  }

  .issue__info {
    margin-left: 15px;
  }

  .issue__info > h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .issue__info > h4 {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;
