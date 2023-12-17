import Link from "next/link";
import ProjectsCards from "./ProjectsCards";
const data = [{ name: "EcoSubasta", techStack: "TypeScript, NestJs, JWT, MongoDB, Prisma ORM, Stripe, Swagger", github: "https://github.com/No-Country/s11-02-m-node-react", thumbnail: 'https://i.ibb.co/PxF3nny/Eco-Subasta.png', title: "Subastas programadas para artículos usados" },
{ name: "Unión Solidaria", techStack: "TypeScript, NestJs, JWT, MongoDB, Prisma ORM, , Swagger", github: "https://github.com/No-Country/s10-13-m-express-next", thumbnail: "https://camo.githubusercontent.com/f621acb23276839f3ad1cf4d218f4a8fc36409c1e778ded4aef73c610d2061b7/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647064746a6f7969332f696d6167652f75706c6f61642f76313639343731363932312f756e696f6e2d736f6c6964617269612f636170315f7076706d656b2e706e67", title: "Un portal colaborativo para voluntarios y organizaciones" },
{ name: "LatamWallet", techStack: "Javascript, Express.js, JWT, MongoDB, Prisma ORM, Stripe, BlockChain, BSC, Swagger", github: "https://github.com/No-Country/c12-26-m-node-react", thumbnail: "https://camo.githubusercontent.com/898de5fba365334c76400389903b0277273671e5f6cdb86d932330c719713c14/68747470733a2f2f692e6962622e636f2f723279665836702f4c6f672d696e2d706167652e706e67", title: "Una billetera digital respaldada por USDT para pagos en Latinoamérica" }
]

export default function Projects(props) {
  const { workPage } = props
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className='text-[#C778DD]'>{(workPage) ? "/" : "#"}</span><span className="text-white">projects</span>
            </div>
            {(!workPage) && <div className=" w-80 h-[1px] bg-[#C778DD] max-md:hidden">
            </div>}
          </div>
          {(!workPage) && <div>
            <Link href={"/work"}><p className=" cursor-pointer hover:text-[#ABB2BF] text-base font-medium text-white">Ver todos ~~&gt;</p></Link>
          </div>}

        </div>
        {
          (workPage) && <div className="text-white  font-normal text-base mb-4">Lista de mis proyectos</div>
        }
        {(workPage) && <div className="text-3xl font-medium">
          <span className='text-[#C778DD]'>#</span><span className="text-white">proyectos-completados</span>
        </div>}
        <div>
          <ProjectsCards data={data} />
        </div>
      </div>
    </div>
  )
}
