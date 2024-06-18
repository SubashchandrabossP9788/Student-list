import { useContext } from "react"
import { Stdlistcontext } from "./context"
import {Link} from 'react-router-dom'


const Student = () => {
    const {stdlist,setstdlist} = useContext(Stdlistcontext)

    function handleaddfav(removeid) {
       removeid.favourite = true
       console.log(stdlist);
       setstdlist([...stdlist]);
    }

    return(
        <>
            <div className="bg-[#4C2B36] flex py-5 px-5 gap-10 justify-center">
                <h1 className="text-white text-3xl cursor-pointer  border-b-2 border-white">List of Students</h1>
                <h1 className="text-white text-3xl cursor-pointer border-b-2 border-[#4C2B36] hover:border-white">
                    <Link to={"/favoritestudent"}>Favourite Students</Link>
                </h1>
            </div>
            <ul>
                {
                    stdlist.map((item,index)=>{
                        return(
                            item.favourite?<li key={index} className="flex mt-5 pl-5 justify-between lg:mx-auto  lg:w-6/12	 align-middle">
                            <p className="text-2xl">{index+1}.{item.stdname}</p>
                            <button className="bg-black  py-1 px-4 rounded-md mr-5  text-red-500" onClick={()=>{handleaddfav(item)}}><i class="fa-solid fa-heart"></i></button>
                            </li>:<li key={index} className="flex mt-5 pl-5 justify-between lg:mx-auto lg:w-6/12	 align-middle">
                            <p className="text-2xl">{index+1}.{item.stdname}</p>
                            <button className="bg-black text-white py-1 px-4 rounded-md mr-5" onClick={()=>{handleaddfav(item)}}><i class="fa-regular fa-heart"></i></button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Student