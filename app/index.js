import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*Components have a couple of thngs
1) State
2) Lifecycle
3) UI

This becomes an issue when you begin to think about how you are mixing JS with HTML. 

This is because the code below is technically JSX and composed using Babel. Remember babel is responsible for compiling code that 
is easy to read for the programmer into code that is usable by the module, in this case react and react-dom
*/

//So this
class App extends React.Component {
  render(){
    return (
      <div>
        Hello World!
      </div>
      )
  }
}

//Is the same as this because of how babel compiles the jsx 
// class App extends React.Component {
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello World!"
//       )
//   }
// }


//So we just created a component that has a reactElement that says hello world be we still need to render it to the screen.
//To do this we need to call ReatDOM.render method.


ReactDOM.render(

  //This method takes two things
    //1) The React Element
    //2) The place it needs to be rendered to

    <App />, 
    document.getElementById('app')
)