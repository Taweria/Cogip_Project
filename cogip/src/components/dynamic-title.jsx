const DynamicTitle = (props) => {
    return (
        <div className="ml-12 mt-12 md:ml-24">
            <div className="relative md:pr-28">
                  <h1 className="text-5xl md:text-6xl font-black font-inter md:w-full absolute z-10">{props.title}</h1>
                  <div className="bg-yellow w-10/12 h-8 md:w-4/12 md:h-8 absolute left-8 top-9 "></div>
            </div>
        </div> 
    ) 
}

export default DynamicTitle;