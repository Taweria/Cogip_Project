import People from "../components/people";

const ContactPeople = () => {
    return (
         <div className="border-y-2 divide-solid border-slate-100 w-11/12 mx-auto py-12">
            <h2 className="text-6xl font-black font-inter">Contact People</h2>
            <div className="flex flex-col gap-4 md:flex-row">
                <People /> <People/>
            </div>
         </div>
    )
}

export default ContactPeople;