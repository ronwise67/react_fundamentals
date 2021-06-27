import { props } from "bluebird";
import { exp } from "prelude-ls";
import { useState } from "react";

const PropsDemo = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <FunctionalComponent string='will this display?' />
                <FunctionalComponent string='I hope I understand all of this!' />
                <FunctionalComponent string='I seriously need a nap.' />
                <FunctionalComponent string='I can do this sort of thing all night . . . but why?!' />
            </div>
        </div>
    )
}

export default PropsDemo

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
        </div>
    )
}