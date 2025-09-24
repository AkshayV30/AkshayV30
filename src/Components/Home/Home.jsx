// import "./typewriter.css";

import Typewriter from "../Effects/Typewriter";

const Home = () => {
  return (
    <>
      <h2>From Home section</h2>
      <Typewriter
        message="Welcome world !!"
        subtitle="Let's Build Something Great. "
        roles={["Front End developer", "Devops Engineer", "GCP", "AWS"]}
      />
    </>
  );
};

export default Home;
