import { Grid } from "@mui/material";

export default function SkillsCards(props) {
  const { skills } = props;

  return (
    <Grid container spacing={2}>
      {skills.map((section, sectionIndex) => (
        <Grid key={sectionIndex + "section"} item xs={12} md={4} lg={4}>
          <div className="flex flex-col gap-4">
            {section.map((skillCategory, categoryIndex) => (
              <div key={categoryIndex + "category"} className="border border-[#ABB2BF]">
                <div className="">
                  <p className="text-white text-base font-semibold p-2 border-b border-[#ABB2BF]">
                    {skillCategory.name}
                  </p>
                </div>
                <div className="p-2 text-[#ABB2BF] text-base font-normal">
                  <ul>
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <li key={skillIndex + "skill"}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
