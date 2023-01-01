import React from "react";
import LanguageContext from '../contexts/LanguageContexts.js'
import ColorContext from '../contexts/colorContext.js'
class Button extends React.Component {

    static contextType = LanguageContext
    render(){
        
        return(
            <ColorContext.Consumer>
            {(color) => 
            <button className={`ui buttton ${color}`}>
            <LanguageContext.Consumer>
                {(value) => value === 'english' ? 'Submit' : 'Voorlegen'}
            </LanguageContext.Consumer>
         </button>
            
            }
            
        </ColorContext.Consumer>
        )
    }
}

export default Button;