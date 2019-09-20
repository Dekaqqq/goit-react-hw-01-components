import styled from 'styled-components';

export const StyledHeadline = styled.h2`
    font-size: 35px;
    margin: 30px 0 10px;
    text-transform: uppercase;
    color: ${props => `${props.color}`};
`;

export const StyledButton = styled.button`
    display: block;
    margin: 0 auto;
    padding: 16px 40px;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    background-color: ${props => `${props.color}`};
    border: none;
    cursor: pointer;
`;
