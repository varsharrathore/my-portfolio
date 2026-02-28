import { useEffect, useState } from "react";

export default function Intro() {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []); 
  
  return (
    <section id='intro' className={classes}>
      <div className="container mx-auto flex flex-col-reverse md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p>I&apos;m <span>Varsha Rathore</span><br/> Full-Stack Developer | React • Next.js • Angular 21 • JavaScript  
Building responsive, scalable web applications using modern frameworks and AI-powered development tools.
</p>
          <div className="flex flex-col md:flex-row items-center md:justify-center">
            <button className="btn"><a href="#contact"> Contact Me </a> </button>
          </div>
        </div>
        <div className="lg:w-full md:w-1/2 w-5/6 md:mb-16 mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="image.png"/>
        </div>
      </div>
    </section>
  );
}
