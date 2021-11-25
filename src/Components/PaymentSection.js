import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';

// import Card from './Card';
// import card from '../img/creditcard.svg';
// import active from '../img/active.svg';
// import inactive from '../img/inactive.svg';
// import check from '../img/check.svg';
// import checkDisabled from '../img/check-disabled.svg';

function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading">Images</h3>
                <p className="c-para"> </p>
                <div className="card-con">
                <Carousel>
                <div>
                <img src={img1} alt="" />
                    
                </div>
                <div>
                <img src={img2} alt="" />

                    
                </div>
                <div>
                <img src={img3} alt="" />

                </div>
                <div>
                <img src={img4} alt="" />

                </div>
            </Carousel>
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    .card-con{
        width:100%;
        
        padding-top: 7.4rem;
        @media screen and (max-width: 689px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .c-para{
        text-align: center;
    }
`;
export default PaymentSection;
