import DisplayCount from "./components/DisplayCount";
import { useState } from "react";
import { countContext } from "./Context";
import Picture from "./components/picture/Picture";
import Button from "./components/picture/Button";
import cat from "./images/cat.jpg"
import dog from "./images/dog.jpg"
import rabbit from "./images/rabbit.jpg"

function App() {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);
  const [name, setName] = useState("animal")
  const [obj, setObj] = useState("an ");

  const vowels = ["a", "e", "i", "o", "u"];

  const pics = [
    {id: 1, label:"cat", src: cat}, 
    {id: 2, label:"dog", src: dog}, 
    {id: 3, label:"rabbit", src: rabbit}
  ];

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const changeID = (e) => {
    
    vowels.forEach((v) => {
      if (name[0] === v) {
        setObj("an ");
      } else {
        setObj("a ");
      }
    })

    setId(e.currentTarget.id);
    setName(e.currentTarget.getAttribute("data-animal"));
    console.log(e.currentTarget.getAttribute('data-animal'));
    console.log(e.currentTarget.id);
  };

  return (
    <div>
      <countContext.Provider value={{count, setCount, decreaseCount}}>
        <DisplayCount />
      </countContext.Provider>

      <div style={{display:"flex", justifyContent:"center", gap:"5px"}}>
        {
          pics.map((pic, i) => (
            <div key={i}>
              <Picture key={i} src={pic.src}>
                <Button data_animal={pic.label} label={pic.label} changeID={changeID} id={pic.id} />
              </Picture>
            </div>
          ))
        }
      </div>
      <p>
          Current picture selected is: Picture {id}, which is {obj} {name}.
      </p>
    </div>
  );
}

export default App;
