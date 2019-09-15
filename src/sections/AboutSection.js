import React, {Component} from 'react'
import Fullpage  from '../component/Fullpage'
import data from "../data.json";
import { Link, Element } from 'react-scroll'
import DownIcon  from '../component/DownIcon'
import './AboutSection.css'




class AboutSection extends Component {
  constructor(props){
    super(props)
  }
    render(){
        return(
          <div>
          <Fullpage className={this.props.classN}>
          <div>
          <h3 >
          {data.sections[0].title}
        </h3>
        <div className ="paragraphs"></div>
        <p >
          {data.sections[0].items[0].content}
        </p>
      </div>
      </Fullpage>
      <a href="#"><Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={500} delay={0}>
      <DownIcon 
        icon ={data.icons.down}   
         />
       </Link> </a>
       <Element name="skill" className="element">
         
       </Element>
       </div>
        )
    }
}
export default  AboutSection