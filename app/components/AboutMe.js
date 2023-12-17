import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe(props) {
  const { aboutPage } = props
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className="text-[#C778DD]">{(aboutPage) ? "/" : "#"}</span>
              <span className="text-white">sobre mi</span>
              {(aboutPage) && <div className="text-white  font-normal text-base my-4">Who am i?</div>}
            </div>
            {(!aboutPage) && <div className=" w-80 h-[1px] bg-[#C778DD] max-md:hidden"></div>}
          </div>
        </div>
        <div>
          <Grid
            container
            spacing={4}
          >
            <Grid item xs={12} md={6} lg={6}>
              <div className="text-[#ABB2BF] font-normal text-base flex flex-col gap-7">
                <p>¡Hola! Soy Christian :)</p>
                <p>
                Un desarrollador backend autodidacta. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades continuamente.
                </p>
                <p>
                Mi actitud proactiva y capacidad para aprender rápidamente me han
permitido destacar en proyectos, contribuyendo al desarrollo de funciones esenciales. Estoy
entusiasmado por continuar mi crecimiento profesional.
                </p>
                {(!aboutPage) && <div>
                  {/* <button className="text-white py-2 px-4 border border-[#C778DD] hover:text-[#ABB2BF]">
                    <Link href={"/about"}>Read more -&gt;</Link>
                  </button> */}
                </div>}
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className="flex items-end justify-end">
                <Image
                  src={"/about-me.png"}
                  height={500}
                  width={343}
                  alt="about-christian"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
