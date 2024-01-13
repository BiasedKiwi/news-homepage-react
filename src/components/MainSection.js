import React from "react"

export default function MainSection(props) {
    return (
        <section class="flex max-auto max-w-4xl">
          <div>
            <img
              src={props.imgUrl}
              alt={props.title}
            />
            <div class="flex mt-6 space-between">
              <h1 class="font-extrabold font-sans text-6xl mr-28">
                {props.title}
              </h1>
              <div class="p-2 relative">
                <p class="font-sans text-md text-[#5d5f79]">
                  {props.description}
                </p>
                <button
                  class="absolute bottom-0 bg-[#f15e50] font-bold text-white p-4 px-7 hover:bg-black hover:duration-150"
                >
                  <span class="tracking-widest">READ MORE</span>
                </button>
              </div>
            </div>
          </div>
        </section>
    )
}
