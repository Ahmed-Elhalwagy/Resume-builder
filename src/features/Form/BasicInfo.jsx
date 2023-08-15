import { useData } from "../../DataContext";
import SaveButton from "./Button";

function BasicInfo() {
  const { dispatch, state } = useData();
  const { basic } = state;

  function handelSave(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const title = e.target[1].value;
    const linkedin = e.target[2].value;
    const github = e.target[3].value;
    const email = e.target[4].value;
    const phone = e.target[5].value;

    dispatch({
      type: "SET_BASIC",
      payload: {
        name,
        title,
        linkedin,
        github,
        email,
        phone,
      },
    });
  }

  return (
    <div className="relative h-full w-full">
      <form
        className="flex h-full flex-col justify-center space-y-12 p-12"
        onSubmit={handelSave}
      >
        <div className="flex justify-between gap-8 sm:px-4 md:px-12 ">
          <div className="flex w-1/2 flex-col space-y-2">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              defaultValue={basic.name}
              required
              id="name"
              placeholder="Enter Your name"
              className="input"
              type="text"
            />
          </div>
          <div className="flex w-1/2 flex-col space-y-2">
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              defaultValue={basic.title}
              required
              placeholder="Your Job Title"
              className="input"
              type="text"
              id="title"
            />
          </div>
        </div>
        <div className="flex justify-between gap-12 px-12">
          <div className="flex w-1/2 flex-col space-y-2">
            <label className="label" htmlFor="linkedin">
              Linkedin (optional)
            </label>
            <input
              defaultValue={basic.linkedin}
              id="linkedin"
              placeholder="Linkedin Account"
              className="input"
              type="url"
            />
          </div>
          <div className="flex w-1/2 flex-col space-y-2">
            <label className="label" htmlFor="github">
              Github (optional)
            </label>
            <input
              defaultValue={basic.github}
              placeholder="Github Account"
              className="input"
              type="url"
              id="github"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-12 px-12">
          <div className="flex justify-between gap-12">
            <div className="flex w-1/2 flex-col space-y-2">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                defaultValue={basic.email}
                required
                id="email"
                placeholder="Email"
                className="input"
                type="email"
              />
            </div>
            <div className="flex w-1/2 flex-col space-y-2">
              <label className="label" htmlFor="phone">
                phone
              </label>
              <input
                defaultValue={basic.phone}
                required
                placeholder="Phone Number"
                className="input"
                type="tel"
                id="phone"
              />
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

export default BasicInfo;
