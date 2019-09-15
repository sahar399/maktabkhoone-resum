import React, {Component} from 'react'
import Fullpage  from '../component/Fullpage'
import data from "../data.json";
import './AboutSection.css'
import './SkillSection.css'
import { Link, Element } from 'react-scroll'
import TopIcon  from '../component/TopIcon'
import SkillCard from "../component/skillCard"



class SkillSection extends Component {
  constructor(props){
    super(props)
  }

    render(){
        return(
          <div>
          <Fullpage className={this.props.classN}>
         
          <h3> {data.sections[1].title}</h3>
        <div className ="card-wrapper">
            {data.sections[1].items.map (eachskill => {
               return (
                  <SkillCard skill={eachskill}/>

                );

          })}
       
      </div>
      </Fullpage>
      <a href="#"><Link activeClass="active" to="title" spy={true} smooth={true} offset={-500} duration={500} onSetActive={this.handleSetActive}>
          
      <TopIcon 
        icon ={data.icons.top}   
         />
       </Link> </a>
       <Element name="test1" className="element">
        </Element>
       </div>
        );
    }
}
export default  SkillSection;