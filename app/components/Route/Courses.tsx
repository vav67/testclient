import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
 import CourseCard from "../Course/CourseCard";

type Props = {};

const Courses = (props: Props) => {
 //загрузка
  const { data, isLoading } = useGetUsersAllCoursesQuery({});
//состояния
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
 //   console.log(" ========useEffect=============  ", data )
   // полученные данные запишем в состояние 
  
   if (data) {
    setCourses(data.course); //!!! поле course
  }
  
  }, [ data ]);

 

  return (
    <div>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <div className={`w-[90%] 800px:w-[80%] m-auto`}>
        <h1 className="text-center font-Poppins text-[25px] leading-[35px]
         sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px]
          text-[#000] font-[700] tracking-tight">
       Расширьте свою карьеру Expand Your Career <span className="text-gradient">Opportunity</span>{" "}
          <br />
          Возможности с нашими курсами Opportunity With Our Courses
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] 
 lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
          {courses &&
            courses.map((item: any, index: number) => (
              
               <CourseCard 
                   item={item} 
                   key={`courses-${index}`} 
               />
                
           
            ))}
        </div>  
      </div>

    )}
    </div>
  );
};

export default Courses;


