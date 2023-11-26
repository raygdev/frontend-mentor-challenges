import { useState, useEffect } from "react"

function useMediaQuery() {
  const [isMobile, setIsMobile] = useState(true)
  const [handleMediaQueryChange] = useState(() => handleChange)
  function handleChange(e) {
    e.matches ? setIsMobile(false) : setIsMobile(true)
  }
  useEffect(() => {
    /**
     * use mediaQeury instead of checking for inner width for mobile
     * thanks to David Tejada for the help https://github.com/david-tejada
     */
    const mediaQueryList = window.matchMedia("(min-width:860px)")

    if (mediaQueryList.matches) {
      setIsMobile(false)
    }

    mediaQueryList.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return [isMobile, setIsMobile]
}

export default useMediaQuery
