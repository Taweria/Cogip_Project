import People from "../components/people";
import manager from '../assets/manager.svg';

const ContactPeople = () => {
    return (
         <div className="relative border-y-2 divide-solid border-slate-100 ml-24 py-12 mt-24">
            <h2 className="text-6xl font-black font-inter">Contact People</h2>
            <div className="flex flex-col gap-4 md:flex-row">
                <People /> <People/>
            </div>
             <img src={manager} alt="manager" className="absolute right-0 top-1/3" />
         </div>
    )
}

export default ContactPeople;