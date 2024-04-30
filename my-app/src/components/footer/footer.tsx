import {
  ShoppingCartIcon,
  PhoneXMarkIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import sideBarImage from "../../../public/images/sideBar.png";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="relative bg-primary-main pl-[230px] w-[100%] flex justify-between p-12">
        <div className="gap-4 flex">
          <ShoppingCartIcon
            className="w-8 h-8 text-text-main"
            aria-hidden="true"
          />
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl text-text-main">FREE SHIPPING WORLDWIDE</h1>
            <p className="text-white font-semibold">Guaranteed Delivery</p>
          </div>
        </div>
        <div className="gap-4 flex">
          <PhoneXMarkIcon
            className="w-8 h-8 text-text-main"
            aria-hidden="true"
          />

          <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl text-text-main">24/7 CUSTOMER SERVICE</h1>
            <p className="text-white font-semibold">
              Text Us 24/7 at 070-7782-9137
            </p>
          </div>
        </div>
        <div className="gap-4 flex">
          <CheckCircleIcon
            className="w-8 h-8 text-text-main"
            aria-hidden="true"
          />
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl text-text-main">QUALITY GUARANTEE!</h1>
            <p className="text-white font-semibold">Send Within 30 Days</p>
          </div>
        </div>
      </div>
      <div className="pl-[150px] w-[100%] flex justify-between">
        <hr className="border-4 border-text-main w-[100%]" />
      </div>
      <div className="relative flex w-[100%] items-center justify-center bg-primary-main">
      <Image src={sideBarImage} alt="company_logo" height={299} width={447} />
      </div>
    </>
  );
};

export default Footer;
