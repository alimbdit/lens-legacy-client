const TestimonialSlider = ({ testimonial }) => {
  console.log(testimonial);
  const { id, userPhoto, userName, designation, review } = testimonial;
  return (
    <div className="text-center">
      <div>
        <h1 className="text-5xl my-4 ">Testimonial </h1>
      </div>
      <p className="lg:w-1/2 px-5 mx-auto mt-10 mb-7 font-light text-lg">
        {review}
      </p>
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src={userPhoto} />
        </div>
      </div>

      <p className=" mt-3 pb-5 lg:pb-0 font-extralight ">
        {userName}, {designation}
      </p>
    </div>
  );
};

export default TestimonialSlider;
