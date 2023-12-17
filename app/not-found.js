"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Custom404() {
  const router = useRouter();
  const [counter, setCounter] = useState(5)



  useEffect(() => {
    if (counter === 0) {
      router.push("/")
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return (
      () => {
        clearInterval(timer);
      }
    )
  }, [counter])


  return (
    <div className="ml-36 mr-32 my-32 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <div className="text-white text-2xl font-semibold">
          404 | Page Not Found
        </div>
        <div className="text-white text-xl font-medium">
          Redirecting to home in {counter} seconds...
        </div>
      </div>
    </div>
  )
}
