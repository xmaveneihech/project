import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import "../../css/carousel.css"

const items = [
  {
    src: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/f/22b38d7eeed8a2d499cb0e6f056636.jpg/1216x370/?q=85',
    key: 1,
  },
  {
    src: 'https://thumbs.dfs.ivi.ru/storage37/contents/a/9/062ec8ddb3cd7561808d5a80b5f915.jpg/1216x370/?q=85',
    key: 2,
  },
  {
    src: 'https://thumbs.dfs.ivi.ru/storage9/contents/c/3/8b218568c0288ba287960104116348.jpg/1216x370/?q=85',
    key: 3,
  },
  {
    src: 'https://thumbs.dfs.ivi.ru/storage28/contents/0/b/2f8a47d3ab693bd0b048ec25d7f106.jpg/1216x370/?q=85',
    key: 3,
    
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption 
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel className='Carousel'
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;