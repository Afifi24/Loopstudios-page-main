import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <Foooter>
      <div className="loopstudios">
        <img src="./images/logo.svg" alt="" />
        <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
        </ul>
      </div>
      <div className="social">
        <div className="hello">
        <img src="./images/icon-facebook.svg" alt="" />
        <img src="./images/icon-twitter.svg" alt="" />
        <img src="./images/icon-pinterest.svg" alt="" />
        <img src="./images/icon-instagram.svg" alt="" />
        </div>
        <p>&copy; 2022 Loopstudios. All the rights reserved.</p>
      </div>
    </Foooter>
  )
}


// styled-components


const Foooter = styled.div`
display: flex;
min-height: 20vh;
align-items: center;
background-color: #000;
justify-content: space-around;
.loopstudios{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    img{
        width: 7rem;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        list-style-type: none;
        li{
            color: #fff;
            margin-right: 1rem;
            font-size: 13px;
            cursor: pointer;
            font-weight: bold;
        }
    }
}
.social{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .hello{
        /* display: flex;
        justify-self:flex-end; */
    }
    img{
        width: 1rem;
        margin-right:1rem;
        cursor: pointer;
    }
    p{
        color: #fff;
        font-size: 13px;
        opacity: 0.5;

    }
}
@media(max-width:625px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .loopstudios{
        padding-top: 1rem;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        ul{
            flex-direction: column;
            /* align-items: center;
            justify-content: center; */
            li{
                margin: 0.5rem 0rem;
                opacity: 0.5;
                &:hover{
                    opacity: 1;
                    transition: 0.3s;
                }
            }
        }
    }
}

`