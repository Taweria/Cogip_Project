import DynamicTitle from "../components/dynamic-title.jsx";
import Avatar from "../components/avatar.jsx";

const InfosContact = (props) => {
    return (
         <div>
            <div>
                <DynamicTitle title="Jane Smith"/>
            </div>
            <div className="flex flex-col items-center md:flex-row-reverse md:justify-between">
                <div className="pt-32 md:w-6/12 md:h-52 md:flex md:justify-center md:items-center md:pt-0">
                    <Avatar />
                </div>
                <div className="mt-12 md:ml-24 md:pt-32 md:w-6/12">
                    <p className="font-roboto font-medium"> <span className="font-bold">Contact: </span> {props.contact}</p>
                    <p className="font-roboton font-medium"> <span className="font-bold">Phone: </span> {props.phone}</p>
                    <p className="font-roboton font-medium"> <span className="font-bold">Mail: </span> {props.mail}</p>
                    <p className="font-roboton font-medium"> <span className="font-bold">Company: </span> {props.company}</p>
                </div>
            </div>
         </div>
    )
}

export default InfosContact;