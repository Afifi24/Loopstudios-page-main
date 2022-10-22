import React from 'react'
import styled from 'styled-components'
export default function Header({isopen,setisopen}) {

  const OpenClose =()=>{
    setisopen(!isopen)
    console.log(isopen)
  }
  return (
    <Headeer>
      <div className="nav">
        <img src="./images/logo.svg" alt="" />
        <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
        </ul>
      </div>
      <div className='hero'>
      <h1>IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER</h1>

      </div>
      <div onClick={OpenClose} className='navlinks' >
        <img  src={`${isopen?'./images/icon-hamburger.svg':"./images/icon-close.svg" }`} alt="" />
      </div>
      <div  className={`navbar ${isopen? '' : 'doit'}`}>
      <img src="./images/logo.svg" alt="" />

      <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
        </ul>
      </div>
    </Headeer>
  )
}
// styled components

const Headeer = styled.div`
min-height: 80vh;
background-image:url("../images/desktop/image-hero.jpg");
background-position: center;
background-size: cover;
background-repeat:no-repeat;
background-color: lightblue;
padding: 1rem 5rem;
display: flex;
flex-direction: column;
justify-content: space-between;
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      width: 7.5rem;
    }
    ul{
        list-style-type: none;
        display: flex;
        li{
            margin-right: 2rem;
            font-size: 12px;
            font-weight:bold;
            color: hsl(0, 0%, 100%);
            cursor: pointer;
        }
    }
    

}
.hero{
    border: 2px solid hsl(0, 0%, 100%);
    height: 210px;
    width: 400px;
    display: flex;
    align-items: center;
    padding: 0rem 2rem;
    margin-bottom: 5rem;
    h1{
        font-size:2.8rem;
        color: hsl(0, 0%, 100%);
    }
}
.navlinks{
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: none;
  cursor: pointer;
  z-index: 10;
}


/* media query */
@media(max-width:626px){
  align-items: center;
  /* justify-content: center; */
  .nav{
    flex-direction: column;
  }
  .hero{
    width: 250px;
    padding: 0rem 1rem;
    height: 170px;
    align-items: center;
    justify-content: center;
    h1{
      font-size: 2rem;
    }
  }
}
@media(max-width:500px){
  .navlinks{
    display: flex;
  }
  .nav{
    ul{
    display: none;
  }
  img{
  position: absolute;
  left: 2rem;
  top: 2rem;
  }
  }
  .navbar{
  position: absolute;
  top:0;
  right: 0;
  background-color: #000;
  height: 100%;
  width: 100%;
  transform: translateX(100%);
  transition: all 0.4s ease-out;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: flex-start;
  img{
    width: 7rem;
    margin-left:2rem;
    margin-bottom: 4rem;
  }
  ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    li{
      color: #fff;
      margin-top: 2rem;
      font-size: 18px;
      cursor: pointer
      ;
      &:hover{
        opacity: 0.5;
      }
    }
  }
}
  
}
.doit{
  transform: translateX(0%);
  transition: all 0.4s ease-out;

}
@media(min-width:500px){
  .navbar{
  display: none;
}
}
`