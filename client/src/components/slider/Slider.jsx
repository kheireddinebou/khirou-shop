import { sliderItems } from "../../data";
import {
  Container,
  Slide,
  Wrapper,
  Column,
  ShowNowBtn,
  Img,
  Arrow,
} from "./slider-styles";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useState } from "react";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSliderIndex = direction => {
    if (direction === "right") {
      setSliderIndex(
        sliderIndex === sliderItems.length - 1 ? 0 : sliderIndex + 1
      );
    } else if (direction === "left") {
      setSliderIndex(
        sliderIndex === 0 ? sliderItems.length - 1 : sliderIndex - 1
      );
    }
  };
  return (
    <Container>
      <Arrow direction="left">
        <MdOutlineArrowBackIosNew onClick={() => handleSliderIndex("left")} />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <Img src={item.img} alt={item.title} />
            <Column>
              <span>{item.title}</span>
              <p>{item.desc}</p>
              <ShowNowBtn>show now</ShowNowBtn>
            </Column>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right">
        <MdOutlineArrowForwardIos onClick={() => handleSliderIndex("right")} />
      </Arrow>
    </Container>
  );
};

export default Slider;
