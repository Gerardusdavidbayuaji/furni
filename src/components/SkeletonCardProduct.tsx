import { Skeleton } from "./ui/skeleton";

interface propsSkeletonAllProduct {
  count?: number;
}

const SkeletonCardProduct = ({ count = 4 }: propsSkeletonAllProduct) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-[#DFE6E6] dark:bg-[#242322] h-full flex flex-col group relative rounded-xl"
        >
          <Skeleton className="relative w-full h-64 md:h-48 lg:h-64 rounded-tr-xl rounded-tl-xl rounded-b-none" />
          <div className="flex flex-col justify-center items-center h-auto my-2 space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCardProduct;
