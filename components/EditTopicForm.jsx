export default function EditTopicForm() {
    return (
        <>
            <form className={"flex flex-col gap-3 "}>
                <input className={"border border-slate-500 px-8 py-2"}
                       type={"text"}
                       placeholder={"Topic List"}/>

                <input className={"border border-slate-500 px-8 py-2"}
                       type={"text"}
                       placeholder={"Topic Info"}
                />
                <button className={"bg-green-500 py-3 px-6 font-bold text-white w-fit"}>Update Topic</button>
            </form>
        </>
    )
}