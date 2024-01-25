import EachRender from "@lib/EachRender";
import Utils from "@lib/utils";
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
              src={Utils.fixUrlImg(image)}
              alt="product image"
              sizes="100vw"
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
