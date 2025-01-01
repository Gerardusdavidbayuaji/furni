import { Skeleton } from "./ui/skeleton";

const SkeletonDetailProduct = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
      <Skeleton className="flex justify-center items-cente lg:w-96 lg:h-96 md:w-72 md:h-72 sm:w-56 sm:h-56 rounded-lg" />

      <div className="space-y-4 flex flex-col justify-center items-start">
        <div className="space-y-1">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-10 w-28" />
        </div>

        <div className="space-y-1">
          <Skeleton className="h-5 w-24" />
          <div className="flex items-center space-x-2 cursor-pointer ">
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>

        <div className="space-y-2 w-full">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
        </div>

        <div className="flex justify-end w-full space-x-2">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-32" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetailProduct;
