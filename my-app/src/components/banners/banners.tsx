import Chef from "../../../public/images/chef.png";
import Subscribe from "../../../public/images/subscribe.png";
import Live from "../../../public/images/live.png";
import Recipies from "../../../public/images/recipes.png";
import Image from "next/image";

const Banners = () => {
  return (
    <div className="relative bg-primary-main min-h-24 pl-[150px] pt-[100px]">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <Image
            src={Chef}
            alt="Image 1"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={Subscribe}
            alt="Image 2"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={Live}
            alt="Image 3"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={Recipies}
            alt="Image 4"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banners;
