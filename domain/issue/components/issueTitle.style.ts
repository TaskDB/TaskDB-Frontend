import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const IssueTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IssueStatus = styled.div``;

export const IssueTitleText = styled.h3`
  margin: 0 0 0 0.5rem;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 185px;
  &:hover {
    text-decoration: underline;
  }
`;

export const IssueTitleLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IssueSubjectText = styled.span`
  background-color: ${theme.skyblue["900"]};
  padding: 0.3rem;
  font-size: 0.6rem;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid white;
`;
