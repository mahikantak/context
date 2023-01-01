import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContexts';
import ColorContext from '../contexts/colorContext.js'
class App extends React.Component {

state = {language : 'english'}

 onLangualgeChnage = language =>{
    this.setState({language})
 }
  render() {
    return (<div className="ui container">
        <div>
          Select a language:
          <i className='flag us' onClick={() => this.onLangualgeChnage('english')}></i>
          <i className='flag nl' onClick={() => this.onLangualgeChnage('dutch')}></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value = "red">
              <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
        
      </div>)
  }
}

export default App;
