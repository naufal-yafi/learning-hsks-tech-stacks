import { fixUrlImg } from "@helper/common";
import { EachRender } from "@lib/common";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Carousel = ({ images }: { images: string[] }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div id="list__carousel__image" className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <EachRender
          of={images}
          render={(image: string) => (
            <Image
              src={fixUrlImg(image)}
              alt="product image"
              sizes="100vw"
              width={500}
              height={220}
              quality={80}
              className="w-full"
            />
          )}
        />
      </div>
    </div>
  );
};

export default Carousel;
