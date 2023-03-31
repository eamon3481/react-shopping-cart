import styled from '@emotion/styled';
import React from 'react';

type IconButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
} & Partial<Space>;

const IconButton = ({ icon, onClick, ...space }: IconButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} {...space}>
      {icon}
    </ButtonWrapper>
  );
};

export default React.memo(IconButton);

const ButtonWrapper = styled.button<Partial<Space>>`
  margin-top: ${({ mt }) => mt}px;
  margin-right: ${({ mr }) => mr}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-left: ${({ ml }) => ml}px;
  padding-top: ${({ pt }) => pt}px;
  padding-right: ${({ pr }) => pr}px;
  padding-bottom: ${({ pb }) => pb}px;
  padding-left: ${({ pl }) => pl}px;
`;

interface Space {
  mt: number;
  mr: number;
  mb: number;
  ml: number;
  pt: number;
  pr: number;
  pb: number;
  pl: number;
}
