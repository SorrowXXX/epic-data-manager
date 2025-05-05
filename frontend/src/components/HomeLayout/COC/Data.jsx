import { FaSearch } from 'react-icons/fa'; // Assure-toi d'avoir `react-icons` installé

const Data = () => {
    return (
        <div className="px-8 py-10 space-y-16">

            {/* Manage Dataset */}
            <div>
                <h2 className="text-2xl font-jetbrains mb-6">Manage Dataset</h2>
                <div className="flex flex-col md:flex-row gap-10 items-end mt-4">

                    {/* Search */}
                    <div className="flex flex-col w-full md:max-w-md justify-center">
                        <label className="text-xs text-gray-500 mb-1 block">search</label>

                        <div className="flex">
                            <input
                                type="text"
                                placeholder="**************"
                                className="flex-1 border border-gray-300 rounded-l-2xl px-4 py-2 focus:outline-none"
                            />
                            <button className="bg-white border border-l-0 rounded-r-2xl px-4 flex items-center justify-center">
                                <FaSearch size={16} className="text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col w-full md:w-1/4 justify-center">
                        <label className="text-xs text-gray-500 mb-1 block">schema</label>
                        <select className="border border-gray-300 py-2 px-4 rounded-xl w-full">
                            <option value="" disabled selected hidden className="text-sm text-gray-500">
                                Select a schema...
                            </option>
                            {/* map your schema options here */}
                        </select>
                    </div>

                    {/* Apply Button */}
                    <div className="flex justify-center w-full md:w-auto">
                        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition text-sm">
                            apply →
                        </button>
                    </div>
                </div>
            </div>

            {/* Separator */}
            <div className="flex items-center gap-4">
                <hr className="flex-1 border-t" />
                <span className="text-xs font-mono">or</span>
                <hr className="flex-1 border-t" />
            </div>

            {/* Generate Dataset */}
            <div>
                <h2 className="text-2xl font-mono mb-6">Generate Dataset</h2>
                <div className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex flex-col w-1/3">
                        <label className="text-xs text-gray-500 mb-1">company</label>
                        <input
                            type="text"
                            placeholder="*************"
                            className="border px-4 py-2 rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col w-1/3">
                        <label className="text-xs text-gray-500 mb-1">name of the schema</label>
                        <input
                            type="text"
                            placeholder="*************"
                            className="border px-4 py-2 rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col w-full md:w-1/5">
                        <label className="text-xs text-gray-500 mb-1 block">schema</label>
                        <select className="border border-gray-300 py-2 px-4 rounded-xl">
                            <option value="" disabled selected hidden className="text-sm text-gray-500">
                                No.activity
                            </option>
                            {/* map your schema options here */}
                        </select>
                    </div>

                    <div className="flex flex-col md:flex-row items-end gap-2">
                        <button className="border border-gray-400  py-2 px-2 rounded hover:bg-gray-100 text-sm">settings</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition text-sm">
                    generate →
                </button>
            </div>
        </div>
    );
};

export default Data;