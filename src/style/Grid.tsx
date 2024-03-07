import styled from "styled-components";
import { ColumnProps } from "types/styles";

export const Container = styled.div`
    width: auto;
    height: 75vh;
    background-color: #0c6baa;
    /* background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%); */
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 15px;
    /* margin: 0 auto; */
    margin-left: 10px;
    margin-right: 10px;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: none;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
`;

function getWidthGrid(value: number) {
    let width = value / 12 * 100;
    return `width: ${width}%`;
}

export const Column = styled.div<ColumnProps>`
    float: left;
    width: 100%;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        ${({ sm }) => sm && getWidthGrid(sm)}
    }
    @media only screen and (max-width: 768px) {
        ${({ md }) => md && getWidthGrid(md)}
    }
    @media only screen and (max-width: 1000px) {
        ${({ xl }) => xl && getWidthGrid(xl)}
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
`;
