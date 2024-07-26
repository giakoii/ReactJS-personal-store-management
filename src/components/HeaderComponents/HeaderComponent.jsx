import React from "react";
import {Col, Row} from "antd";
import {WrapperHeader} from "./style";

const HeaderComponent = () => {
    return (
        <WrapperHeader>
            <Col span={6}>
                Vựa mít - yến Khoa
            </Col>
            <Col span={12}>col 8</Col>
            <Col span={6}>col 8</Col>
        </WrapperHeader>
    )
}

export default HeaderComponent;
