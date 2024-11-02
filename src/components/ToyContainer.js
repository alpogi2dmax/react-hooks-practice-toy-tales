import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDeleteToy, onAddLikes }) {

  return (
    <div id="toy-collection">
      {toys.map(toy =>
        <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onAddLikes={onAddLikes}/>
      )}
    </div>
  );
}

export default ToyContainer;
