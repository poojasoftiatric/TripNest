import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/ava-1.jpg";
import avatar2 from "../../assets/images/ava-2.jpg";
import avatar3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      pic: avatar1,
      name: "Liam Carter",
      description:
        "Our adventure with TripNest was unforgettable. The guides, the hidden spots — everything felt exclusive and thoughtful. Highly recommended!",
    },
    {
      pic: avatar2,
      name: "Sophia Lee",
      description:
        "From planning to exploring, TripNest made it seamless. Every moment was picture-perfect. I’m already planning my next escape!",
    },
    {
      pic: avatar3,
      name: "Noah Kim",
      description:
        "I’ve traveled with many agencies, but TripNest stands out for their personal touch and stunning destinations. A dream come true!",
    },
    {
      pic: avatar1,
      name: "Ava Patel",
      description:
        "I loved every detail of my TripNest trip. The itinerary was balanced and unique. Memories for a lifetime!",
    },
    {
      pic: avatar3,
      name: "Lucas Wang",
      description:
        "TripNest made my solo trip feel safe and exciting. New friends, new experiences — can’t wait to travel again with them.",
    },
  ]; 

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {testimonialsData.map((data, index) => (
        <div className=" py-4 px-6">
          <p>{data.description}</p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-[75px] h-[55px] rounded-md overflow-hidden">
              <img
                src={data.pic}
                className="w-full h-full object-cover rounded-2"
                alt=""
              />
            </div>
            <div>
              <div>
                <h5 className="mb-0 mt-3">{data.name}</h5>
                <p className="text-GrayColor">Customer</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
