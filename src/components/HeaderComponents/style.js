import styled from "styled-components";
import {Row} from "antd";

export const WrapperHeader = styled(Row)
    `padding: 10px 120px;
    background-color: green;
    `;

export const WrapperContextHeader =styled.span`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    `;

// In src/components/HeaderComponents/style.js
export const WrapperHeaderAccount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 15px;
`;

export const WrapperHeaderText = styled.span`
    font-size: 15px;
    color: #ffffff;
    
    `;

export const WrapperHeaderCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 15px;
`;