import { useData } from "../../DataContext";
import SaveButton from "./Button";
import { v4 as uuidv4 } from "uuid";

function Education() {
  const { dispatch, state } = useData();

  function handelSave(e) {
    e.preventDefault();
    const degree = e.target[0].value;
    const school = e.target[1].value;
    const city = e.target[2].value;
    const country = e.target[3].value;
    const startDate = e.target[4].value;
    const endDate = e.target[5].value;

    dispatch({
      type: "SET_EDUCATION",
      payload: {
        id: uuidv4(),
        degree,
        school,
        city,
        country,
        startDate,
        endDate,
      },
    });
  }

  function handelDeleteEducation(e, id) {
    e.preventDefault();

    dispatch({ type: "REMOVE_EDUCATION", id });
  }

  return (
    <div className="relative h-full w-full">
      <form
        className="flex h-full flex-col justify-center space-y-12 p-12"
        onSubmit={handelSave}
      >
        <div className="relative flex w-fit flex-wrap gap-3 sm:px-4 md:px-12">
          {state.education.map((education, i) => {
            return (
              <p
                key={education.id}
                className="flex justify-between gap-3 rounded-xl bg-indigo-500 p-3 font-medium text-stone-200"
              >
                Education {i + 1}
                <span
                  className="cursor-pointer font-bold text-stone-200"
                  onClick={(e) => handelDeleteEducation(e, education.id)}
                >
                  &#x2715;
                </span>
              </p>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-between gap-8 sm:px-4 md:px-12">
          <div className="flex w-full flex-col space-y-2">
            <label className="label">Degree</label>
            <input
              placeholder="Enter Drgree/ Field of Study"
              className="input"
              type="text"
            />
          </div>
          <div className="flex w-full flex-col space-y-2">
            <label className="label">School</label>
            <input
              placeholder="Enter School/ University"
              className="input"
              type="text"
            />
          </div>
          <div className="flex w-full justify-between gap-8">
            <div className="flex w-1/2 flex-col space-y-2">
              <label className="label">City</label>
              <input placeholder="City" className="input" type="text" />
            </div>
            <div className="flex w-1/2 flex-col space-y-2">
              <label className="label">Country</label>
              <input placeholder="Country" className="input" type="text" />
            </div>
          </div>
          <div className="flex w-full justify-between gap-8">
            <div className="flex w-1/2 flex-col space-y-2">
              <label className="label">Start Date</label>
              <input className="input" type="date" />
            </div>
            <div className="flex w-1/2 flex-col space-y-2">
              <label className="label">End Date</label>
              <input placeholder="End Date" className="input" type="date" />
            </div>
          </div>
          <span>
            <SaveButton>Save</SaveButton>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Education;
