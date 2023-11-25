import { useState, useEffect } from "react";

export function useFocusNav(ref, state) {
    const [functions, setFunctions] = useState([])

    useEffect(() => {
      const focusElements = ref.current.querySelectorAll("button,a")
      const firstElement = focusElements[0]
      const lastElement = focusElements[focusElements.length - 1]

        
      function handleTabKeyPress(e) {
        if (e.key === "Tab") {
            console.log("tabbed")
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
  
      function handleEscapeKeyPress(e) {
        if (e.key === "Escape") {
          props.toggleClose()
        }
      }
  
      //keep reference to the same function to remove listeners
      if (!functions[0]) {
        setFunctions([handleTabKeyPress, handleEscapeKeyPress])
      }
  
      if (!state && window.innerWidth <= 860) {
        console.log("state")
        firstElement.focus()
        ref.current.addEventListener("keydown", functions[0])
        ref.current.addEventListener("keydown", functions[1])
      } else {
        ref.current.removeEventListener("keydown", functions[0])
        ref.current.removeEventListener("keydown", functions[1])
      }
    }, [state])

    return [ref, state]
}