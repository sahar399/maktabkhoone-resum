import React, {Component} from 'react';
import Fullpage  from '../component/Fullpage'
import DownIcon  from '../component/DownIcon'
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
import './TitleAndIcon.css'
import { Link, Element } from 'react-scroll'
import '../App.css'




class TitleAndIcon extends Component {
  constructor(props)
  {
    super(props)
  }
    render(){
        return(
          <div>
           
      <Fullpage className= {this.props.classN} >
        
      <h1 className="title"> 
        {data.title}
        </h1>
       
      
      <div>
        <h2> {data.subtitle} </h2>
      </div>
      <div className="icon-wrapper">
        {Object.keys(data.links).map(key => {
          return(
            <div className="icon">
            <SocialIcon url={data.links[key]} />
            </div>
          );
        })}
      </div>
       </Fullpage>
       <a href="#"><Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} delay={0}>
       <DownIcon 
         icon ={data.icons.down}   
          />
        </Link> </a>
        <Element name="about" className="element">
        </Element>
        
       
        </div>
        );
    }
}
export default  TitleAndIcon