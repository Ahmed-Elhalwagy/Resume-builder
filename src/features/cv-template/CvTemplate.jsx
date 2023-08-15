import { useData } from "../../DataContext";
import {
  UilPhone,
  UilEnvelope,
  UilLinkedin,
  UilGithub,
} from "@iconscout/react-unicons";
function CvTemplate() {
  const { state } = useData();
  const { basic, summary, skills, education, workExperience } = state;
  return (
    <div className="h-max w-full">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">
          {basic.name ? basic.name : "Your Name"}
        </h1>
        <p className="mb-2 text-xl text-gray-600">
          {basic.title ? basic.title : "Title"}
        </p>
        <p className="text-lg text-gray-500">Contact Information</p>
        <div className="p-x-3 mt-3 flex justify-center gap-8">
          <p className="flex items-center gap-2">
            <span>
              <UilEnvelope />
            </span>
            {basic.email ? basic.email : "Email Address"}
          </p>
          <p className="flex items-center gap-2">
            <span>
              <UilPhone />
            </span>
            {basic.phone ? basic.phone : "Phone Number"}
          </p>
          {basic.linkedin && (
            <a
              className="flex items-center gap-2"
              href={basic.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <UilLinkedin />
              </span>
              Linkedin
            </a>
          )}

          {basic.github && (
            <a
              className="flex items-center gap-2"
              href={basic.github}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <UilGithub />
              </span>
              Github
            </a>
          )}
        </div>
      </div>

      <hr className="my-6" />

      <div className="mb-6 flex flex-col">
        <h2 className="mb-2 text-lg font-bold">Summary</h2>
        <p className="text-gray-700">{summary ? summary : "Your summary"}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-lg font-bold">Experience</h2>
        <div>
          {workExperience.map((ex) => {
            return (
              <div key={ex.id}>
                <h3 className="text-md mb-1 font-bold">{ex.title}</h3>
                <h4 className="text-md mb-1 font-bold">{ex.companyName}</h4>

                <p className="mb-1 font-semibold text-gray-700">
                  {ex.location}
                </p>
                <p className="mb-1 text-gray-600">
                  {ex.startDate} - {ex.endDate}
                </p>
                <p className="list-inside list-disc text-gray-700">
                  {ex.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-lg font-bold">Education</h2>
        <div>
          {education.map((ex) => {
            return (
              <>
                <h3 className="text-md mb-1 font-bold">{ex.degree}</h3>
                <h4 className="text-md mb-1 font-bold">{ex.school}</h4>

                <p className="mb-1 font-semibold text-gray-700">
                  {ex.city}/{ex.country}
                </p>
                <p className="mb-1 text-gray-600">
                  {ex.startDate} /{ex.endDate}
                </p>
              </>
            );
          })}
        </div>
      </div>

      <div className="my-6">
        <h2 className="mb-2 text-lg font-bold">Skills</h2>
        <ul className="list-inside list-disc text-gray-700">
          {skills.length === 0 && <li>List your skill</li>}
          {skills.map((skill, i) => {
            return <li key={i}>{skill.skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default CvTemplate;
