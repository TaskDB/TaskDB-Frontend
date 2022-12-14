import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const RankWrapper = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const RankHeadElement = styled.th`
  font-size: 1.5rem;
  padding: 1rem;
  border-bottom: 1px solid ${theme.white};
`;
