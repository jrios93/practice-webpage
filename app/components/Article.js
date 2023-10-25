import Image from "next/image";
import retro from "@/public/assets/images/image-retro-pcs.jpg";
import top from "@/public/assets/images/image-top-laptops.jpg";
import gaming from "@/public/assets/images/image-gaming-growth.jpg";
const Article = () => {
  return (
    <div className="lg:flex justify-between gap-6 px-6 py-6 mt-10 md:grid md:grid-cols-1">
      <div className="flex item-center justify-center gap-6">
        <Image src={retro} alt="imagen retro" className="w-2/5 h-5/6 " />
        <div className="flex flex-col justify-between items-start w-3/4 h-5/6 gap-2 ">
          <p className="text-4xl font-bold text-gray-300">01</p>
          <h3 className="text-slate-900 font-bold hover:text-orange-600 cursor-pointer">
            Reviving retro Pcs
          </h3>
          <p>Ullamco cupidatat elit id deserunt occaecat excepteur</p>
        </div>
      </div>

      <div className="flex item-center justify-center gap-6">
        <Image src={top} alt="imagen retro" className="w-2/5 h-5/6" />
        <div className="flex flex-col justify-between items-start w-3/4 h-5/6 ">
          <p className="text-4xl font-bold text-gray-300">02</p>
          <h3 className="text-slate-900 font-bold hover:text-orange-600 cursor-pointer ">
            Reviving retro Pcs
          </h3>
          <p>Ullamco cupidatat elit id deserunt occaecat excepteur</p>
        </div>
      </div>

      <div className="flex item-center justify-center gap-6">
        <Image src={gaming} alt="imagen retro" className="w-2/5 h-5/6" />
        <div className="flex flex-col justify-between items-start w-3/4 h-5/6 ">
          <p className="text-4xl font-bold text-gray-300">03</p>
          <h3 className="text-slate-900 font-bold hover:text-orange-600 cursor-pointer">
            Reviving retro Pcs
          </h3>
          <p>Ullamco cupidatat elit id deserunt occaecat</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
