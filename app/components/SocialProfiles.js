import Image from "next/image"
import Link from "next/link"

const images = [{ path: "/github.png", url: "https://github.com/cahov/" }, { path: "/Linkedin.png", url: "https://www.linkedin.com/in/cahodev/" }, { path: "/Discord.png", url: "https://discordapp.com/users/989012739945033769" }]


export default function SocialProfiles() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {
        images?.map((item) => {
          return (
            <div key={item?.path}>
              <Link target="_blank" href={item?.url}><Image
                src={item?.path}
                width={30}
                height={30}
                alt={item?.path?.split("/")[1].split(".")[0]}
                className="cursor-pointer"
              /></Link>
            </div>
          )
        })
      }
    </div>
  )
}
