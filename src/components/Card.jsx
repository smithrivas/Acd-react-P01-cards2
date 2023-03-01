import React from "react";
import Button from "./Button";
import style from "./style.css";

const Card = ({ phrase, changePhrase }) => {
  return (
    <div className="content">
      <div>
        <h1 className="title">infogalax</h1>
        <div className="card">
          <h3 className="card-phrase">{phrase.phrase}</h3>
        </div>
        <div className="button">
          <Button click={changePhrase} />
        </div>
      </div>
      <div className="author">
        <p>Fuente: {phrase.author}</p>
      </div>
    </div>
  );
};

export default Card;
