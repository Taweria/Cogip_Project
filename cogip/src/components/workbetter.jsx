import rect17 from '../assets/rect-17.svg';
import workBetter from '../assets/work-better.svg';

const WorkBetter = () => {
    return (
        <div className="flex flex-row my-10">
            <div className="w-5/12 text-xl my-4">
                <h2 className="font-black">WORK BETTER IN YOUR COMPANY</h2>
            </div>
            <div className="relative w-7/12 h-36">
                <img src={rect17} alt="rect" className="absolute w-full h-full bottom-0"/>
                <img src={workBetter} alt="work" className="absolute w-8/12 top-0 right-0"/>
            </div>
        </div>
    )
}

export default WorkBetter;