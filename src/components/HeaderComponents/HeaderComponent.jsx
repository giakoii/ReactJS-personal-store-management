import React from "react";
import {Col, Row} from "antd";
import {WrapperContextHeader, WrapperHeader, WrapperHeaderAccount, WrapperHeaderCart, WrapperHeaderText} from "./style";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input} from 'antd';
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons';

const {Search} = Input;

const HeaderComponent = () => {
    return (
        <WrapperHeader>
            <Col span={6}>
                <WrapperContextHeader>
                    Vựa mít - yến Khoa
                </WrapperContextHeader>
            </Col>
            <Col span={12}>
                <Search
                    placeholder="Enter the product you are looking for"
                    enterButton="Search"
                    size="large"
                />
            </Col>

            <Col span={6} style={ {display: 'flex' , gap: '30px'}}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px', color: '#fff'}}/>
                    <div>
                        <WrapperHeaderText>Đăng nhập/Đăng ký</WrapperHeaderText>
                        <div>
                            <WrapperHeaderText>Tài khoản</WrapperHeaderText>
                            <CaretDownOutlined/>
                        </div>
                    </div>
                </WrapperHeaderAccount>
                    <div>
                        <WrapperHeaderCart>
                            <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                            <WrapperHeaderText>Giỏ hàng</WrapperHeaderText>
                        </WrapperHeaderCart>
                    </div>


            </Col>
        </WrapperHeader>
    )
}

export default HeaderComponent;