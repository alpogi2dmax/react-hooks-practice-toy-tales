import React, { useState } from "react";

function ToyCard({toy, onDeleteToy, onAddLikes}) {

  const { id, name, image, likes } = toy
  const [newLikes, setNewLikes] = useState(likes)

  function handleDeleteClick() {
    onDeleteToy(id)
  }

  function handleLikeClick(e) {
    let toyObj = {
      id: id,
      likes: parseInt(e.target.value)+1
    }
    onAddLikes(toyObj)
    setNewLikes(parseInt(e.target.value)+1)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" value={newLikes} onClick={handleLikeClick}>Like {newLikes}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
