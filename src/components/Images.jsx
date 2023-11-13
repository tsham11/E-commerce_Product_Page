import { useState, useEffect } from "react";
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//photos
import Img1 from "../assets/image-product-1.jpg";
import Img1th from "../assets/image-product-1-thumbnail.jpg";
import Img2 from "../assets/image-product-2.jpg";
import Img2th from "../assets/image-product-2-thumbnail.jpg";
import Img3 from "../assets/image-product-3.jpg";
import Img3th from "../assets/image-product-3-thumbnail.jpg";
import Img4 from "../assets/image-product-4.jpg";
import Img4th from "../assets/image-product-4-thumbnail.jpg";
import Prev from "../assets/icon-prev.svg";
import Next from "../assets/icon-next.svg";

const PrevArrow = (props) => (
  <img
    src={Prev}
    alt="previous"
    className="arrow prev"
    onClick={props.onClick}
  />
);

const NextArrow = (props) => (
  <img src={Next} alt="next" className="arrow next" onClick={props.onClick} />
);

function Images() {
  const photos = [Img1, Img2, Img3, Img4];
  const thumbnails = [Img1th, Img2th, Img3th, Img4th];
  const [newImg, setNewImg] = useState(Img1);
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = 1280;
      setisMobile(window.innerWidth < mobileBreakpoint);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changePhoto = (image) => {
    setNewImg(image);
  };

  return (
    <>
      {isMobile ? (
        <Slider
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          className="slider-container w-[375px] h-[345px]"
        >
          {photos.map((el, i) => (
            <img src={el} key={i} alt="photo" className="w-[377] h-[345px]" />
          ))}
        </Slider>
      ) : (
        <div className="flex flex-col gap-8">
          <img
            src={newImg}
            alt="image"
            className="w-28rem h-[445px] rounded-xl hover:cursor-pointer"
          />
          <div className="flex w-28rem justify-between">
            {thumbnails.map((el, i) => (
              <div
                key={i}
                className={`${
                  photos[i] === newImg
                    ? "border-2 rounded-xl border-orange"
                    : ""
                }`}
              >
                <img
                  src={el}
                  alt={i}
                  className={`w-20 h-20 rounded-lg hover:opacity-50 cursor-pointer ${
                    photos[i] === newImg ? "opacity-50" : ""
                  }`}
                  onClick={() => changePhoto(photos[i])}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Images;
