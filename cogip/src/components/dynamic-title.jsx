const DynamicTitle = ({title, isUnderline}) => {



    return (
        <div className="ml-12 mt-12 md:ml-24">
            <div className="relative md:pr-28">
                  <h2 className="text-5xl md:text-6xl font-black font-inter md:w-full relative z-10">{title}</h2>
                {isUnderline && (
                    <div className="bg-yellow w-3/4 h-8 absolute left-24 top-9 "></div>
                )}

            </div>
        </div> 
    ) 
}

export default DynamicTitle;