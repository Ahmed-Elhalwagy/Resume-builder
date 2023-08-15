/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
  basic: {},
  education: [],
  workExperience: [],
  skills: [],
  summary: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_BASIC":
      return {
        ...state,
        basic: action.payload,
      };
    case "SET_SUMMARY":
      return {
        ...state,
        summary: action.payload,
      };
    case "SET_SKILLS":
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    case "REMOVE_SKILL":
      return {
        ...state,
        skills: [...state.skills].filter(
          (skill) => skill.id !== action.payload,
        ),
      };
    case "SET_EDUCATION":
      return {
        ...state,
        education: [
          ...state.education,
          {
            degree: action.payload.degree,
            school: action.payload.school,
            city: action.payload.city,
            country: action.payload.country,
            startDate: action.payload.startDate,
            endDate: action.payload.endDate,
          },
        ],
      };

    case "REMOVE_EDUCATION":
      return {
        ...state,
        education: [...state.education].filter(
          (item) => item.id !== action.payload,
        ),
      };

    case "SET_WORK":
      return {
        ...state,
        workExperience: [
          ...state.workExperience,
          {
            title: action.payload.title,
            companyName: action.payload.companyName,
            location: action.payload.location,
            startDate: action.payload.startDate,
            endDate: action.payload.endDate,
            description: action.payload.description,
          },
        ],
      };
    case "REMOVE_WORK":
      return {
        ...state,
        workExperience: [...state.workExperience].filter(
          (item) => item.id !== action.payload,
        ),
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("The DataContext is used outside the DataProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DataProvider, useData };
