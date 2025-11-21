import React from 'react'
export default function Typewriter({words, speed=90}){
  const [text,setText] = React.useState('')
  const i = React.useRef(0)
  const fwd = React.useRef(true)
  React.useEffect(()=>{
    const t = setInterval(()=>{
      const w = words[i.current]
      setText(prev=> {
        if(fwd.current){
          const next = w.slice(0, prev.length+1)
          if(next===w) fwd.current=false
          return next
        } else {
          const next = w.slice(0, prev.length-1)
          if(next===''){ fwd.current=true; i.current=(i.current+1)%words.length }
          return next
        }
      })
    }, speed)
    return ()=>clearInterval(t)
  },[])
  return <span className="typewriter">{text}<span className="cursor">|</span></span>
}