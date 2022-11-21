import styled from "styled-components";


export const Perfil = styled.div`
    
    position: absolute;
    margin-top: -4%;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 2px solid;
    border-color: var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1001;


    @media (min-width: 390px) {
        top: 0%;
      }
    @media (min-width: 375px) {
        top: 10%;
      }
    @media (min-width: 420px) {
        top: 10%;
      }
    @media (min-width: 920px) {
        top: 10%;
    }


    img{
        position: absolute;
        width: 100%;
        border-radius: var(--radius-border);
        border-radius: 50%;

    }
`
