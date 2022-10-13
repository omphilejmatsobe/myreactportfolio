import React ,{useState} from 'react';
import './App.css';
import logo from './logo.svg';
import facebook from './facebook.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import twitter from './twitter.svg';
import Logo from './Logo.png';
import unity from './unity.svg';
import Solidity from './Solidity.svg';
import c from './c.svg';
import js from './js.svg';
import Wits from './Wits.svg';
import photo from './photo.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {allMyProjects}  from './data';
import {Link} from 'react-scroll';



const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


function App() {

    const [active, setActive] = useState('linksNav');   
    const [toggleIcon, setToggleIcon] = useState('toggler-table');
    const navToggle =()=>{ 
  
    active === 'linksNav' ?  setActive('linksNav nav_active') : setActive('linksNav');
    toggleIcon === 'toggler-table' ? setToggleIcon('toggler-table toggle' ): setToggleIcon('toggler-table');
  };

  const [container1, setContainer1] = useState('footerbox');
  const [contIcon1, setContIcon1] = useState('plusMinus');

  const [container2, setContainer2] = useState('footerbox');
  const [contIcon2, setContIcon2] = useState('plusMinus');

  const [container3, setContainer3] = useState('footerbox');
  const [contIcon3, setContIcon3] = useState('plusMinus');

  const footContainer1 =()=>{

    container1 === 'footerbox' ? setContainer1('footerbox boxActive') : setContainer1('footerbox');
    contIcon1 === 'plusMinus1' ? setContIcon1('plusMinus1 press') : setContIcon1('plusMinus1');
  }
  const footContainer2 =()=>{
    container2 === 'footerbox' ? setContainer2('footerbox boxActive') : setContainer2('footerbox');
    contIcon2 === 'plusMinus2' ? setContIcon2('plusMinus2 press') : setContIcon2('plusMinus2');
  }
   const footContainer3 =()=>{
    container3 === 'footerbox' ? setContainer3('footerbox boxActive') : setContainer3('footerbox');
    contIcon3 === 'plusMinus3' ? setContIcon3('plusMinus3 press') : setContIcon3('plusMinus3');
   }
 
   const [moreContainer , setMoreContainer] = useState('paragraph');
   const [readmore, setReadMore] =useState('readmore');

   const readMoreLess =()=>{

    moreContainer === 'paragraph' ? setMoreContainer('paragraph expanded'): setMoreContainer('paragraph');
    readmore === 'readmore' ? setReadMore('readmore expand') : setReadMore('readmore');
   }

   
  return (
    
    <div className='App-Container'>
        <nav class='nav-bar' id='nav-bar'>
          <div className='Navlogo'><img src={Logo} className='App-logo'/></div>
            <ul className={active}>
             <li className='Home'><Link to='info' spy={true} smooth={true} offset={50} duration={500}  >ABOUT</Link></li>
             <li className='Home'><Link to='button' spy={true} smooth={true} offset={50} duration={500}  >PROJECTS</Link></li>
             <li className='Home'><Link to='Technical' spy={true} smooth={true} offset={50} duration={500} >TECHNICAL SKILLS</Link></li>

             <div id='social-links' className='tablelinks'><ul>
          <li><a href='https://twitter.com/omphilejmatsobe' alt='twitter' target='_blank'><img src={twitter}/></a></li>
          <li><a href='https://www.facebook.com/omphilejmatsobe' alt='facebook' target='_blank'><img src={facebook}/></a></li>
          <li><a href='https://github.com/omphilejmatsobe' alt='github' target='_blank'><img src={github}/></a></li>
          <li><a href='https://www.linkedin.com/in/omphilejmatsobe/' alt='linkedin' target='_blank'><img src={linkedin}/></a></li>
        </ul></div>

          </ul>
        
        <div id='toggler' onClick={navToggle} className={toggleIcon}>
        <div className='Line1'></div>
        <div className='Line2'></div>
        <div className='Line3'></div> 
        </div>
       

        </nav>
        
        <main>
        <section id='info'>
        <div className='About' id='About'>
          
        <div className='text'>
            <div><div id='txt'>
            <h1>Hi, <br/> I'm <br/> Omphile J Mastobe </h1></div>
            <div id='txtt'><h2>Web Developer (UX/UI)/Game Developer</h2></div></div>  
            <div  className='img-box'>
            <img src={photo} id='img'/></div>
          </div>
        
        </div>



        <div className='About-me' id='About-me'><div className='me'>
          <h1 id='about-text'>About Me</h1>

        <p id={moreContainer}>I am a Web developer, Html/Css and React , I am also an engineering student at University of the Witwatersrand for Game Design. 
          <br/>Besides school I am a dedicated programmer, I do freelance Work and also participate on other projects and hackathons.
          <br/>Currently I am building my coding experience towards Web3 development as I am currently learning Solidity, learning how to write smart contracts and creating Web3 APIs, softwares and games.
          <br/>You can look through some of my work below, and also feel free to contact me if you would like to work on a project with me.
        </p><div onClick={readMoreLess} className={readmore} id='read'><h1>...read more</h1></div>
        <div className='button'><Link to='Technical' spy={true} smooth={true} offset={50} duration={500} >CONTACT ME</Link></div>
        </div></div>

        
          
        </section>


         {/*projects section*/}

        <section class='projects' id='projects'>

          {/*slider products*/}

          <div id='slider'><div className='headtext'><h1 className="h1Checkout">Check out some of my work:</h1></div>
            <Slider {...settings}>
            {allMyProjects.map((item)=>(
            
            <div className='card'>

              <div className='card-top'></div>
              <img src={item.linkImg} alt=''/>
              <div className='card-bottom'></div>
              <h1 id='item-title'><a href={item.url} target='_blank'>{item.title}</a></h1>
              <h1 id='category'>{item.category}</h1>
              
              </div>
              
              
              ))}
              </Slider>
              

            

         
          </div>

        </section>
      </main>


       {/*footer*/}

      <footer id='Technical'>
        <div className='Wrapper'>
        

        {/*education section*/}

       

       

           {/*technical skills section*/}

          <div className='TECHNICAL_SKILLS' id='majorCont'>
          
        
        <h2 class='TEChNICAL' id='section-name'>Technical Skills</h2>


        <div id="cont" className='cont'>
        <img src={js} alt='Javascript' className='REACT'/>
       <img  src={logo} alt='Reactjs' className='REACT'/>
       <img src={Solidity} alt='Solidity' className='REACT'/>
         <img src={c} alt='C#' className='REACT'/>
        <img src={unity} alt='Unity' className='REACT'/></div>
        
        </div>

        <div className='Education' id='majorCont'>
        

        <h2 class='EDUCATION' id='section-name'>Education</h2>


        <div id="cont"><div class="ed-link">
        <h1><a href="" target='_blank'>freecodecamp</a></h1>
        <h1><a href="" target='_blank'>Codecademy</a></h1>
        <br/></div>
        <h3>UNIVERSITY OF THE WITWATERSRAND</h3>
        <p>2021 - current</p>
        <p>B Eng Sc Digital Arts </p>
        <p>School of Electrical and Information Engineering</p>
        <img src={Wits} alt='University Of Witwatersrand' id='Wits' /></div>
        </div>
         {/*bottom*/}

        <div className='Contacts' id='majorCont'>
        <h2 class='CONTACT' id='section-name'>Contact</h2>
        <div id="contContacts"><div class="contInfo">
        <h1><span id='select'>E-Mail:</span> omphilejmatsobe@gmail.com</h1>
        <h1><span id='select'>Contact #:</span> (+27) 66 101 1483</h1>
        <br/></div>
        </div>

        <div id='social-links'><ul>
          <li><a href='https://twitter.com/omphilejmatsobe' alt='twitter' target='_blank'><img src={twitter}/></a></li>
          <li><a href='https://www.facebook.com/omphilejmatsobe' alt='facebook' target='_blank'><img src={facebook}/></a></li>
          <li><a href='https://github.com/omphilejmatsobe' alt='github' target='_blank'><img src={github}/></a></li>
          <li><a href='https://www.linkedin.com/in/omphilejmatsobe/' alt='linkedin' target='_blank'><img src={linkedin}/></a></li>
        </ul></div>
        </div>
        
      
        
        
          

        </div>
        
          <div className='wrapperW'>
          <div className={container1}>
              <div className='inLine'>Technical Skills <div id='footerIcon' onClick={footContainer1} className={contIcon1}>
              <div className='stroke1' id='stroke1'></div>
        </div>
        </div>
              <br/>
              <div>
              <div >
        <img src={js} alt='Javascript' className='REACT'/>
       <img  src={logo} alt='Reactjs' className='REACT'/>
       <img src={Solidity} alt='Solidity' className='REACT'/>
         <img src={c} alt='C#' className='REACT'/>
        <img src={unity} alt='Unity' className='REACT'/></div>
              </div>
              
          </div>
          <div className={container2}>
              <div className='inLine'>Education <div id='footerIcon' onClick={footContainer2} className={contIcon2}>
              <div className='stroke2' id='stroke1'></div>
        </div>
        </div>
              <br/>
              <div>

              <div><div >
        <h1 id='anchorH'><a href="" target='_blank'>freecodecamp</a></h1>
        <h1 id='anchorH'><a href="" target='_blank'>Codecademy</a></h1>
        <br/></div>
        <h3 id='witsh3'>UNIVERSITY OF THE WITWATERSRAND</h3>
        <p>2021 - current</p>
        <p>B Eng Sc Digital Arts </p>
        <p>School of Electrical and Information Engineering</p>
        <img src={Wits} alt='University Of Witwatersrand' id='Wits' /></div>

              </div>

          </div>
          <div className={container3}>
              <div className='inLine'>Contacts<div id='footerIcon' onClick={footContainer3} className={contIcon3}>
        <div className='stroke3' id='stroke1' ></div>
        </div>

        </div>
              <br/>
              <div>
              <h1 id='details'><span id='detColor'>E-Mail:</span> omphilejmatsobe@gmail.com</h1>
        <h1 id='details' ><span id='detColor'>Contact #:</span> (+27) 66 101 1483</h1>
              </div>


          </div>
          
          <div id='social-links'><ul>
          <li><a href='https://twitter.com/omphilejmatsobe' alt='twitter' target='_blank'><img src={twitter}/></a></li>
          <li><a href='https://www.facebook.com/omphilejmatsobe' alt='facebook' target='_blank'><img src={facebook}/></a></li>
          <li><a href='https://github.com/omphilejmatsobe' alt='github' target='_blank'><img src={github}/></a></li>
          <li><a href='https://www.linkedin.com/in/omphilejmatsobe/' alt='linkedin' target='_blank'><img src={linkedin}/></a></li>
        </ul></div>
        </div>
         {/*bottom*/}

        <div className='bottom'>
          <div className='bottomdiv'><h2>SOUTH AFRICA</h2></div>
          <div className='bottomdiv'><h2>omphile.j</h2></div>
        </div>
       
        
      </footer>
        
      
    </div>
  );
}

export default App;