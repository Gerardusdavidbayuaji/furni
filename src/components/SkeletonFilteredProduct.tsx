import { Skeleton } from "./ui/skeleton";
import SkeletonForm from "./SkeletonForm";
import SkeletonFormCheckbox from "./SkeletonFormCheckbox";
import SkeletonFormRange from "./SkeletonFormRange";

const SkeletonFilteredProduct = () => {
  return (
    <div className="grid md:grid-rows-4 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 lg:gap-2 md:gap-4 p-2 lg:h-60 md:h-96 w-full rounded-lg bg-[#DFE6E6] dark:bg-[#242322]">
      <SkeletonForm />
      <SkeletonForm />
      <SkeletonForm />
      <SkeletonForm />
      <SkeletonFormRange />
      <SkeletonFormCheckbox />
      <div className="flex justify-center items-center text-center">
        <Skeleton className="h-9 w-40" />
      </div>
      <div className="flex justify-center items-center text-center">
        <Skeleton className="h-9 w-40" />
      </div>
    </div>
  );
};

export default SkeletonFilteredProduct;
