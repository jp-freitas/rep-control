import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
};

export function Button({ isActive, ...rest }: ButtonProps) {
  return (
    <Container isActive={isActive} {...rest} />
  );
}