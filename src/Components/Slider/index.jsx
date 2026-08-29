import { use, useEffect, useState } from "react";
import "./slider.css";

export default function Slider({ imageRender }) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [left, isLeft] = useState(false);
  const [onSwitch, isOnSwitch] = useState(false);
  // const [directionClass, setDirectionClass] = useState("");
  const [nextEnterClass, setNextEnterClass] = useState("");
  const [nextLeaveClass, setNextLeaveClass] = useState("");
  const [currentImageAni, setCurrentImageAni] = useState(currentImage);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentImage(0);
    console.log(imageRender[currentImage]);
    setLoading(true);
    setImages(imageRender);
    setLoading(false);
  }, [imageRender]);

  useEffect(() => {
    const current = document.querySelector(".image");
    console.log(current);
  }, [onSwitch]);

  function handlePrev() {
    isOnSwitch(true);
    setCurrentImageAni(
      currentImageAni === 0 ? imageRender.length - 1 : currentImage - 1,
    );
    setNextLeaveClass("prev-leave-ani");
    setTimeout(() => {
      setNextEnterClass("prev-enter-ani");
    }, 0);

    setTimeout(() => {
      setCurrentImage((currentImage) =>
        currentImage === 0 ? imageRender.length - 1 : currentImage - 1,
      );

      setNextLeaveClass("");
      setNextEnterClass("");
      isOnSwitch(false);
    }, 500);
  }
  function handleNext() {
    isOnSwitch(true);
    setCurrentImageAni(
      currentImageAni === images.length - 1 ? 0 : currentImage + 1,
    );
    setNextLeaveClass("next-leave-ani");

    console.log(currentImageAni);
    setTimeout(() => {
      setNextEnterClass("next-enter-ani");
    }, 0);
    setTimeout(() => {
      setCurrentImage((currentImage) =>
        currentImage === imageRender.length - 1 ? 0 : currentImage + 1,
      );
      // setNextEnterClass("");
      setNextLeaveClass("");
      setNextEnterClass("");
      isOnSwitch(false);
    }, 500);
  }

  useEffect(() => {
    if (nextEnterClass.includes("enter")) {
      setTimeout(() => {
        setNextEnterClass("");

        setNextLeaveClass("");
      }, 500);
    }
  }, [nextEnterClass]);

  return (
    <div className="slider-con">
      <div className="slider-wrapper">
        <button
          className="left-arrow"
          disabled={onSwitch}
          onClick={handlePrev}
        ></button>
        <div className="slider">
          {images.map((image, index) => {
            return (
              <div
                key={image.id}
                style={{ backgroundImage: `url(${image.source})` }}
                className={
                  index === currentImage
                    ? `image ${nextLeaveClass}`
                    : "no-image"
                }
              ></div>
            );
          })}
          <div
            className={`image-ani ${nextEnterClass}`}
            style={{
              backgroundImage: `url(${imageRender[currentImageAni].source})`,
            }}
          ></div>
        </div>
        <button
          className="right-arrow"
          disabled={onSwitch}
          onClick={handleNext}
        ></button>
        <div className="controls">
          {images.map((_, index) => {
            return (
              <button
                key={index}
                className={
                  index === currentImage ? "control active" : "control"
                }
                onClick={() => setCurrentImage(index)}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
