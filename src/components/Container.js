import React from 'react'
import styled from 'styled-components'
export default function Container() {
  return (
    <Containeer>
      <div className="heroo">
        <div className='image'>
            <img src="./images/desktop/image-interactive.jpg" alt="" />
        </div>
        <div className="text">
            <h2>THE LEADER IN INTERACTIVE VR</h2>
            <p>Founded in 2011, loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed bussnesses trough digital experiences that bind to their brand. </p>
        </div>
      </div>
      <Creations>
        <h2>Our Creations</h2>
        <button>SEE ALL</button>
      </Creations>
      <Grid>
        <div className="deep"><img src="./images/desktop/image-deep-earth.jpg" alt="" />
        <p className='DEEP'>DEEP <br /> EARTH</p>
        
        </div>
        <div className="night"><img src="./images/desktop/image-night-arcade.jpg" alt="" />
        <p className='DEEP'>NIGHT <br /> ARCADE</p>
        </div>
        <div className="soccer"><img src="./images/desktop/image-soccer-team.jpg" alt="" />
        <p className='DEEP'>SOCCER <br /> TEAM VR</p>
        </div>
        <div className="grid"><img src="./images/desktop/image-grid.jpg" alt="" />
        <p className='DEEP'>THE <br /> GRID</p>
        </div>
        <div className="from up"><img src="./images/desktop/image-from-above.jpg" alt="" />
        <p className='DEEP'>FROM UP <br /> ABOVE VR</p>
        </div>
        <div className="pocket"><img src="./images/desktop/image-pocket-borealis.jpg" alt="" />
        <p className='DEEP'>POCKET <br /> BOREALIS</p>
        </div>
        <div className="curiosity"><img src="./images/desktop/image-curiosity.jpg" alt="" />
        <p className='DEEP'>THE <br /> CURIOSITY</p>
        </div>
        <div className="makeit"><img src="./images/desktop/image-fisheye.jpg" alt="" />
        <p className='DEEP'>MAKE IT <br /> FISHEYE</p>
        </div>
      </Grid>
    </Containeer>
  )
}
// styled components

const Containeer = styled.div`
padding: 2rem 3rem;

.heroo{
display: flex;
align-items: flex-end;
justify-content: center;
margin-bottom: 2rem;

    img{
        width:35rem;
    }
    .text{
      min-width: 8rem;
      background-color: #fff;
      min-height: 17rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      padding-left: 4rem;
      margin-bottom: .3rem;
      position: relative;
      right:10%;
      h2{
        font-size: 2.5rem;
      }
    }

}
@media(max-width:1084px){
  .heroo{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .text{
      right:0;
      text-align: center;
      padding: 0;
      h2{
        font-size: 2.2rem;
      }
    }
  }
}
@media(max-width:570px){
  .heroo{

  
  img{
    width: 20rem;
  }
  .text{
    right:0;
    padding: 0;
    h2{
      font-size: 1.7rem;
    }
    p{
      font-size: 14px;
    }
  }
}
}
`
const Creations = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 3rem;
button{
  width: 10rem;
  height: 40px;
  border: 1.5px solid hsl(0, 0%, 55%);
  background-color: transparent;
  cursor: pointer;
  font-weight:bold;
  font-size: 12px;
  letter-spacing: 5px;
  &:hover{
    background-color:hsl(0, 0%, 55%) ;
    color: #fff;
    transition: all 0.5s ease;
  }
}

h2{
  font-size: 3rem;
}
@media(max-width:604px){
  flex-direction: column;
  h2{
    font-size: 2.2rem;
  }
}
`
const Grid = styled.div`
display: flex;
flex-wrap:wrap;
align-items: center;
justify-content: center;
gap: .5rem 1rem;
img{
  width: 15rem;
}
.DEEP{
  position: relative;
  top: -5rem;
  left: 2rem;
  z-index: 10;
  color: #fff;
  font-size: 20px;
}

`