import { menus } from "./menus";
import { TbSettings } from "react-icons/tb";
import Logo from "../../assets/Logo";
import Menu from "./Menu";
import * as S from "./styles";

export default function SideBar() {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.Menus>
        {menus.map((menu) => {
          return <Menu menu={menu} />;
        })}
      </S.Menus>
      <Menu menu={{ route: "/preferencias", icon: TbSettings }} />
    </S.Wrapper>
  );
}
