import {Oval} from "react-loader-spinner";

const Loader = () => {


    return (
        <>
            <div className={"w-full h-screen flex justify-center items-center"}>
                <Oval   height={80}
                        width={80} color={'#F9DE4E'}
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}/>
            </div>
        </>
    )
}

export default Loader;