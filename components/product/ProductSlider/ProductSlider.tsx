import React, { FC, Children, isValidElement, useState } from "react";
import style from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react"

const ProductSlider: FC = ({ children }) => {
    const [_, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        loop: true,
        slideChanged(s) {
         setCurrentSlide(s.details().relativeSlide)
        },
      })
  return (
    <div className={style.root}>
      <div ref={sliderRef as React.RefObject<HTMLDivElement>} className="keen-slider h-full transition-opacity">
        <button className={[style.leftControl, style.control].join(" ")} onClick={slider?.prev} />
        <button className={[style.rightControl, style.control].join(" ")} onClick={slider?.next} />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return React.cloneElement(child, {
              className: `${
                child.props.className ? child.props.className : ""
              } keen-slider__slide`,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
