import { useState } from "react"

export default function Skill() {
  const [extraClasses, setExtraClasses] = useState('');
    return(
        <section id="skills">
  <div className="center mx-auto">
    <div className="text-center mb-20">
        <h2>My Skills</h2>
    </div>
    <div className={extraClasses + "skills-container"}>
      <div className="skill-box flex flex-col px-4 mb-8">
        <img src="/html.png" alt="icon"/>
        <div className="flex-grow">
          <h3 className="text-lg title-font text-center font-medium mb-3">HTML5</h3>
        </div>
      </div>
      <div className="skill-box flex flex-col px-4 mb-8">
      <img src="/css.png" alt="icon"/>
        <div className="flex-grow">
          <h3 className=" text-lg title-font text-center font-medium mb-3">CSS</h3>
        </div>
      </div>
      <div className="skill-box flex flex-col px-4 mb-8">
      <img src="/js.png" alt="icon"/>
        <div className="flex-grow">
          <h3 className="text-lg title-font text-center font-medium mb-3">Javascript</h3>
        </div>
      </div>
      <div className="skill-box flex flex-col px-4 mb-8">
      <img src="/react.png" alt="icon"/>
        <div className="flex-grow">
          <h3 className="text-lg title-font text-center font-medium mb-3">React.js</h3>
        </div>
      </div>
      <div className="skill-box flex flex-col px-4 mb-8">
      <img src="/nextjs.png" alt="icon"/>  
        <div className="flex-grow">
          <h3 className="text-lg title-font text-center font-medium mb-3">Next.js</h3>
        </div>
      </div>
      <div className="skill-box flex flex-col px-4 mb-8">  
      <img src="/angular.png" alt="icon"/>  
        <div className="flex-grow">
          <h3 className="text-lg title-font text-center font-medium mb-3">Angular 21</h3>
        </div>
      </div>
      <div className="skill-box flex flex-col px-4 mb-8">
      <img src="/node.png" alt="icon"/>
        <div className="flex-grow">
          <h3 className="text-lg title-font text-center font-medium mb-3">Node.js</h3>
        </div>
      </div>
      <div className="skill-box flex flex-col px-4 mb-8">
      <img src="/mongo.png" alt="icon"/>
        <div className="flex-grow">
          <h3 className="text-lg title-font text-center font-medium mb-3">MongoDb</h3>
        </div>
      </div>
    </div>
  </div>
        </section>
        
    )
}