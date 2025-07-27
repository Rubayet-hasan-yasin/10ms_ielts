import React from 'react';

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}

const CourseDetailsPage = async () => {
    const datas = await getData();

    console.log(datas);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Content Section */}
                <div className="w-full lg:w-2/3">
                    {/* Course Content */}
                    <div className="space-y-8">
                        {/* Course Header */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h1 className="text-3xl font-bold mb-4">Course Title</h1>
                            <p className="text-gray-600">Course description goes here...</p>
                        </div>

                        {/* Course Curriculum */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
                            {/* Add curriculum items here */}
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 66, 33, 44, 88, 98].map((item) => (
                                <div key={item} className="border-b py-4">
                                    <h3 className="font-semibold">Section {item}</h3>
                                    <p className="text-gray-600">Content description...</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error quos aliquid nihil, ipsam maxime explicabo molestiae laudantium quis quia adipisci blanditiis libero qui mollitia numquam ab aliquam vero illo fugiat magni distinctio quasi at eaque. Veniam minus tempora velit sed eius soluta maxime dolorem suscipit totam temporibus dignissimos, cupiditate repellat a quidem quia magni. Aliquam nulla reiciendis aut? Accusantium, deserunt autem? Deserunt incidunt facilis eius illum et fugit at quasi error omnis dolor autem in ut vero aspernatur nesciunt repudiandae consectetur eligendi nihil inventore numquam veritatis id totam, perferendis nam. Voluptatem nulla illum dolorem voluptas? Ut similique sint quis.</p>
                                </div>
                            ))}
                        </div>

                        {/* Instructor Info */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                            <div className="flex items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                                <div className="ml-4">
                                    <h3 className="font-semibold">Instructor Name</h3>
                                    <p className="text-gray-600">Instructor bio...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sticky Section */}
                <div className="w-full lg:w-1/3">
                    <div className="lg:sticky lg:top-8 transition-all duration-300 ease-in-out">
                        <div className="bg-white rounded-lg shadow-md p-6 h-[80vh] overflow-y-auto">
                            {/* Course Card Content */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Course Price</h2>
                                <div className="text-3xl font-bold">$99.99</div>
                                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                    Enroll Now
                                </button>
                                {/* Course Features */}
                                <div className="space-y-2 pt-4">
                                    <h3 className="font-semibold">This course includes:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <span className="mr-2">✓</span>
                                            10 hours of video
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">✓</span>
                                            Lifetime access
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">✓</span>
                                            Certificate of completion
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;