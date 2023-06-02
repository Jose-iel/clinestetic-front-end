import { Box } from 'styles/layout';
import * as S from './style';
import { IInput } from './interfaces';

export default function Input({ options }: IInput) {
  return (
    <Box
      as="label"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="32%"
    >
      {options?.label && <Box mb="0.5rem">{options?.label}</Box>}
      {options?.iconLeft ? (
        <S.Icon>{options?.iconLeft}</S.Icon>
      ) : (
        <S.Icon direction="right">{options?.iconRight}</S.Icon>
      )}
      <S.Input
        id={options?.id}
        placeholder={options?.placeholder}
        inputSize={options?.iconLeft ? '1rem 2rem 1rem 3rem' : options?.size}
        rounded
        width="100%"
      />
    </Box>
  );
}
