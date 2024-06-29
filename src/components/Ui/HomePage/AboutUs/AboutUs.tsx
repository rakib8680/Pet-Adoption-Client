import petThumbnail from "@/assets/pet_thumbnail3.png";
import { Box } from "@mui/material";
import Image from "next/image";
import CeoImage from "@/assets/profile.png";

const AboutUs = () => {
  return (
    <div>
      <Box
        className="border-[#F2994A] border-b-[8px] flex items-start  lg:items-center"
        sx={{
          backgroundImage: `url(${petThumbnail.src})`,
          backgroundSize: { xs: "cover", lg: "contain" },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "30vh",
        }}
      >
        <h1 className="backdrop:filter backdrop-blur-lg  text-white font-black font-mono text-lg  lg:text-5xl mt-5 lg:mt-0 px-5 py-2 lg:py-10 bg-[#F2994A] bg-opacity-60 rounded-r-md lg:rounded-r-full">
          About Us
        </h1>
      </Box>

      {/* about info  */}
      <div className="container mx-auto pt-14  lg:pt-24  space-y-5 lg:w-5/6 px-3 lg:px-0">
        <h1 className="text-2xl lg:text-4xl font-mono font-semibold">
          We Are Their Voice
        </h1>
        <div
          className="border-[#F2994A] border-l-[8px] p-3 lg:p-10 font-mono text-xs lg:text-lg text-justify space-y-5
        bg-gradient-to-r from-orange-200 via-orange-100 to-white bg-opacity-10 rounded-lg "
        >
          <p>
            The Pet Adoption Platform has been at the forefront of animal rescue
            and protection since our founding as the first animal welfare
            organization in North America in 1866. For more than 150 years, we
            have been the leading voice in animal welfare, bringing the critical
            protection of animals to the forefront of society.
          </p>
          <p>
            We’ve led the way in fighting cruelty, rescuing and securing
            adoptions for animals in need, and driving significant legislative
            change that protects their lives and welfare—ultimately transforming
            how Americans value and care for animals.
          </p>
          <p>
            Our mission is to provide effective means for the prevention of
            cruelty to animals throughout the United States.
          </p>
          <p>
            Our vision is to create a humane and sustainable world for all
            animals—a world that will also benefit people. We are a leading
            animal welfare organization and we are committed to finding loving
            homes for all animals in our care.
          </p>
        </div>
      </div>

      {/* CEO Message */}
      <Box
        className="bg-gradient-to-l from-[#EFEFEF]  to-white "
        sx={{
          clipPath: {xs:'polygon(0 0, 100% 10%, 100% 100%, 0 90%)', lg:"polygon(0 0, 100% 15%, 100% 100%, 0 85%)",}
        }}
      >
        <div className=" container mx-auto  py-24 my-20 lg:mt-40 lg:mb-28 lg:flex justify-center items-start gap-24  px-4 lg:px-0">
          <div className="flex flex-col items-center justify-center space-y-2">
            <Image
              src={CeoImage}
              alt="CEO Image"
              height={200}
              width={200}
              className="rounded-full border-4 border-[#F2994A]"
            />
            <h4 className="italic font-semibold">Rakib D Khan</h4>
            <p className="text-[#F2994A] font-mono">PAP President & CEO</p>
          </div>

          <div className="lg:w-2/5 font-mono lg:text-2xl text-justify lg:leading-normal">
            <h3>
              <span className="text-6xl text-[#F2994A]">&ldquo;</span>
              Helping vulnerable animals and keeping pets in safe and loving
              homes requires a commitment from all of us—advocates, pet owners,
              shelters, leaders, and entire communities. When we work together
              under a common cause, we’re both saving lives and elevating our
              society and its laws to ensure cruelty victims and other at-risk
              animals receive the protection and care they deserve. Together, we
              can create a more humane world for all us.
              <span className="text-6xl flex justify-end text-[#F2994A]">
                &rdquo;
              </span>
            </h3>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AboutUs;
