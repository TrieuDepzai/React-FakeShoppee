import React from 'react';
import logo from './logo.svg';
import Header from './components/header';
import First from './components/first';
import Two from './components/two';


class App extends React.Component {
  
  render(){
    
  return (
    <div className="App">
      <Header />
      <First />
      <Two />
    </div>
  );
  }
}


export default App;