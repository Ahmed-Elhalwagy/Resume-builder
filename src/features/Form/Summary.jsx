import { useData } from "../../DataContext";
import SaveButton from "./Button";

function Summary() {
  const { state, dispatch } = useData();

  function handelSave(e) {
    e.preventDefault();
    const summryValue = e.target[0].value;
    dispatch({ type: "SET_SUMMARY", payload: summryValue });
  }

  return (
    <div className="relative h-full w-full">
      <form
        className="flex h-full flex-col justify-center space-y-12 p-12"
        onSubmit={handelSave}
      >
        <div className="flex flex-wrap justify-between gap-5 sm:px-4 md:px-12">
          <div className="flex w-full flex-col space-y-2">
            <label htmlFor="summary" className="label">
              Summary
            </label>
            <textarea
              id="summary"
              className="input"
              defaultValue={state.summary}
            />
          </div>
          <span>
            <SaveButton>Save</SaveButton>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Summary;
