import React,{Component} from 'react';
import SnowStorm from 'react-snowstorm';
import Navigation from './sections/Navigation';
import TitleAndIcon from './sections/TitleAndIcon';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import { Link } from 'react-scroll';
import data from "./data.json";
import './sections/Navigation.css'



import './App.css';

class  App extends Component {
  
  constructor(){
   super()
   this.state={
   tem:'first',
   tem1:'second',
   tem2:'third'
   }
   }
  handleClick= ()=> {
        
    const min = 1;
    const max = 6;
    let rand = (parseInt)(min + Math.random() * (max - min));
   console.log("tem"+ rand)
    let tem=  "tem"+ rand
     rand = (parseInt)(min + Math.random() * (max - min));
    let tem1= "tem"+ rand
     rand = (parseInt)(min + Math.random() * (max - min));
    let tem2= "tem" + rand 
    this.setState({
      tem:tem,
      tem1:tem1,
      tem2:tem2
    })
    }

  render(){
  return (
    <div className="App">
      <div>
       <h4 className="navarbar"></h4>

       <div className = "navarbar">
       
       <ul>
      <li>  <a className="active" href ="#title" ><Link activeClass="active" to="title" spy={true} smooth={true} offset={-500} duration={500} onSetActive={this.handleSetActive}>BAHMAN!</Link> </a></li>
       <li> <a href ="#About" ><Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>ABOUT</Link> </a></li>
       <li> <a href ="#Skill" ><Link activeClass="active" to="skill" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>SKILL</Link> </a></li>
       <li style={{float: 'right'}} >
           <a class="Material" href="#paint "> <img src={data.icons.paint} 
            onClick = {this.handleClick} 
            ></img></a></li>
           
        </ul>
       
   </div>
      

       {/* <Navigation/> */}
       
       </div>
      <SnowStorm />  
      <TitleAndIcon  classN={this.state.tem}/>
      <AboutSection  classN={this.state.tem1}/>
      <SkillSection classN={this.state.tem2}/>
   
    </div>
  );
}}

export default App;
