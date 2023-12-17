import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const contacts = [{ img: "/Discord.png", alt: "disord icon", href: "https://discordapp.com/users/989012739945033769", text: "cahodev" },
{ img: "/Email.png", alt: "email icon", href: "mailto: christian.herrera.onaindi@gmail.com", text: "christian.herrera.onaindi@gmail.com" },
{ img: "/Linkedin.png", alt: "linkedin icon", href: "https://www.linkedin.com/in/cahodev/", text: "@cahodev" }
]

export default function Contact(props) {
  const { contactPage } = props
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className="text-[#C778DD]">{(contactPage) ? "/" : "#"}</span>
              <span className="text-white">contacto</span>
            </div>
            {(!contactPage) && <div className=" w-40 h-[1px] bg-[#C778DD] max-md:hidden"></div>}
          </div>
        </div>
        <div>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <div className="text-[#ABB2BF] font-normal text-base flex flex-col gap-7">
              <p>
  ¡Contáctame para consultas, oportunidades laborales o colaboración en proyectos!
</p>
<p>
  Si buscas a un desarrollador backend apasionado y habilidoso para unir fuerzas en tu equipo o colaborar en un proyecto, no dudes en comunicarte. ¡Trabajemos juntos para crear experiencias digitales innovadoras e impactantes!
</p>

              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className="flex justify-end max-md:justify-start">
                <div className="border border-[#ABB2BF] p-4 flex flex-col gap-3 max-sm:w-full">
                  <p className="text-white font-semibold text-base">Message me here</p>
                  {
                    contacts?.map((item, idx) => {
                      return (
                        <div key={idx + item?.href} className="flex gap-1 items-center">
                          <Image
                            src={item?.img}
                            height={32}
                            width={32}
                            alt={item?.alt}
                          />
                          <Link target="_blank" href={item?.href}><span className="text-[#ABB2BF] text-base font-normal">{item?.text}</span></Link>
                        </div>
                      )
                    })
                  }


                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
