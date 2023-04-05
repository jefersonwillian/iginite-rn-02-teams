import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))``;

export default {
  Container,
  Logo,
  BackButton,
  BackIcon,
};
