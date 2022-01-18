import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
`

export const Content = styled.div`
    min-height: 150px;
    max-width: 1120px;
    margin: 0 auto;
    
    padding: 2rem, 1rem, 12rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    button{ 
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0%.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
    }


`

export const Logo = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 10px;

    h1{
        margin-top: 6%;
        margin-left: 5%;
        font-size: 1.3rem;
        color: white;
        cursor: default;
    }

    img{
        height: 50px;
        background-color: var(--blue-light);
        border-radius: 2rem;
        padding: 2%;
    }
`

