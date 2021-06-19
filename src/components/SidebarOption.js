import React from "react";
import styled from "styled-components";

const Option = styled.div`
  height: 40px;
  cursor: pointer;
  color: gray;

  &:hover {
    color: #ffffff;
  }
`;
const IconItem = styled.p`
`;
export const SidebarOption = ({ title, Icon }) => {
  return (
    <Option>
      <IconItem>{title}</IconItem>
    </Option>
  );
};

export default SidebarOption;
