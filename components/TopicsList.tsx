import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";
import {cache} from "browserslist";


const getTopics = async () => {
    try {
       const res=  await fetch("http://localhost:3000/api/topics",{
            cache : "no-store",
        });

       if (!res.ok){
           throw new Error("Failed to fetch topics");
       }

       return await res.json();

    } catch (error) {
        console.error("Error loading Topics", error);

    }
};
export default async function TopicsList() {
    const {topics} = await getTopics();
    return (
        <>
            <div className={"p-4 bg-slate-300 my-3 flex justify-between gap-5 items-start"}>
                <div>
                    <h2 className={"font-bold text-2xl"}>Topic Title</h2>
                    <div>Topic Info</div>
                </div>
                <div className={"flex gap-2"}>
                    <RemoveBtn></RemoveBtn>
                    <Link href={"/editTopic/123"}>
                        <HiPencilAlt size={25}>/</HiPencilAlt>
                    </Link>
                </div>
            </div>
        </>
    )
}