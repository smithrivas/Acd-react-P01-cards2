import { useState } from "react";
import "./App.css";
import phrase from "./data/data.json";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const themes = [
    ["image1.jpg", "rgb(18, 20, 53)"],
    ["image2.jpg", "rgb(85, 44, 15)"],
    ["image3.jpg", "rgb(27, 22, 67)"],
    ["image4.jpg", "rgb(115, 16, 16)"],
  ];
  const [index, setIndex] = useState(Math.floor(Math.random() * phrase.length));
  const [indexTheme, setIndexTheme] = useState(
    Math.floor(Math.random() * themes.length)
  );

  let themeSel = themes[Number(indexTheme)][0];
  let colorSel = themes[Number(indexTheme)][1];
  document.body.style = `background-image: url(public/img/${themeSel}); color: ${colorSel}`;

  function changePhrase() {
    setIndex(Math.floor(Math.random() * phrase.length));
    setIndexTheme(Math.floor(Math.random() * themes.length));
    let themeSel = themes[Number(indexTheme)][0];
    let colorSel = themes[Number(indexTheme)][1];
    document.body.style = `background-image: url(public/img/${themeSel}); color: ${colorSel}`;
  }

  return (
    <div className="App">
      <Card phrase={phrase[index]} changePhrase={changePhrase} />
    </div>
  );
}

export default App;
