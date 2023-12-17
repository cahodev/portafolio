import { Grid } from "@mui/material";
import Image from "next/image";
const softSkill = [
  {
    "heading": "Comunicación Técnica",
    "text": "Explicación clara de conceptos técnicos y soluciones a equipos multidisciplinarios."
  },
  {
    "heading": "Resolución de Problemas",
    "text": "Encuentro soluciones eficientes para desafíos de desarrollo y optimización de sistemas."
  },
  {
    "heading": "Pensamiento Analítico",
    "text": "Analizo y evalúo opciones para implementar soluciones backend robustas y escalables."
  },
  {
    "heading": "Trabajo en Equipo",
    "text": "Colaboro con otros desarrolladores y equipos para alcanzar objetivos comunes."
  },
  {
    "heading": "Adaptabilidad",
    "text": "Me adapto rápidamente a nuevas tecnologías y metodologías para mejorar el rendimiento."
  },
  {
    "heading": "Gestión del Tiempo",
    "text": "Planificación efectiva para cumplir con plazos y mantener la eficiencia en el desarrollo."
  },
  {
    "heading": "Empatía Tecnológica",
    "text": "Considero el impacto tecnológico en los usuarios finales y en la eficiencia del sistema."
  },
  {
    "heading": "Creatividad en la Arquitectura",
    "text": "Diseño soluciones innovadoras en la arquitectura de sistemas backend."
  },
  {
    "heading": "Atención a Detalles de Implementación",
    "text": "Garantizo implementaciones de código backend precisas, eficientes y seguras."
  },
  {
    "heading": "Autodisciplina",
    "text": "La motivación interna impulsa un código backend de alta calidad y rendimiento."
  }
]




export default function SoftSkills() {
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className="text-[#C778DD]">#</span>
              <span className="text-white">soft-skills</span>
            </div>
          </div>
        </div>
        <div>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={12} lg={12}>
              <Grid container item spacing={2} >
                {
                  softSkill?.map((item) => {
                    return (
                      <Grid key={item.heading} item xs={12} md={6} lg={4}>
                        <div className="border border-[#ABB2BF] p-2 text-base font-normal`">
                          <span className="text-white ">{item?.heading}</span>
                          <span className="text-[#ABB2BF]"> {item?.text}</span>
                        </div>
                      </Grid>
                    )
                  })
                }

              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div >
  )
}
