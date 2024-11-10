import { Skeleton } from "./ui/skeleton";
import { Card } from "./ui/card";

const SkeletonFeaturedProducts = () => {
  return (
    <article className="flex flex-col justify-start md:justify-center group relative py-5">
      <Card className="bg-[#DFE6E6] dark:bg-[#242322] transform duration-500 mx-5">
        <div className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl overflow-hidden">
          <Skeleton className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="flex flex-col justify-center items-center h-auto my-2">
          <Skeleton className="text-[#2B2B2B] dark:text-[#FAFAFA]" />
          <Skeleton className="font-medium lg:text-base md:text-sm" />
        </div>
      </Card>
    </article>
  );
};

export default SkeletonFeaturedProducts;
