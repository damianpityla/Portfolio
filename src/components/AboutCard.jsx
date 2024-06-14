import { gradientBg } from "../logica/constants.js";

const AboutCard = ({title, info, date}) =>{
  return(
  <div className=" w-3/4 max-xsm:w-full max-xsm:-ml-[17px] mt-7 mx-5 flex relative">
      <div className="mt-5  max-xsm:text-xl">
          <div id="rounded" className={`${gradientBg} absolute top-1/2 h-3.5 w-3.5 rounded-full -translate-y-1/2 -ml-[50px]`}></div>
          <h3 id="title" className="text-2xl font-bold"> {title} </h3>
          <div id="info" className="text-xl mb-3 leading-6 mt-3"> {info} </div>
          <div className="mt-3 text-lg font-bold">{date}</div>
      </div>
    </div>
  )
}
export default AboutCard;