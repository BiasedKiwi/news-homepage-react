import React from "react"

export default function NewsSectionItem(props) {
  return (
    <div class="flex flex-col">
      <a
      href="#"
      className="text-white font-bold text-xl mb-4 hover:text-[#e9ab53] duration-100"
      >
      {props.title}
      </a>
      <p className="text-[#c5c6ce]">
      {props.description}
      </p>
    </div>
  )
}