const FeatureCard = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${data.bgImage})`,
      }}
      className="p-6 rounded-lg flex flex-col items-start bg-cover bg-center "
    >
      <div className="w-10 h-10 mb-4 rounded-lg bg-black text-white flex items-center justify-center">
        <img src={data.icon} alt={data.title} />
      </div>

      <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
      <p className="text-gray-600 text-md text-[18px]">{data.description}</p>
    </div>
  );
};

export default FeatureCard;
