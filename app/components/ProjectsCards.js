import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
const borderGray = "1px solid #ABB2BF"
const borderPurple = "1px solid #C778DD"



export default function ProjectsCards(props) {
  const { data } = props

  return (
    <Grid container spacing={2} justifyContent="space-between" alignItems="stretch" >

      {
        data?.map((item, idx) => {
          return (
            <Grid key={idx + "gg"} item xs={12} md={6} lg={4} >
              <Card sx={{ border: borderGray, borderRadius: 0, height: "100%", backgroundColor: "#282c33" }}>
                {(item?.thumbnail) && <CardMedia
                  sx={{ height: 160 }}
                  image={item?.thumbnail}
                  title={item?.name}
                />}
                <CardContent sx={{ border: borderGray, padding: 0, margin: 0, height: "100%" }}>
                  <div className="border-t border-b border-[#ABB2BF] text-[#ABB2BF] text-base p-1" >
                    {item?.techStack}
                  </div>
                  <div className="p-1">
                    <p className=" text-2xl font-normal text-white p-2">{item?.name}</p>
                    <p className="text-[#ABB2BF] text-base font-normal px-2">{item?.title}</p>
                  </div>
                  <div className="flex p-2 gap-4">
                    {(item?.liveUrl) && <Button target="_blank" href={item.liveUrl} className=" hover:text-[#ABB2BF]" sx={{ border: borderPurple, color: "#fff", paddingX: "16px", paddingY: "8px", borderRadius: 0 }} size="small">Live &nbsp; &lt;~&gt;</Button>}
                    {(item?.github) && <Button target="_blank" href={item?.github} className=" hover:text-[#ABB2BF]" sx={{ border: borderPurple, color: "#fff", paddingX: "16px", paddingY: "8px", borderRadius: 0 }} size="small">Github &nbsp; &#8804;</Button>}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  )
}
