import './App.css';
import {useState} from "react";
function App(){
  const [items,setItems] = useState(0);

    setInterval(() => {
      fetch("https://api.github.com/")
      .then(res => res.json())
      .then(json => {
        let items =[];
        for(let i in json){
          items.push({
            key:i,
            value:json[i]
          })
        }
        setItems(items)
      })
    }, 1);
    
  return  <div className="App" role="dls">
        {
           (items!==0) && items.map(item => <dl role="dl">
             <dt>{item.key}</dt>
             <dd>{item.value}</dd>
           </dl>)
         }
      </div>
  
}

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       items:[]
//     }
//   }
//   componentDidMount(){
//     let me = this;
//     setInterval(() => {
//       fetch("https://api.github.com/")
//       .then(res => res.json())
//       .then(json => {
//         let items =[];
//         for(let i in json){
//           items.push({
//             key:i,
//             value:json[i]
//           })
//         }
//         me.setState({items:items})
//       })
//     }, 5000);
    
//   }
//   render(){
//     let {items} = this.state;
    
//     return (
//       <div className="App" role="dls">
//         {
//           items.map(item => <dl role="dl">
//             <dt>{item.key}</dt>
//             <dd>{item.value}</dd>
//           </dl>)
//         }
//       </div>
//     );
//   }
  
// }

export default App;
