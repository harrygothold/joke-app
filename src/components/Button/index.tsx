import { ButtonHTMLAttributes } from 'react';
import './index.scss';

const ROOT_CLASSNAME = 'Button';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, type, onClick }: IButtonProps) => (
  <button className={ROOT_CLASSNAME} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
