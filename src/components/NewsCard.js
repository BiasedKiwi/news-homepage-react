import React from "react"

export default function NewsCard(props) {
    return (
        <div class="flex">
            <img
            src={props.imgUrl}
            alt={props.title}
            class="object-contain"
            />
            <div class="flex flex-col pl-6">
            <h1 class="text-4xl text-[#c5c6ce] font-bold pb-2">{props.num}</h1>
            <a href="#" class="font-extrabold pb-2">{props.title}</a>
            <p class="text-[#c5c6ce]">
                {props.description}
            </p>
            </div>
        </div>
    )
}