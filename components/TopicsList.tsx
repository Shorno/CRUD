import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";
import {cache} from "browserslist";


const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        });

        if (!res.ok) {
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
            {topics.map((t : { _id: string, title: string, info: string }) => (
                <div key={t._id} className={"p-4 bg-slate-300 my-3 flex justify-between gap-5 items-start"}>
                    <div>
                        <h2 className={"font-bold text-2xl"}>{t.title}</h2>
                        <div>{t.info}</div>
                    </div>

                    <div className={"flex gap-2"}>
                        <RemoveBtn></RemoveBtn>
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={25}>/</HiPencilAlt>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}