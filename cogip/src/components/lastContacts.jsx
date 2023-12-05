import light from '../assets/light.svg';

const LastContacts = () => {
    return (
         <div className="w-full mt-48">
             <h2 className="text-6xl font-black my-16 mx-24 font-inter">Last contacts</h2>
             <div className="flex justify-center">
                 <table className="w-11/12 mx-24 py-6 font-roboto font-semibold">
                     <thead className="bg-yellow">
                             <td>Name</td>
                             <td>Phone</td>
                             <td>Mail</td>
                             <td>Company</td>
                             <td>Created at</td>
                     </thead>
                     <tbody className="w-11/12">
                         <tr>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                          <tr className="bg-slate-100">
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                          <tr >
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                          <tr className="bg-slate-100">
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                          <tr >
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                             <td>placeholder</td>
                         </tr>
                     </tbody>
                 </table>
             </div>
             <div className="relative">
                <img src={light} alt="ligh-bulb" className="absolute left-0 mt-16"/>
            </div>
        </div>
    )
}

export default LastContacts;