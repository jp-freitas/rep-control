import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
};

export function Button({ isActive = false, ...rest }: ButtonProps) {
  return (
    <Container isActive={isActive} {...rest} />
  );
}