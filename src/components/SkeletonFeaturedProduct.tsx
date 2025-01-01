import { Skeleton } from "./ui/skeleton";
import { Card } from "./ui/card";

const SkeletonFeaturedProducts = () => {
  return (
    <article className="flex flex-col justify-start md:justify-center group relative py-5">
      <Card className="bg-[#DFE6E6] dark:bg-[#242322] mx-5">
        <Skeleton className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl rounded-b-none" />
        <Skeleton className="rounded-xl w-full" />
        <div className="flex flex-col justify-center items-center h-auto my-2 space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-6 w-24" />
        </div>
      </Card>
    </article>
  );
};

export default SkeletonFeaturedProducts;
