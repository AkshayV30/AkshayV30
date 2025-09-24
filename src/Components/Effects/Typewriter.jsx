import React from "react";
import { useEffect } from "react";

import "./typewriter.css";

const Typewriter = ({ message, subtitle, roles = [] }) => {
  return (
    <>
      <div className="container-typewriter">
        <p className="typewriter-effect">
          {/* Welcome World to my Portfolio */}
          {message}
        </p>
        <p className="subtitle-effect"> {subtitle}</p>

        <p className="text-lg mt-2  subtitle-effect">
          <span className="text-green-400 subtitle-effect">
            {/* Front End Developer | DevOps Engineer | Freelancer */}
            {roles.join(" | ")}
          </span>
        </p>
      </div>
    </>
  );
};

export default Typewriter;
