import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-background);

    @media (min-width: 375px) {
        
        margin-top: 200px;
      }
`