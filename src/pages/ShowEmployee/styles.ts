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
    th {
      padding: 8px 0;
      border: 1px solid #e7eaea;
    }
    tr {
      padding: 16px 0;
    }
    tr:nth-child(1) {
      background-color: #f9fafb;
    }
    td {
      border: 1px solid #e7eaea;
      padding: 8px 8px;
    }
  }
`;

export { Container };
