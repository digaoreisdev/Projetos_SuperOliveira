import { HeaderContainer, HeaderContent, NewChecklistButton } from "./styles";

import logoImg from '../../assets/Logo_Oliveira.png';

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        
        <NewChecklistButton>
          Gerar Novo Checklist
        </NewChecklistButton>
      </HeaderContent>
    </HeaderContainer>
  )
}