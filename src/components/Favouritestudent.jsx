import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Stdlistcontext } from './context'

const Favouritestudent = () => {

    const {stdlist,setstdlist} = useContext(Stdlistcontext)
    
    const handledel = (removeid) => {
        removeid.favourite = false
       console.log(stdlist);
       setstdlist([...stdlist]);
    }

    return(
        <>
            <div className="bg-[#443138] flex py-5 px-5 gap-10 justify-center">
                <h1 className="text-[#f7f6f4] text-3xl cursor-pointer border-b-2 border-[#443138] hover:border-white">
                    <Link to={"/"}>List of Students</Link>
                </h1>
                <h1 className="text-white text-3xl cursor-pointer  border-b-2 border-white">Favourite Students</h1>
            </div>
            <ul >
                {
                    stdlist.map((item,index)=>{
                        return(
                            <>
                                {
                                    item.favourite?<li key={index} className="flex mt-5 pl-5 justify-between lg:mx-auto lg:w-6/12	 align-middle">
                                    <p className="text-2xl">{index+1}.{item.stdname}</p>
                                    <button className="bg-red-600 text-white py-1 px-4 rounded-md mr-5" onClick={()=>{handledel(item)}}>Remove</button>
                                    </li>:""
                                }
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Favouritestudent