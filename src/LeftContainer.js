import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";
import { useState } from "react";

const LABEL_TEXT = [
  "Apply to work with our agency",
  "What's your budget?",
  "Anything else we should know?",
  "Thank you!"
];

export default function LeftContainer({ stage, setStage }) {
  const [email, setEmail] = useState("");
  const [buttoneSelect, setButtoneSelect] = useState("");
  const [details, setDetails] = useState("");

  let content;
  if (stage === 0) {
    content = (
      <TextInput updateValue={setEmail} placeholder="What's your email?" />
    );
  } else if (stage === 1) {
    content = <ButtonGroup updateValue={setButtoneSelect} />;
  } else if (stage === 2) {
    content = <TextInput updateValue={setDetails} />;
  } else if (stage === 3) {
    alert(JSON.stringify({ email, buttoneSelect, details }));
  }
  return (
    <div className="left-container">
      <div className="inner-left-container">
        <h2>{LABEL_TEXT[stage]}</h2>
        {content}
        {stage !== 3 && (
          <button onClick={() => setStage(stage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}
