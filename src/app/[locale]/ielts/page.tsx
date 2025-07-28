import axios from "axios";
import RightCardSection from "./_components/RightCardSection";
import { CourseData } from "@/interface/courseData";
import LeftContentSection from "./_components/LeftContentSection";
import CourseHeader from "./_components/CourseHeader";

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
    

    const { cta_text, media, checklist, sections, ...rest } = courseData.data;

    // const thumbnailImage = media.find(item => item.name === 'thumbnail')?.resource_value || '';

    // const courseFeatures = checklist.filter(item => !item.list_page_visibility).map(item => item.text);


    return (<div className="container mx-auto px-4 py-8">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* Left Content Section */}
            <LeftContentSection data={{ ...rest, sections }}/>

            {/* Right Sticky Section */}
            <div className="w-full lg:w-1/3">
                <RightCardSection media={media} cta_text={cta_text} checklist={checklist}/>
            </div>

            <CourseHeader title={rest.title} description={rest.description} className="lg:hidden "/>
        </div>
    </div>);
}