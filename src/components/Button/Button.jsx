import { ButtonS } from './Button.styled';
const Button = ({ onClick, isDisabled }) => {
  return (
    <ButtonS type="button" onClick={onClick} disabled={isDisabled}>
      Load more
    </ButtonS>
  );
};
export default Button;
