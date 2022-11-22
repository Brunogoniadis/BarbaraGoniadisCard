import styled from "styled-components";

export const Containerbutton = styled.button`
    font-size: 11px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    width: 500px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 5%;
    padding-left: 5%;
    border: 0px solid;
    border-radius: 10px;
    border-color: var(--color-border);

    transition: ease-in 0.05s;
    background-color: #501a28;
    cursor: pointer;



    @media (min-width: 375px) {
        width: 350px;
      }
    @media (min-width: 420px) {
        width: 400px;
      }
    @media (min-width: 920px) {
        top: 10%;
    }




    svg{
        width: 45px;
        height: auto;
        color: var(--color-colorIcons);
    }

    :hover{
        transform: scale(1.02);
    }    

`