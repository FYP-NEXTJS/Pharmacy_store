"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import CarouselCard from "../CarouselCard/page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define the structure for a single product item
interface CarouselCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

// Accept an array of products as props
interface CarouselPluginProps {
  products: CarouselCardProps[]; // Define the 'products' prop
}

export function CarouselPlugin({ products }: CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((item, index) => (
          <CarouselItem key={index}>
            <CarouselCard
              medTitle={item.name}
              description={item.description}
              price={item.price}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
