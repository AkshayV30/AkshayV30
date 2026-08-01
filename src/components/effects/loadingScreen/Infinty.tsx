import "./Infinity.css";

export default function InfinityLoader() {
  return (
    <div className="loader-container" aria-label="Loading">
      <svg
        className="infinity"
        viewBox="-1 -1 12 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="loop"
            d="
              M5 3
              C3.9 1.8 3 1 2 1
              A2 2 0 0 0 2 5
              C3 5 3.9 4.2 5 3
              C6.1 1.8 7 1 8 1
              A2 2 0 0 1 8 5
              C7 5 6.1 4.2 5 3
            "
          />
        </defs>

        {/* Background */}
        <use href="#loop" className="track" />

        {/* Soft glow behind */}
        {/* <use href="#loop" className="trail" /> */}

        {/* Main moving ribbon */}
        <use href="#loop" className="highlight" />

        {/* Leading particle */}
        {/* <circle className="runner" r=".14">
          <animateMotion
            dur="3.6s"
            rotate="auto"
            repeatCount="indefinite"
            calcMode="linear"
          >
            <mpath href="#loop" />
          </animateMotion>
        </circle> */}
      </svg>
    </div>
  );
}
