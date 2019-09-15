import React, {Component} from 'react';
import { ICONS } from 'jest-util/build/specialChars';


const DownIcon =(props)=> {
    return(
        <div
        style={{
            color:"white",
            display :"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            marginBottom:"-80px",
            transform:"translateY(-85px)"
        }}
        >
          
                <img src={props.icon} />
            </div>
       
    )

}
export default DownIcon