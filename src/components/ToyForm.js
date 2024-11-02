import React, { useState } from "react";

function ToyForm({onAddToy}) {

  const [ name, setName ] = useState("")
  const [ image, setImage ] = useState("")

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleImageChange(event) {
    setImage(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault("")
    let toyObj = {
      name: name,
      image: image,
      likes: 0
    }
    onAddToy(toyObj)
    setName("")
    setImage("")
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
