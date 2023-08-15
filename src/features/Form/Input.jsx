// eslint-disable-next-line react/prop-types
function Input({ name, type, placeholder }) {
  return (
    <div className="flex w-1/2 flex-col space-y-2">
      <label className="label" htmlFor={name}>
        {name}
      </label>
      <div className="relative flex items-center">
        <input placeholder={placeholder} className="input" type={type} />
        <span className="absolute right-2 cursor-pointer">&#x2716;</span>
      </div>
    </div>
  );
}

export default Input;
