import React from 'react'

const Button = (props) => {
    const buttonClass = "transition-all duration-200 transform rotate-1 hover:rotate-0 border-2 w-full uppercase text-lg font-bold border-gray-400 text-gray-400 hover:text-lightGreen-200 py-3 px-2 bg-white hover:bg-gray-400 hover:text-white focus:outline-none"
    return <div className="inline-block bg-lightGreen-200 transition-all duration-200 transform -rotate-1 hover:rotate-0 w-full">
        <button
            onClick={() => props.handleButtonClick()}
            className={buttonClass}
            type="button" >
            {props.text}
        </button>
    </div>
}

export default Button