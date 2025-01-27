import React from 'react'
import '../Component/icon.css'
import IconOne from '../image/iconone.png'
import TwoIcon from '../image/two.png'
import ThreeIcon from '../image/three.png'
import FourIcon from '../image/four.png'
import FiveIcon from '../image/five.png'
import SixIcon from '../image/six.png'
import SevenIcon from '../image/seven.png'
import EightIcon from '../image/eight.png'
import NineIcon from '../image/nine.png'
import TenIcon from '../image/ten.png'
import ElevenIcon from '../image/eleven.png'
import TwelveIcon from '../image/twelve.png'
import ThirteenIcon from '../image/thirteen.png'
import FourteenIcon from '../image/fouteen.png'
import FifteenIcon from '../image/fifteen.png'
import SixteenIcon from '../image/sixteen.png'
import SeventeenIcon from '../image/seventeen.png'
import EighteenIcon from '../image/eighteen.png'
import NineteenIcon from '../image/ninteen.png'
import TwentyIcon from '../image/twenty.png'
import TwentyOne from '../image/TwentyOne.png'
import TwentyTwo from '../image/twentyTwo.png'
import half from '../image/half.png'
import Button from '@mui/material/Button';
function Icon() {
  return (
    <div className='manContainer'> 
    <div className='head'>
        <div className='iconhead'>
        <p className='iconhead1'>Our Happy Clients</p>
        <p className='subpara'>
        Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource- <br/>leveling customer service for state of the art customer service.
        </p>
        </div>

    </div>

    <div className='iconbody'>
        <div>  <img className='icon21' src={TwentyOne} alt="Icon 21"/></div>
  <div>
    <img className='icon22' src={TwentyTwo} alt="Icon 21"/></div>
    <div>
    <img className='icon1' src={IconOne} alt="Icon 1"/></div>
    <div>
    <img className='icon2' src={TwoIcon} alt="Icon 2"/></div>



    <div>
    <img src={ThreeIcon} alt="Icon 3"/>


    </div>
  
   <div>
  
    <img src={FourIcon} alt="Icon 4"/></div>
    <div>
    <img src={FiveIcon} alt="Icon 5"/>
    </div>
    </div>




    <div className='iconbody2'>
   <div>
   <img src={half} alt="Icon 5"/>
   </div>
    <div className="icon4">
    <img src={NineIcon} alt="Icon 5"/>
    </div>
    <div className="icon5">
    <img src={SeventeenIcon} alt="Icon 5"/>
    </div>
   
  
   
   
<div>
<img src={TwentyIcon} alt="Icon 5"/>
</div>
<div className="icon14">
      <img src={FourteenIcon} alt="Icon 5"/>
    </div>
    <div className="icon11">
      <img src={ElevenIcon} alt="Icon 5"/>
    </div>  
<div className="icon6">
      <img src={SixIcon} alt="Icon 5"/>
    </div>


   
   
    </div>








<div className='iconbody3'>

    <div className="icon8">
    <img src={NineteenIcon} alt="Icon 5"/>

   
    </div>
    <div className="icon9">

    <img src={EighteenIcon} alt="Icon 5"/>
   
    </div>
    <div className="icon10">

    <img src={SixteenIcon} alt="Icon 5"/>
     
    </div>
   
   
    <div className="icon15">
      <img src={FifteenIcon} alt="Icon 5"/>
    </div>
    <div className="icon13">
      <img src={ThirteenIcon} alt="Icon 5"/>
    </div>
    <div className="icon12">
      <img src={TwelveIcon} alt="Icon 5"/>
    </div>
    <div className="icon16">

    <img src={TenIcon} alt="Icon 5"/>
     
    </div>
   
    <div className="icon18">
    <img src={NineIcon} alt="Icon 5"/>
    </div>
    <div className="icon19">
    <img src={EightIcon} alt="Icon 5"/>
    </div>
    <div className="icon7">
      <img src={SevenIcon} alt="Icon 5"/>
    </div>

    </div>

{/* <div className='iconbody4'>
<div className='btn'>
    <Button  sx={{backgroundColor:"#1C4670"}} variant="contained">Talk An Expert</Button>
    </div>
    </div> */}
  </div>
  )
}

export default Icon