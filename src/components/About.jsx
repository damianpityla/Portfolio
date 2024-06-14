import { gradientText } from "../logica/constants";
import AboutCard from "./AboutCard";

const About = () =>{
  return(
    <section className="flex justify-center">
      <div className="about-container border-2 border-pinky2 w-11/12 rounded-xl flex flex-col items-center pb-10">
        <div className={`${gradientText} my-10 text-4xl font-bold`}>Acerca de mi</div>
        <div className="max-xsm:mx-4 mx-16 text-center text-2xl max-xsm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quia itaque necessitatibus illum dignissimos distinctio officiis nesciunt maxime id explicabo ea accusamus, perferendis architecto laborum voluptatem dicta quos. Ipsum, ullam!
        </div>
        <div className="w-1/2 max-xsm:w-3/4 ml-24">
          <AboutCard 
            title="Universidad Nacional de la Matanza"
            info="Ingenieria en Informatica"
            date="2023 - presente"
          />
          <AboutCard 
            title="FreeCodeCamp"
            info="Responsive Web Design Certification"
            date="2023 - 2023"
          />
          <AboutCard 
            title="FreeCodeCamp"
            info="JavaScript Algorithm and Data Structures Certification"
            date="2024 - 2024"
          />
        </div>
      </div>
    </section>
  )
}
export default About;