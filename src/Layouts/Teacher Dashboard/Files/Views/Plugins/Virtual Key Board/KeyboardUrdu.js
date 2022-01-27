import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css"
import layout from "simple-keyboard-layouts/build/layouts/urdu";
import "./Keyboard.css"


function KeyboardUrdu() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = input => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div>
      <input style={{width: "100%",
      height: "100px",
      padding: "20px",
      fontSize: "20px",
      border:"none",
      boxSizing: "border-box"}}
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <div style={{maxWidth: "850px"}}> 
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout = {{
          default: [
              "` \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}",
              "{tab} \u0642 \uFEED \u0639 \u0631 \u062A \u06D2 \u0621 \u0649 \uFBA6 \u067E [ ]",
              "{lock} \u0627 \u0633 \u062F \u0641 \u06AF \u06BE \u062C \u06A9 \u0644 \u061B \u060C {enter}",
              "{shift} \u0632 \u0634 \u0686 \u0637 \u0628 \u0646 \u0645 \u06E4 , . / {shift}",
              ".com @ {space}",
          ],
          shift: [
              "~ ! @ # $ \u066A ^ & * ( ) _ + {bksp}",
              "{tab} \uFE70 \uFE77 \uFE79 \u0691 \u0679 \uFE7A \uFEFB \uFE8B \u0629 | { }",
              "{lock} \u0622 \u0635 \u0688 \u060D \u063A \u062D \u0636 \u062E \u06D4 \u0703 \u05f4 {enter}",
              "{shift} \u0630 \u0698 \u062B \u0638 \u06BA \u066b \u0640 < > \u061F {shift}",
              ".com @ {space}",
          ],
      }}
      />
      </div>
    </div>
  );
}


export default KeyboardUrdu