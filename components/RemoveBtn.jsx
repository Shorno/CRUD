import {HiOutlineTrash} from "react-icons/hi";

export default function RemoveBtn(){
    return(
        <button className={"text-red-400"}>
            <HiOutlineTrash size={25}></HiOutlineTrash>
        </button>
    )
}