import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [ toys, setToys ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then((r) => r.json())
      .then((data) => setToys(data))
  },[])

  const [showForm, setShowForm] = useState(false);




  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy)
    })
    .then((r) => r.json())
    .then((newItem) => setToys([...toys, newItem]))
  }

  function deleteToy(toyId) {
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => setToys(toys.filter(toy => toy.id !== toyId)))
  }

  function addLikes(toyObj) {
    fetch(`http://localhost:3001/toys/${toyObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: toyObj.likes
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => console.log(updatedItem))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={deleteToy} onAddLikes={addLikes}/>
    </>
  );
}

export default App;
