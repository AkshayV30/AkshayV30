import React from "react";

import "./typewriter.css";

const Typewriter = () => {
  return (
    <>
      <div className="container-typewriter">
        <p className="typewriter-effect">Akshay Kumar Minz</p>
        {/* <p className="subtitle-effect">Welcome to my Portfolio!</p> */}
        <p className="text-lg mt-2">
          <span className="text-green-400 subtitle-effect">
            Designer, Developer, Freelancer, Photographer
          </span>
        </p>
      </div>
    </>
  );
};

export default Typewriter;
