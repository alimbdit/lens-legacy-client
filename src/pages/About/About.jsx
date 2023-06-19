import about1 from "../../assets/images/About/About1.jpg";
import about2 from "../../assets/images/About/About2.jpeg";

const About = () => {
  return (
    <div className="lg:px-10 pb-20  dark:bg-cyan-900 dark:text-white py-16 lg:py-28">
      <div className="flex flex-col-reverse lg:flex-row w-full gap-5 lg:gap-x-10 lg:px-20">
        <div className="w-full">
          <h3 className="dark:text-white text-4xl font-bold text-gray-800">
            Our Mission
          </h3>
          <p className="dark:text-white text-gray-800 text-lg mt-3">
            our mission is to inspire and empower aspiring photographers. We
            provide education, guidance, and a supportive environment for
            campers to develop their technical skills, explore their creativity,
            and cultivate a passion for photography. We foster a community of
            like-minded individuals, encourage exploration of diverse subjects
            and techniques, and instill ethical practices in our campers.
          </p>
        </div>
        <div className="w-full relative">
          <img src={about1} alt="" className="rounded-e-full" />
          <div className="flex gap-5 px-10 text-center py-4 rounded-full bg-info text-white justify-center w-fit absolute -bottom-10 -left-10">
            <div>
              <p className="font-medium">David Martinez </p>
              <p>Co-Founder </p>
              <p>Executive Chairperson </p>
            </div>
            <div>
              <p className="font-medium">Daniel Brown </p>
              <p>Co-Founder </p>
              <p>CTO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-info bg-opacity-5 pb-20 my-28">
        <h3 className="dark:text-white text-4xl font-bold pt-20 text-gray-800 text-center mt-36 mb-10 ">
          Our Story
        </h3>
        <div className="flex items-center flex-col-reverse lg:flex-row w-full gap-5 lg:gap-x-10 lg:px-20">
          <div className="w-full ">
            <img src={about2} alt="" className="h-[700px]" />
          </div>
          <div className="w-full">
            <p className="dark:text-white text-gray-800 text-lg mt-3">
              Our photography summer camp is the result of a shared passion for
              photography and a collective vision to inspire young
              photographers. Nestled in a stunning natural setting, our camp
              offers an immersive experience where campers can learn and grow
              both technically and artistically. Through a carefully crafted
              curriculum, we provide campers with the knowledge and skills to
              capture the world around them in remarkable images. We go beyond
              the technical aspects of photography, encouraging campers to
              explore their unique perspectives and unleash their creativity.
              <br />
              The campsite itself is a haven of natural beauty, surrounded by
              picturesque landscapes that serve as the perfect backdrop for
              photography adventures. We believe that immersing ourselves in
              nature enhances the learning experience, allowing campers to
              connect with their surroundings and capture moments that tell
              captivating visual stories.
              <br />
              With a team of experienced photographers and instructors, we
              foster a supportive and inclusive environment where campers can
              thrive. We encourage collaboration and peer learning, creating a
              vibrant community of young photographers who inspire and learn
              from one another.
              <br />
              Our photography summer camp is not just about learning the craft;
              it&apos;s about fostering a lifelong passion for photography. We aim to
              ignite a spark in each camper, empowering them to continue their
              photographic journey long after their time at camp ends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
