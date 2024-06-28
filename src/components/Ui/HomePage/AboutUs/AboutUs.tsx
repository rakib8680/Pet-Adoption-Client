import petThumbnail from "@/assets/pet_thumbnail3.png";
import { Box } from "@mui/material";
import Image from "next/image";
import CeoImage from "@/assets/profile.png";

const AboutUs = () => {
  return (
    <div>
      <Box
        className="border-orange-600 border-b-[8px] flex  items-center"
        sx={{
          backgroundImage: `url(${petThumbnail.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "30vh",
        }}
      >
        <h1 className="backdrop:filter backdrop-blur-lg  text-white font-black lg:text-5xl px-5 lg:py-10 bg-orange-600 bg-opacity-40 rounded-r-full">
          About Us
        </h1>
      </Box>
      <>
        {/* about info  */}
        <div className="container mx-auto  pt-24  space-y-5 lg:w-5/6 ">
          <h1 className="text-4xl font-mono font-semibold">
            We Are Their Voice
          </h1>
          <div
            className="border-orange-600 border-l-[8px] p-10 font-mono text-lg text-justify space-y-5
        bg-gradient-to-r from-orange-200 via-orange-100 to-white bg-opacity-10 rounded-lg "
          >
            <p>
              The Pet Adoption Platform has been at the forefront of animal
              rescue and protection since our founding as the first animal
              welfare organization in North America in 1866. For more than 150
              years, we have been the leading voice in animal welfare, bringing
              the critical protection of animals to the forefront of society.
            </p>
            <p>
              We’ve led the way in fighting cruelty, rescuing and securing
              adoptions for animals in need, and driving significant legislative
              change that protects their lives and welfare—ultimately
              transforming how Americans value and care for animals.
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
          className="bg-[#EFEFEF] "
          sx={{
            clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)",
          }}
        >
          <div className=" container mx-auto  py-24 my-20 flex justify-center items-start gap-24  ">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Image
                src={CeoImage}
                alt="CEO Image"
                height={200}
                width={200}
                className="rounded-full border-4 border-orange-600"
              />
              <h4 className="italic font-semibold">Rakib D Khan</h4>
              <p className="text-orange-600 font-mono">PAP President & CEO</p>
            </div>

            <div className="w-2/5 font-mono text-2xl text-justify leading-normal">
              <h3>
                <span className="text-6xl text-orange-600">"</span>
                Helping vulnerable animals and keeping pets in safe and loving
                homes requires a commitment from all of us—advocates, pet
                owners, shelters, leaders, and entire communities. When we work
                together under a common cause, we’re both saving lives and
                elevating our society and its laws to ensure cruelty victims and
                other at-risk animals receive the protection and care they
                deserve. Together, we can create a more humane world for all us.
                <span className="text-6xl flex justify-end text-orange-600">
                  "
                </span>
              </h3>
            </div>
          </div>
        </Box>
      </>
    </div>
  );
};

export default AboutUs;
