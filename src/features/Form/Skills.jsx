import { useState } from "react";
import SaveButton from "./Button";
import SkillTemplate from "./SkillTemplate";
import { useData } from "../../DataContext";
import { v4 as uuidv4 } from "uuid";

function Projects() {
  const [counter, setCounter] = useState(1);
  const { dispatch, state } = useData();

  function handelInc(e) {
    e.preventDefault();
    setCounter((counter) => (counter = counter + 1));
  }

  function renderSkills() {
    const skills = [];
    for (let i = 1; i <= counter; i++) {
      skills.push(<SkillTemplate key={i} number={i} />);
    }
    return skills;
  }

  function handelSave(e) {
    e.preventDefault();
    for (let i = 0; i < counter; i++) {
      dispatch({
        type: "SET_SKILLS",
        payload: { skill: e.target[i].value, id: uuidv4() },
      });
    }
  }

  function handelDeleteSkill(e, id) {
    e.preventDefault();
    dispatch({ type: "REMOVE_SKILL", payload: id });
  }

  return (
    <div className="relative h-full w-full">
      <form
        className="flex h-full flex-col justify-center space-y-12 p-12"
        onSubmit={handelSave}
      >
        <div className="relative flex w-fit flex-wrap gap-3 sm:px-4 md:px-12">
          {state.skills.map((skill, i) => {
            return (
              <p
                key={skill.id}
                className="flex justify-between gap-3 rounded-xl bg-indigo-500 p-3 font-medium text-stone-200"
              >
                Skill {i + 1}
                <span
                  className="cursor-pointer font-bold text-stone-200"
                  onClick={(e) => handelDeleteSkill(e, skill.id)}
                >
                  &#x2715;
                </span>
              </p>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-8 sm:px-4 md:px-12 ">
          {renderSkills()}
          <button
            className="rounded-md bg-indigo-500 p-3 text-lg font-medium text-stone-200"
            onClick={(e) => handelInc(e)}
          >
            Add Skill
          </button>
          <span>
            <SaveButton>Save</SaveButton>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Projects;
