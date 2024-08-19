import { ProfileImage } from "../utils"


const Profile = () => {
    return (
        <section>
            <div className="mx-40 mt-10">
                <div className="flex justify-between items-center">
                    <div>
                        <img src={ProfileImage} 
                        alt="profile" 
                        width={200}
                        className="rounded-[9999px]"
                        />
                    </div>
                    <div className="flex gap-20 border-2 p-10 rounded-md border-thick-orange
                    font-medium text-lg text-slate-gray">
                        <div className="">
                            <h1 className="font-bold text-black pb-2">PERSONAL INFORMATION</h1>
                            <p className="pb-1"><span className="text-thick-orange">
                                Name:</span> Oscar Mutwiri</p>
                            <p className="pb-1"><span className="text-thick-orange">
                                Email:</span>  oscarmutwiri03@gmail.com</p>
                            <p><span className="text-thick-orange">Phone Number:</span> 0112163160</p>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-black pb-2">ADDRESS</h1>
                            <p><span className="text-thick-orange">Address:</span> Meru Town Near Tuskys</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold text-thick-orange py-10">My Orders</h1>
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
                <tr className="bg-gray-200 text-gray-700">
                    <th className="py-3 px-4 text-left border-b border-gray-200">Name</th>
                    <th className="py-3 px-4 text-left border-b border-gray-200">Price</th>
                    <th className="py-3 px-4 text-left border-b border-gray-200">Delivery Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-3 px-4 border-b border-gray-200">Phone Model A</td>
                    <td className="py-3 px-4 border-b border-gray-200">Ksh 45,000</td>
                    <td className="py-3 px-4 border-b border-gray-200">Delivered</td>
                </tr>
                <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-200">Phone Model B</td>
                    <td className="py-3 px-4 border-b border-gray-200">Ksh 69,000</td>
                    <td className="py-3 px-4 border-b border-gray-200">In Transit</td>
                </tr>
                <tr>
                    <td className="py-3 px-4 border-b border-gray-200">Phone Charger</td>
                    <td className="py-3 px-4 border-b border-gray-200">Ksh 34,000</td>
                    <td className="py-3 px-4 border-b border-gray-200">Pending</td>
                </tr>
            </tbody>
        </table>
                </div>
            </div>
        </section>
    )
}

export default Profile
