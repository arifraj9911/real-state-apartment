import { useLoaderData } from "react-router-dom";
import Agent from "../Agent/Agent";

const Agents = () => {
  const estates = useLoaderData();
  console.log(estates);
  //
  return (
    <div className="pt-20 bg-[#f8fafe]">
      <h2 className="lg:w-3/4 text-center lg:text-left mx-auto text-3xl">
        Meet Our Agents
      </h2>
      <div className="flex flex-col gap-6 pb-20 pt-12">
        {estates.map((agent) => (
          <Agent key={agent.id} agent={agent}></Agent>
        ))}
      </div>
    </div>
  );
};

export default Agents;
