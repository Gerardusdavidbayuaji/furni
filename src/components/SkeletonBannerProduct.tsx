import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { Skeleton } from "./ui/skeleton";

const SkeletonBannerProduct = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="relative">
          <div className="grid min-h-[330px] w-full place-items-center overflow-hidden rounded-lg">
            <Skeleton className="relative w-full h-[330px] overflow-hidden flex justify-center items-center" />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default SkeletonBannerProduct;
