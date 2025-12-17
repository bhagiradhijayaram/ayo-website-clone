import { ayoFeaturesData } from "../../data/ayoFeaturesData.js";
import FeatureCard from "../cards/FeatureCard.jsx";

const WhyAyo = () => {
  const { productImage, features } = ayoFeaturesData;
  return (
    <section className="my-20 max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-16">
      <div className="text-center space-y-6 px-4 md:px-0 max-w-3xl mx-auto">
        <h3 className="bg-[#f3f5ff] p-2 w-fit mx-auto rounded-full">
          Designed for Real Life. Backed by Science.
        </h3>
        <h2 className="text-5xl leading-tight">
          Why AYO Delivers Results{" "}
          <span className="text-gray-400">When Others Fall Short</span>
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Backed by science. Built for everyday life. Here’s what makes AYO
          different.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src={productImage.src}
            alt={productImage.alt}
            className="max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]"
          />
        </div>
        <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {features
            .filter((item) => item.position.startsWith("left"))
            .map((item) => (
              <FeatureCard key={item.id} data={item} />
            ))}
        </div>
        <div className="order-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {features
            .filter((item) => item.position.startsWith("right"))
            .map((item) => (
              <FeatureCard key={item.id} data={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAyo;
