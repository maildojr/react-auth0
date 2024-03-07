import styled, { createGlobalStyle } from "styled-components";
import { TextProps } from "types/styles";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
        font-weight: 300;
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.h1`
    color: #ffffff;
    text-align: center;
`;

export const Button = styled.button`
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    border-radius: 3px;
    width: 200px;
    color: white;
    font-size: 1em;
    padding: 10px 20px;
    border: none;
    margin: 5px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
        background-color: #105b72c2;
    }
`;

export const Text = styled.p<TextProps>`
    color: #ffffff;
    text-align: center;
    margin: 5px;
    ${({ bold }) => bold && "font-weight: bold"}
    ${({ color }) => color == "error" && `color: red`}
`;

export const ImageProfile = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;