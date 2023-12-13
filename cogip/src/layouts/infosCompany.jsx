import DynamicTitle from "../components/dynamic-title.jsx";

const InfosCompany = (props) => {
    return (
         <div>
            <div>
                <DynamicTitle title="PIED PIPPER"/>
            </div>
            <div className="pt-32 ml-24">
                <p className="font-roboto font-medium"> <span className="font-bold">Name: </span> {props.name}</p>
                <p className="font-roboto font-medium"> <span className="font-bold">TVA: </span> {props.tva}</p>
                <p className="font-roboto font-medium"> <span className="font-bold">Country: </span> {props.country}</p>
                <p className="font-roboto font-medium"> <span className="font-bold">Type: </span> {props.type}</p>
            </div>
         </div>
    )
}

export default InfosCompany;