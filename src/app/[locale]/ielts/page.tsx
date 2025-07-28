import axios from "axios";
import RightCardSection from "./_components/RightCardSection";
import { CourseData } from "@/interface/courseData";

type Params = Promise<{ locale: string }>;


async function getCourseData(lang: string): Promise<CourseData> {
    try {
        const response = await axios.get(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching course data:', error);
        throw new Error('Failed to fetch course data');
    }
}


export default async function IELTS({
    params,
}: {
    params: Params;
}) {
    const { locale } = await params;
    const courseData = await getCourseData(locale);

    // console.log(courseData);
    

    const { cta_text, media, checklist } = courseData.data;

    const thumbnailImage = media.find(item => item.name === 'thumbnail')?.resource_value || '';

    const courseFeatures = checklist.filter(item => !item.list_page_visibility).map(item => item.text);


    return (<div className="container mx-auto px-4 py-8">
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
                <RightCardSection media={media} cta_text={cta_text} checklist={checklist}/>
            </div>
        </div>
    </div>);
}