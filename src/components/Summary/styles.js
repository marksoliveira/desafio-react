import styled from "styled-components";

export const Container = styled.section`
    width: 98%;
    height: 15.4rem;
    margin: 1rem 0;
    border: 1px solid #CDCDC1;
    border-radius: 0.6rem;
`

export const Title = styled.div`
    width: 100%;
    background-color: #F0F0F0;
    padding: 1rem 0.6rem;
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;

    h3 {
        font-family: 'Roboto Mono', monospace;
        font-size: 1.5rem;
        line-height: 26px;
        margin: 0;
    }
`

export const InfosTable = styled.div`
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    
    div {

        table {
            border-collapse: inherit;
            border: 1px solid #EEE9E9;
            border-radius: 5px;
            font-weight: 700;
        }
        
        td {
            padding: 0.6rem 1.4rem;
            font-family: 'Roboto Mono', monospace;
            font-size: 1rem;
            line-height: 18px;
        }
    }
`
