import { useData } from "../../DataContext";
import SaveButton from "./Button";
import { v4 as uuidv4 } from "uuid";

function WorkExperince() {
  const { dispatch, state } = useData();

  function handelSave(e) {
    e.preventDefault();
    const title = e.target[0].value;
    const companyName = e.target[1].value;
    const location = e.target[3].value;
    const startDate = e.target[4].value;
    const endDate = e.target[4].value;
    const description = e.target[5].value;

    dispatch({
      type: "SET_WORK",
      payload: {
        id: uuidv4(),
        title,
        companyName,
        location,
        startDate,
        endDate,
        description,
      },
    });
  }

  function handelDeleteWork(e, id) {
    e.preventDefault();
    dispatch({ type: "REMOVE_WORK", payload: id });
  }
  return (
    <div className="relative h-full w-full">
      <form
        className="flex h-full flex-col justify-center space-y-12 p-12"
        onSubmit={handelSave}
      >
        <div className="relative flex w-fit flex-wrap gap-3 sm:px-4 md:px-12">
          {state.workExperience.map((work, i) => {
            return (
              <p
                key={work.id}
                className="flex justify-between gap-3 rounded-xl bg-indigo-500 p-3 font-medium text-stone-200"
              >
                Experince {i + 1}
                <span
                  className="cursor-pointer font-bold text-stone-200"
                  onClick={(e) => handelDeleteWork(e, work.id)}
                >
                  &#x2715;
                </span>
              </p>
            );
          })}
        </div>
        <div className="flex justify-between gap-8 sm:px-4 md:px-12 ">
          <div className="flex w-1/2 flex-col space-y-2">
            <label className="label">Title</label>
            <input placeholder="Title..." className="input" type="text" />
          </div>
          <div className="flex w-1/2 flex-col space-y-2">
            <label className="label">Company Name</label>
            <input placeholder="Company Name" className="input" type="text" />
          </div>
        </div>
        <div className="flex justify-between gap-12 sm:px-4 md:px-12">
          <div className="flex w-full flex-col space-y-2">
            <label className="label">Location</label>
            <input placeholder="Location" className="input" type="text" />
          </div>
        </div>
        <div className="flex justify-between gap-12 sm:px-4 md:px-12">
          <div className="flex w-1/2 flex-col space-y-2">
            <label className="label">start Date</label>
            <input
              placeholder="Enter your Email"
              className="input"
              type="date"
            />
          </div>
          <div className="flex w-1/2 flex-col space-y-2 ">
            <label className="text-md w-fit border-b-2 border-stone-700 pr-2 text-stone-900">
              End Date
            </label>
            <input
              placeholder="Enter Your phone Number"
              className="input"
              type="date"
            />
          </div>
        </div>
        <div className="flex flex-col sm:px-4 md:px-12">
          <label className="label">Job Description</label>
          <textarea className="input mt-2" placeholder="Description" />
          <span className="mt-5">
            <SaveButton>Save</SaveButton>
          </span>
        </div>
      </form>
    </div>
  );
}

export default WorkExperince;
