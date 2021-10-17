import styled from "styled-components";

export const Container = styled.section`
    width: 98%;
    height: 25.2rem;
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
        font-weight: 700;
        line-height: 26px;
        margin: 0;
    }
`

export const Table = styled.div`
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;

    div {

        table {
            border-collapse: collapse;
        }

        th, td {
            padding: 0.6rem 1.4rem;
            font-family: 'Roboto Mono', monospace;
            font-size: 1rem;
            line-height: 18px;
            border: 1px solid #EEE9E9;
        }

        td {
            text-align: center;
        }
    }
`
