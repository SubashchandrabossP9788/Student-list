import { createContext, useState } from "react"

const Stdlistcontext = createContext()

function Context(props) {
    const [stdlist,setstdlist] = useState(
        [
            {
                id:1,
                stdname:"Subash",
                favourite:false
            },
            {
                id:2,
                stdname:"Karthi",
                favourite:false
            },
            {
                id:3,
                stdname:"Mukilan",
                favourite:false
            },
            {
                id:4,
                stdname:"Praga",
                favourite:false
            },
            {
                id:5,
                stdname:"Mathan",
                favourite:false
            },
        ]
    )

    return(
        <>
            <Stdlistcontext.Provider value={{stdlist,setstdlist,}}>
                {props.children}
            </Stdlistcontext.Provider>
        </>
    )
}

export default Context
export {Stdlistcontext}
