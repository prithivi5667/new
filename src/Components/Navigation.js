import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.jpg';
import { Fade } from 'react-reveal';
import './style.css'
function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
            <div className="logo">
                <img className="logoimg" src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#Products">Products</a>
                </li>
                <li>
                    <a href="#Contact">Contact Us</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
            </ul>
            <PrimaryButton name={'Sign Up'} />
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
export default Navigation
