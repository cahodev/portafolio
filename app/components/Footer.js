import Image from "next/image";
import Link from "next/link";
const contacts = [{ img: "/Discord.png", alt: "disord icon", href: "https://discordapp.com/users/989012739945033769", text: "cahodev" },
{ img: "/Email.png", alt: "email icon", href: "mailto: christian.herrera.onaindi@gmail.com", text: "christian.herrera.onaindi@gmail.com" },
{ img: "/Linkedin.png", alt: "linkedin icon", href: "https://www.linkedin.com/in/cahodev/", text: "@cahodev" }
]

export default function Footer() {
  return (
    <footer className="border-t mt-32 border-white">
      <div className="ml-36 mr-32 mt-8 max-sm:ml-5 max-sm:mr-5">
        <div className="flex justify-between flex-wrap max-md:gap-2">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
              <Image height={16} width={16} alt="small logo" src={"/logo.png"} />
              <span className=" text-base text-white font-medium">cahodev</span>
              <Link target="_blank" href={"mailto: christian.herrera.onaindi@gmail.com"}><span className="text-[#ABB2BF] text-base font-normal">Email</span></Link>
            </div>
            <div className="text-white font-normal text-base">
              Desarrollador Back-end
            </div>
            <div className="text-white font-normal text-xs">
              <Link target="_blank" href={"https://www.figma.com/community/file/1164933568884615740/Portfolio"}>Design Credit ~ Elias from Figma community</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-white text-2xl font-medium">
              Social Media
            </div>
            <div className="flex gap-3 items-center">
              {
                contacts?.map((item, idx) => {
                  return (
                    <div key={idx + item?.href} >
                      <Link target="_blank" href={item?.href}><Image
                        src={item?.img}
                        height={32}
                        width={32}
                        alt={item?.alt}
                      />
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="my-7">
  <p className="text-center text-[#ABB2BF] text-base font-normal">
    &#169; Basado en el portafolio de Harshit |
    <a
      href="https://github.com/ahuja2666/portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#61dafb] hover:underline"
    >
      GitHub de Harshit
    </a>
  </p>
</div>
      </div>
    </footer>
  )
}
