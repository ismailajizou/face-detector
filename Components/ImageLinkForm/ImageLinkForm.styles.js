import styled from "styled-components/native";

export const FormContainer = styled.View`
    margin-top: 3em;
    height: 10em;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
`

export const InputForm = styled.View`
    width: 100%;
    margin-top: 2em;
    border: 2px;
    border-radius: 5px;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fb1;
`
export const CustomInput = styled.TextInput`
    background-color: white;
    width: 70%;
    height: 37px;
    padding: 5px;
    border: 1px;
    border-color: blue;
`

export const CustomButton = styled.Button`
    marging: 0;
    width: 10%;
    height: 40px;
    background-color: #04C8DE;
`