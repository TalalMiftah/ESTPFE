import React from 'react'
import {Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, SwapOutlined , BulbOutlined, FundOutlined} from '@ant-design/icons'
import icon from '../images/logo.png'
const Navbar = () => {  
    return (
        <div className='nav-container' >
            <div className='logo-container'>
                <Avatar src={icon} size='large' /><br/>
                <Typography.Title level={2} className='logo' style={{color: '#ffffff'}
                    }>
                    CryptoNews
                </Typography.Title>
            </div>
            <Menu theme="dark" style={{justifyContent:"center"}}>
                <Menu.Item icon={<HomeOutlined />} style={{marginRight:"20px"}}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}style={{marginRight:"20px"}}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<SwapOutlined />}style={{marginRight:"20px"}}>
                    <Link to="/currencyconverter">Currency Converter</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}style={{marginRight:"20px"}}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu> 
        </div>
    )
}

export default Navbar