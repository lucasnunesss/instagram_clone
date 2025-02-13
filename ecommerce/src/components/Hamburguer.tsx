import React from 'react'


const SHEET_SIDES = [ "right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

const Hamburguer = () => {
  console.log("sheet", SHEET_SIDES)
  return (
    <div>
        {/* {SHEET_SIDES.map((side) => (

        ))} */}
    </div>
  )
}

export default Hamburguer