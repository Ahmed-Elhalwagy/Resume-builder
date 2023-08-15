/* eslint-disable react/prop-types */
function SaveButton({ children, onClick = null }) {
  return (
    <button
      className="rounded-lg bg-indigo-500 px-8 py-3 text-lg font-medium text-stone-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SaveButton;
