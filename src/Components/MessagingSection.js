import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';

import bgCircles from '../img/circleBg.svg';
import paddy from '../img/paddy.jpg';


function MessagingSection() {
    return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-items">
                    <p id="About"></p>
                        <h2 className="secondary-heading">
                            About
                        </h2>
                       
                        <p className="m-para">
                        KARMEGAM COLLECTIVE FARMERS PRODUCER COMPANY LIMITED
                        </p>
                    <img className="img1" src={paddy} alt=" paddy" />
                        
                        <img src={bgCircles} className="bgCircle" alt="" />
                    </div>
                    <div className="right-items">
                        <h4 className="h4style" >KARMEGAM SEEDS and FERTILIZER & PESTICIDES</h4>
                   <p> 3/20-4 Pudhuvelliyam palayam,Nathakadaiyur,Kangayam -Tirupur 638108</p>
                   <br/>

                   <hr/>
                   <br/>
                   <br/>
                   <br/>
                   <h4 className="h4style" >KARMEGAM SEEDS and FERTILIZER & PESTICIDES</h4>
                    <h4 className="h4style">இ-சேவை மையம்</h4>
                    <p>156-A,Muslim Street,Kangayam -Tirupur 638701  </p>
                   <br/>

                   <hr/>

                   <br/>
                   <br/>
                   <br/>

                    </div>
                </div>
            </InnerLayout>
        </MessageStyle>
    )
}

const MessageStyle = styled.section`
    .message-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
      .h4style{
        font-style: italic;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: blue;
      }  
      .img1{
        box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
        border-radius: 62px;
        width: 100%;
        opacity: 0.5;
      }

    .left-items{
        position: relative;
        padding-right: 2rem;
        .m-para{
            padding: 1rem 0;
        }
        .images-con{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 1rem;
        }
        .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
    }
`;

export default MessagingSection;
