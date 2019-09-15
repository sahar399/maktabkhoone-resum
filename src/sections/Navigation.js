import React, {Component} from 'react';
import { Link } from 'react-scroll';
import data from "../data.json";
import './Navigation.css'
import App from '../App.js';





class Navigation extends Component {
    
     
    
    render(){
        return(
        <div className = "navarbar">
       
            <ul>
           <li>  <a className="active" href ="#title" ><Link activeClass="active" to="title" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>BAHMAN!</Link> </a></li>
            <li> <a href ="#About" ><Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>ABOUT</Link> </a></li>
            <li> <a href ="#Skill" ><Link activeClass="active" to="skill" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>SKILL</Link> </a></li>
            <li style={{float: 'right'}} >
                <a class="Material" href="#paint "> <img src={data.icons.paint} 
                 onClick = {this.handleClick} 
                 ></img></a></li>
                
             </ul>
            
        </div>
           
     
        )}
}
export default Navigation