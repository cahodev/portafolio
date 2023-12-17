import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import SoftSkills from "../components/SoftSkills";



export default function About() {
  return (
    <>
      <AboutMe aboutPage={true} />
      <Skills aboutPage={true} />
      <SoftSkills />
    </>
  )
}
