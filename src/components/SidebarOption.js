import React from "react";
import styled from "styled-components";

const Option = styled.div`
  height: 40px;
  cursor: default;
  color: gray;
  transition: 200ms color ease-in;
  display: flex;
  align-items: center;

  &:hover {
    color: #ffffff;
  }
`;
const IconItem = styled.h4`
  margin-left: 10px;
`;

const WithoutIcon = styled.p`
  margin-left: 10px;
`;



export const SidebarOption = ({ title, Icon }) => {
  return (
    <Option>
      {Icon && <Icon></Icon>}
      {Icon? <IconItem>{title}</IconItem> : <WithoutIcon>{title}</WithoutIcon>}
    </Option>
  );
};

export default SidebarOption;
