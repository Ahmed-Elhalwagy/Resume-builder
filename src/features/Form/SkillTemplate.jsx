import { useState } from "react";

// eslint-disable-next-line react/prop-types
function SkillTemplate({ number }) {
  const [skill, setskill] = useState("");

  return (
    <div className="flex w-full flex-col space-y-2">
      <label className="label" htmlFor={`skill-${number}`}>
        Skill {number}
      </label>
      <input
        value={skill}
        onChange={(e) => setskill(e.target.value)}
        id={`skill-${number}`}
        placeholder="Enter Your Skill"
        className="input"
        type="text"
      />
    </div>
  );
}

export default SkillTemplate;
