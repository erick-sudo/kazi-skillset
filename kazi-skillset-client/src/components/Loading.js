import React from "react";

import { MdRotateRight } from "react-icons/md"

function Loading() {
    return (
        <div className="fixed flex justify-center items-center top-0 z-50 right-0 left-0 bottom-0 bg-sky-300">
            <div className="w-max">
                <p>Loading...</p>
                <MdRotateRight className="text-[5em] animate-spin" />
            </div>
        </div>
    )
}

export default Loading;