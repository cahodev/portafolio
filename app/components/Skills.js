import { Grid } from "@mui/material";
import Image from "next/image";
import SkillsCards from "./SkillsCards";
const skills = [
  [{ name: "Languages", skills: ["NodeJs", "JavaScript", "TypeScript"] }],
  [{ name: "Frameworks", skills: ["Express.Js", "NestJS"] },
  { name: "Databases", skills: ["MongoDB", "Mysql", "PostgreSQL"] }],
  [{ name: "Others", skills: ["Prisma ORM", "Stripe", "TypeORM", "Sequelize", "Swagger"] }, { name: "Tools", skills: ["Git", "Postman", "Trello"] }],
]

export default function Skills(props) {
  const { aboutPage } = props
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className='text-[#C778DD]'>#</span><span className="text-white">skills</span>
            </div>
            {(!aboutPage) && <div className=" w-52 h-[1px] bg-[#C778DD] max-md:hidden">
            </div>}
          </div>
        </div>
        <div>
          {(aboutPage) ? <SkillsCards skills={skills} /> :
            <Grid container spacing={8} justifyContent="center" alignItems="center">
              <Grid item xs={12} md={4} lg={4} className=" max-md:hidden" >
                <Image
                  src={"/skills.png"}
                  width={500}
                  height={500}
                  alt="skills"
                />
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <SkillsCards skills={skills} />
              </Grid>
            </Grid>}
        </div>
      </div>
    </div>
  )
}
