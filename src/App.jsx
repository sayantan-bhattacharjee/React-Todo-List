import React from 'react';
import './App.css';
import Litems from './Litems'; 

class App extends React.Component { 
  // (Note:Constructor is used for initializing the local state of the component by assigning an object to this.state.)
  // (Note:Constructor is used for binding event handler methods that occur in your component.) 
  constructor(props){ 
    // If I do not call super(props) method, this.props will be undefined in the constructor and can lead to bugs. 
    super(props);  
    this.state = {  
         items:[],
         currentItems: {
           text:'',
           key:''
         }  
      }  
    this.handleInput = this.handleInput.bind(this);
    this.addingItem = this.addingItem.bind(this);  
  }  
  handleInput(any){
    this.setState({
      currentItems: {
        text: any.target.value,
        key: Date.now()
      }
    })    
  }
  addingItem(e){
    e.preventDefault();
    let newItem = this.state.currentItems;
    if (newItem.text.length>0){
        let newItems=[...this.state.items, newItem];
        console.log(newItems);
        this.setState({  
          items:newItems,
          currentItems: {
            text:'',
            key:''
          }  
       })  
    }
  } 
render() {
    return (
      <div className="App">
        <header>
            <form onSubmit={this.addingItem}>
            <input type="text" placeholder="Enter Text" value={this.state.currentItems.text} onChange={this.handleInput}/>
            <button type="submit">Submit</button>
            </form>
        </header>
        <Litems notes={this.state.items}/>
      </div>
    );
  }
}


export default App;
