import React from 'react'
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";

import DummyBubble from "../../DummyBubble.jsx";

const Test = () => {

  const dummyBubbleLayoutOptions = {
    size: 80,
    minSize: 10,
    gutter: 8,
    provideProps: false,
    numCols: 5,
    fringeWidth: 80,
    yRadius: 100,
    xRadius: 100,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };

  const dummyColors = ["#F79256", "#FBD1A2", "#7DCFB6", "#00B2CA", "#1D4E89"];

  const getDummyBubbles = () => {
    let out = [];
    for (var i = 0; i < 30; i++) {
      out.push(
        <DummyBubble color={dummyColors[i % dummyColors.length]} key={i} />
      );
    }
    return out;
  };

  const dummyBubbles = getDummyBubbles();

  let dummyOptions1 = {};
        Object.assign(dummyOptions1, dummyBubbleLayoutOptions);

  <BubbleUI
  className="comparisonBubbleUI"
  options={dummyOptions1}
>
  {dummyBubbles}
</BubbleUI>
}


export default Test
