const Dashboard = () => {
    const datasetCount = 5;
    const lastUpdate = '13/04/2025';
    const activities = [
        "Modified schema ****** ‘Customer name’",
        "Generated new schema **********",
        "Deleted ********** schema",
        "Deleted ********** schema",
        "Generated new schema **********"
    ];

    return (
        <div className="flex flex-col gap-8 px-8 py-10">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold font-jetbrains">Dashboard</h1>
                <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    create new dataset (manual) +
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Summary Card - centered */}
                <div className="border rounded-xl p-6 flex flex-col justify-center items-center text-center h-full">
                    <h2 className="text-lg font-jetbrains mb-2">Datasets Summary</h2>
                    <p className="text-5xl font-jetbrains my-6">{datasetCount}</p>
                    <p className="text-sm text-gray-700">Total Datasets</p>
                    <p className="text-xs text-gray-400 mt-2">Last updated : {lastUpdate}</p>
                </div>

                {/* Activity Card */}
                <div className="border rounded-xl p-6">
                    <h2 className="text-lg font-jetbrains mb-4">Recent Activity</h2>
                    <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
                        {activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                        ))}
                    </ul>
                    <div className="text-right mt-4">
                        <button className="text-sm font-semibold hover:underline">View more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard