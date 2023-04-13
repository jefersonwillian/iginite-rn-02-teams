import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;

export default {
  Container,
  Name,
  Icon,
}; 