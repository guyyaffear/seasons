import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props);

        // This is the only time we do dircet assignment
        this.state ={ lat: null };
         window.navigator.geolocation.getCurrentPosition(
        position =>{
            // setState update the state
            this.setState({lat: position.coords.latitude})
        },
        err => console.log(err)
         )
    }


   render(){
      
    return <div>Latitude: {this.state.lat} </div> 
   }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)