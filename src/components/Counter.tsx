import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import person from "../assets/images/person.png"

const Counter = () => {
  const [on, setOn] = useState<boolean>(false);

  const handleInitial = () => {
    setOn(false);
  };

  const handleInView = () => {
    setOn(true);
  };

  return (
    <section className="counter">
      <div className="counter-title">
        <h1>Helping a local <span>business reinvent itself</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda!</p>
      </div>
      <motion.div
        className="counter-container"
        initial={handleInitial as any}
        whileInView={handleInView as any}
      >
        <div className="Counter small-c">
          <h2>
            <img src={person} alt="" />{on && <CountUp start={0} end={2245341} duration={8} delay={0} />}
          </h2>
          <span>Members</span>
        </div>
        <div className="Counter small-c">
          <h2>
            <img src={person} alt="" />{on && <CountUp start={0} end={46328} duration={8} delay={0} />}
          </h2>
          <span>event</span>
        </div>
        <div className="Counter big-c">
          <h2>
            <img src={person} alt="" />{on && <CountUp start={0} end={828867} duration={8} delay={0} />}
          </h2>
          <span>clubs</span>
        </div>
        <div className="Counter big-c">
          <h2>
            <img src={person} alt="" />{on && <CountUp start={0} end={1926436} duration={8} delay={0} />}
          </h2>
          <span>Lorem.</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Counter;