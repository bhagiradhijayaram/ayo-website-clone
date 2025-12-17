const SlideCard = ({ data, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundImage: `url(${data.image})` }}
      className={`
        relative h-[380px] ${
          isActive ? "w-[560px]" : "w-[350px]"
        } bg-cover bg-center rounded-2xl overflow-hidden cursor-pointer transition-[width] duration-500 ease-out flex-shrink-0
      `}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
        <img src={data.icon} alt={`${data.title} icon`} />
      </div>

      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-4xl font-semibold mb-2">{data.title}</h3>

        {isActive && (
          <p className="text-md opacity-90 transition-opacity duration-300">
            {data.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SlideCard;
