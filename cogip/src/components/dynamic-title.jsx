const DynamicTitle = (props) => {
    return (
        <div className="ml-24">
            <div className="relative pr-28">
                  <h1 className="text-6xl font-black font-inter w-96 absolute z-10">{props.title}</h1>
                  <div className="bg-yellow w-4/12 h-8 absolute left-8 top-9"></div>
            </div>
        </div> 
    ) 
}

export default DynamicTitle;