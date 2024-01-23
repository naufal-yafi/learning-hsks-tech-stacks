import EachRender from "@lib/EachRender";
import Utils from "@lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export const Carousel = (props: { images: string[] }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <EachRender
          of={props.images}
          render={(image: string) => (
            <Image
              src={Utils.fixUrlImg(image)}
              alt="product image"
              width={800}
              height={1200}
              quality={100}
              className="w-full"
            />
          )}
        />
      </div>
    </div>
  );
};
