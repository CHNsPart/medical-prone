import React from 'react'
import "../../styles/blob.module.css"

const Blob = () => {
  return (
    <>
      <div class="wrapper">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>

      <svg>
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" result="filter" />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default Blob