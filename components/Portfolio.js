export default function Portfolio() {
    return (
        <section id="portfolio">
            <div className="center mx-auto">
                <div className="text-center mb-10">
                    <h2>Portfolio</h2>
                </div>
    <div className="box-container flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="box p-4 md:w-1/3 sm:mb-0 mb-6">
        <a href="https://todo-list-inn.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img alt="content" className="object-cover object-center h-full w-full cursor-pointer hover:opacity-80 transition-opacity" src="/todo.jpg"/>
        </a>
      </div>
      <div className="box2 p-4 md:w-1/3 sm:mb-0 mb-6">
        <a href="https://world-clock-in.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img alt="content" className="object-cover object-center h-full w-full cursor-pointer hover:opacity-80 transition-opacity" src="/clock.jpg"/>
        </a>
      </div>
      <div className="box p-4 md:w-1/3 sm:mb-0 mb-6">
        <a href="https://tent-house-ltd.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img alt="content" className="object-cover object-center h-full w-full cursor-pointer hover:opacity-80 transition-opacity" src="/2.png"/>
        </a>
      </div>
      <div className="box p-4 md:w-1/3 sm:mb-0 mb-6">
        <a href="https://github.com/varsharrathore" target="_blank" rel="noopener noreferrer">
          <img alt="content" className="object-cover object-center h-full w-full cursor-pointer hover:opacity-80 transition-opacity" src="/git.png"/>
        </a>
      </div>
      <div className="box2 p-4 md:w-1/3 sm:mb-0 mb-6">
        <a href="https://your-project5.netlify.app" target="_blank" rel="noopener noreferrer">
          <img alt="content" className="object-cover object-center h-full w-full cursor-pointer hover:opacity-80 transition-opacity" src="/5.png"/>
        </a>
      </div>
      <div className="box p-4 md:w-1/3 sm:mb-0 mb-6">
        <a href="https://your-project6.netlify.app" target="_blank" rel="noopener noreferrer">
          <img alt="content" className="object-cover object-center h-full w-full cursor-pointer hover:opacity-80 transition-opacity" src="/8.png"/>
        </a>
      </div>
    </div>
    </div>
        </section>
    )
}