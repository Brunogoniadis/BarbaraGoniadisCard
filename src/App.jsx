import { Background } from "./style"
import { ContainerPrincipal } from "./style"
import { ButtonsContainer } from "./components/ButtonsContainer/ButtonsContainer"

import { ProfilePic } from "./components/ProfilePic/ProfilePic"
import GlobalStyle from "./styles/GlobalStyle"

function App() {


  return (
    <Background>

      <ContainerPrincipal>
      <GlobalStyle></GlobalStyle>
        <ProfilePic></ProfilePic>
        <ButtonsContainer/>
        
      </ContainerPrincipal>

    </Background>

    
  )
}

export default App
