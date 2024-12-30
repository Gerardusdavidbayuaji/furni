import { Skeleton } from "./ui/skeleton";

const SkeletonFormRange = () => {
  return (
    <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
      <div className="text-[#2B2B2B] dark:text-[#FAFAFA] w-full space-y-1.5 text-sm font-medium">
        <div className="flex justify-between">
          <Skeleton className="w-32 h-5" />
          <Skeleton className="w-16 h-5" />
        </div>
        <Skeleton className="w-full h-6" />
        <div className="flex justify-between">
          <Skeleton className="w-16 h-5" />
          <Skeleton className="w-36 h-5" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonFormRange;
