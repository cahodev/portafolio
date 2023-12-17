import Projects from "../components/Projects";
import ProjectsCards from "../components/ProjectsCards";
const data = [{ name: "URL Shortener API", techStack: "Javascript, Express.js, MongoDB", github: "https://github.com/cahov/url-shortener-mongodb-api" },
{ name: "TaskList", techStack: "Javascript, Express.js, HandleBars, Boostrap, MongoDB", github: "https://github.com/cahov/node-express-tasklist-mongodb" },
{ name: "API Palabras Aleatorias", techStack: "Javascript, Express.js", github: "https://github.com/cahov/api-palabras-aleatorias" }
]

export default function Work() {

  return (
    <>
      <Projects workPage={true} />
      <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5 text-3xl font-medium">
        <span className='text-[#C778DD]'>#</span><span className="text-white">small-projects</span>
        <div className="mt-10">
          <ProjectsCards data={data} />
        </div>
      </div>
    </>
  )
}
