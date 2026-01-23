import { useEffect, useState } from "react";

export default function Tool() {
  const [extraClasses, setExtraClasses] = useState("");

  useEffect(() => {
    setExtraClasses("visible");
  }, []);

  return (
    <section id="tools">
      <div className="center mx-auto">
        <div className="text-center mb-20">
          <h2>Tools</h2>
        </div>

        <div className={`tools-container ${extraClasses}`}>
          <div className="tool-box flex flex-col px-4 mb-3">
            <img src="/github.png" alt="GitHub" />
            <h3 className="text-lg text-center font-medium">GitHub</h3>
          </div>

          <div className="tool-box flex flex-col px-4 mb-3">
            <img src="/vs.png" alt="VS Code" />
            <h3 className="text-lg text-center font-medium">VS Code</h3>
          </div>

          <div className="tool-box flex flex-col px-4 mb-3">
            <img src="/netlify.png" alt="Netlify" />
            <h3 className="text-lg text-center font-medium">Netlify</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
