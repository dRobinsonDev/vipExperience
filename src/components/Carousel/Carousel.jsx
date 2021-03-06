import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Carousel.css';

const items = [
  {
    src: "images/concert1.jpeg",
    altText: 'Feel like a VIP',
    caption: 'Enjoy Concerts in Style',
    subCaption:''
  },
  {
    src: "images/backstage.jpeg",
    altText: 'Up Close & Personal',
    caption: 'Backstage Access!',
    subCaption:''

  },
  {
    src: "images/concert3.jpeg",
    altText: '',
    caption: 'Enjoy Lavish Events',
    subCaption:''

  },
  {
    src: "images/party_dj.jpeg",
    altText: '',
    caption: 'Enjoy the afterparty',
    subCaption:''
  },
  {
    src: "images/inside_party_bus2.jpeg",
    altText: '',
    caption: 'Party in our Mega Party Bus',
    subCaption:''
  },
  {
    src: "images/concert_fireworks.jpeg",
    altText: '',
    caption: 'Spectactular Events',
    subCaption:''
  }
];

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img  className="carouselImg" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel className="blueBorder"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default MyCarousel;