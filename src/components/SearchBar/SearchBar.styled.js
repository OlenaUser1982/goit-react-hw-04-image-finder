import styled from 'styled-components';
export const Headers = styled.header`
  max-width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 15px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    color: #999;
  }
`;
