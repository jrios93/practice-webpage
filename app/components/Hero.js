import Image from "next/image";
import firtsImage from "@/public/assets/images/image-web-3-desktop.jpg";
import mobileImage from "@/public/assets/images/image-web-3-mobile.jpg";
const Hero = () => {
  return (
    <section className="lg:flex p-6 gap-8 md:grid md:grid-cols-1 ">
      <div className="flex flex-col gap-12">
        <Image
          src={firtsImage}
          alt="Imagen con juego de mesa"
          className="w-full h-3/5 md:hidden  xs:hidden lg:flex "
        />
        <Image
          src={mobileImage}
          alt="Imagen con juego de mesa"
          className="w-full h-3/5 lg:hidden "
        />
        <div className="lg:flex justify-between items-start gap-6 w-full md:grid md:grid-cols-1">
          <div className="lg:w-2/5">
            <h1 className="text-6xl font-extrabold text-slate-900">
              The Bright Future of Web 3.0?
            </h1>
          </div>
          <div className="flex flex-col justify-between h-full lg:w-1/2 text-slate-600 md:gap-6">
            <p>
              Amet officia est exercitation non consequat pariatur sit proident
              cupidatat proident do. Anim tempor proident occaecat consectetur
              cupidatat proident do. Anim tempor proident nisi adipisicing?
            </p>
            <button className="bg-slate-900 text-white px-12 py-2 w-fit uppercase hover:bg-soft-red">
              Read More
            </button>
          </div>
        </div>
      </div>

      <article className="flex md:w-full md:gap-6 flex-col justify-between  lg:items-center p-6 lg:w-3/4 bg-aside-color">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-orange-color font-bold">New</h2>
          <p className="text-white font-bold hover:text-orange-color cursor-pointer text-xl">
            Hydrogen vs Electric Cars
          </p>
          <p
            className="text-slate-300
          "
          >
            Nulla elit culpa consectetur quis eiusmod velit ullamco mollit et
            aute.
          </p>
        </div>
        <hr className="w-full " />
        <div className="flex flex-col gap-4">
          <p className="text-white font-bold hover:text-orange-color cursor-pointer text-xl">
            The Downsides of AI Artistry
          </p>
          <p className="text-slate-300">
            Laborum nisi amet veniam adipisicing enim. Consectetur Lorem
            incididunt ad ullamco cupidatat.
          </p>
        </div>
        <hr className="w-full " />
        <div className="flex flex-col gap-4">
          <p className="text-white font-bold hover:text-orange-color cursor-pointer text-xl">
            Is VC Funding Drying Up?
          </p>
          <p className="text-slate-300">
            Dolore amet esse sunt elit elit dolor. Laborum Lorem enim velit
            exercitation est amet magna labore nisi
          </p>
        </div>
      </article>
    </section>
  );
};

export default Hero;
