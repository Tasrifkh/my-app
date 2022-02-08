import React from "react";
import Card from './Card';
import Data from '../Data.json'

function App() {

    let items = [];
    items = Data.map((item,index) => <Card key = {index} titleText={item.title} descText = {item.desc} />);
    // for (let x= 0; x< Data.length; x++){
    //     items.push( <Card titleText={Data[x].title} descText = {Data[x].desc}/>)
    // }
    return <div>
      <h1 className = "headingStyle">Todo App</h1>
      {items}

    </div>

}
export default App;