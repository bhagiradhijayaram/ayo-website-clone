import ImageSlider from "../ImageSlider";

const Disruption = () => {
  return (
    <>
      <section className="bg-[linear-gradient(rgb(255,255,255),rgba(255,255,255,0)_5%),linear-gradient(0deg,rgb(255,255,255),rgba(255,255,255,0)_5%),linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),url('//goayo.com/cdn/shop/files/Colorful_background.jpg?format=pjpg&v=1758533071&width=1920')] bg-cover bg-center py-10">
        <div className="m-4 space-y-4">
          <p className="p-2 bg-white w-fit rounded-full">
            Modern life, misaligned.
          </p>
          <h2 className="text-5xl">
            <span className="text-gray-400">Do you suffer from</span> <br />
            circadian disruption?
          </h2>
        </div>
        <ImageSlider />
      </section>
    </>
  );
};
export default Disruption;
