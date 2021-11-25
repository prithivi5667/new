import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import card from '../img/rices.jpg';


function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                        Products
                        </h2>
                        <p id="Products"></p>
                        <p>Coconut Oil
                        மரச்செக்கு எண்ணெய்/Cold Pressed Oil
                        <hr/>
                        Groundnut
மரச்செக்கு எண்ணெய்/Cold Pressed Oil
<hr/>
<br/>

Gingelly Oil
மரச்செக்கு எண்ணெய்/Cold Pressed Oil
<hr/>
<br/>

Tarpaulin
Black HDPE 250 GSM Heavy Duty
<hr/>
<br/>
Rice Paddy
IR-20
<hr/>
<br/>

All variety of seeds
Top branded seeds
<hr/>
<br/>

All variety of Pesticides
Top Quality Pesticides
<hr/>
<br/>

நாட்டுச் சர்க்கரை
<hr/>

                        </p>
                    </div>
                    <div className="card-right">
                    <img className="img1" src={card} alt="" />
                    
                    
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 845px){
            grid-template-columns: repeat(1, 1fr);
        }
        .card-right{
            display: flex;
            
            justify-content: flex-end;
             
            img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));
            width:100%;
            height:85%;
            margin-top:80px;
            margin-left:70%;
           
            }

        }
        .img1{
            box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
            border-radius: 62px;
            width: 100%;
            
        }
        .card-left{
            p{
                padding: 1rem 0;
            }
        }
    }
`;

export default CardSection
