import React from "react";
import Card from './Card';

function App() {
    return <div>
<h1 className = "headingStyle">Todo App</h1>
        
        <Card titleText="hello" descText = "hi"  />
        <Card titleText="hello2" descText = "hi2"  />
        <Card titleText="hello3" descText = "hi3"  />
        
    </div>

}
export default App;