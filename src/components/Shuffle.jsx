import React, { useState, useEffect } from 'react'

// letters to pick from while scrambling
const LETTERS = '!<>-_\\/[]{}—=+*^?#________'

/**
 * useScramble: returns scrambled text and a done flag once reveal completes
 */
function useScramble(text, speed = 30) {
  const [display, setDisplay] = useState(text)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let frame = 0
    let rafId
    setDone(false)

    const update = () => {
      let output = ''
      let isDone = true

      for (let i = 0; i < text.length; i++) {
        if (frame > i * speed) {
          output += text[i]
        } else {
          isDone = false
          output += LETTERS[Math.floor(Math.random() * LETTERS.length)]
        }
      }

      setDisplay(output)

      if (isDone) {
        setDone(true)
      } else {
        frame++
        rafId = requestAnimationFrame(update)
      }
    }

    update()
    return () => cancelAnimationFrame(rafId)
  }, [text, speed])

  return [display, done]
}

/**
 * ScrambleText: only renders the scrambled span.
 * Parent should include static text and an inline container to prevent shifting.
 */
export default function ScrambleText({
  titles = [' Product Designer', ' Creative Technologist'],
  speed = 20,
  pauseMs = 3000,
  style = {}
}) {
  const [idx, setIdx] = useState(0)
  const [scrambled, done] = useScramble(titles[idx], speed)

  // loop after pause when done
  useEffect(() => {
    if (done) {
      const timeout = setTimeout(() => {
        setIdx(i => (i + 1) % titles.length)
      }, pauseMs)
      return () => clearTimeout(timeout)
    }
  }, [done, pauseMs, titles.length])

  // fix container width to longest title to avoid layout shifts
  const maxLen = Math.max(...titles.map(t => t.length))

  return ( <h1>Rosa Choi_
        <span
        style={{
            display: 'inline-block',
            color: '#CF9033',
            width: `${maxLen}ch`,
            opacity: done ? 1 : 0.6,
            transition: 'opacity 0.3s',
            ...style
        }}
        >
        {scrambled}
        </span>
    </h1>
  )
}
