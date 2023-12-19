import {useIsDashboard} from "../hooks/useIsDashboard.jsx";
import scene from "../assets/example-scene-2.svg";


const HeaderDashBoard = () => {
    const dashboard = useIsDashboard();

    return (
        <>
            <header className="mx-8 py-8">
                <h2 className="font-inter font-semibold text-4xl"> Dashboard </h2>
                <p> dashboard/ </p>
                <div className="w-full px-8 py-12 my-8 bg-lavande text-white rounded-md relative font-inter">
                    <h1 className="text-2xl font-semibold md:text-4xl"> Welcome Back Henry!</h1>
                    <p className="text-xs py-6 md:text-sm"> You can here add an invoice, a company and some contacts</p>
                    {dashboard && (
                        <img src={scene} alt="scene" className="absolute bottom-8 right-8" />
                    )}
                </div>
            </header>
        </>
    )
}

export default HeaderDashBoard;