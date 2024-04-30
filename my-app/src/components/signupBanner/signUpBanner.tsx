import Image from "next/image";
import SignUpBannerImg from "../../../public/images/signUp.png";

const SignUpBanner = () => {
  return (
    <div className="relative bg-primary-main pl-[150px] w-[100%]">
      <Image
        src={SignUpBannerImg}
        alt="signupbanner"
        height={401}
        width={1700}
      />

      <div className="items-start flex flex-col gap-8 absolute top-[15%] left-[20%] text-black">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-normal text-white">
            SIGN UP SPECIAL PROMOTIONS
          </h1>
          <hr className="border-2 border-white w-[572px]" />
        </div>
        <p className="text-lg text-white font-light">
          Get exclusive deals you won’t find anywhere else straight to your
          inbox!
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter email address"
            className="border-2 border-gray-400 text-white outline-none p-1 w-[516px] bg-transparent"
          />
          <button className="p-2 text-white bg-text-main w-[188px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUpBanner;
