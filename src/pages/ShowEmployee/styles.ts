import styled from "styled-components";

const Container = styled.div`
  h2 {
    text-align: center;
    margin: 20px;
  }

  p {
    &:nth-child(3) {
      margin-top: 20px;
    }
  }

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    thead {
      background-color: #f9fafb;
      th {
        border: 1px solid #e7eaea;
        padding: 8px;
      }
    }
    tr {
      padding: 16px 0;
    }
    td {
      border: 1px solid #e7eaea;
      padding: 8px 8px;
    }
  }
`;

export { Container };
