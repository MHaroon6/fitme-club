import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      <div className="programs-header">
        <span className="stroke-text">Ready to start</span>
        <span> your journey </span>
        <span className="stroke-text">Now with us</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, id) => (
          <div className="plan" key={id}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, id) => (
                <div className="feature" key={id}>
                  <img src={whiteTick} alt="tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <span>see more benifits -&gt; </span>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
