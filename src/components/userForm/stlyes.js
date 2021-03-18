import styled from "styled-components";

export const Form = styled.form`
  padding: 1.6rem 0;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  margin-bottom: 0.8rem;
  padding: 0.8rem 0.4rem;
  display: block;
  width: 80%;
  margin: 0 auto;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Button = styled.button`
  background: rgb(250, 145, 10);
  border-radius: 0.3rem;
  color: #fff;
  height: 3.2rem;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;
export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 50rem;
  padding: 8px 0;
`;

export const Error = styled.span`
  font-size: 1.4rem;
  color: red;
`;
