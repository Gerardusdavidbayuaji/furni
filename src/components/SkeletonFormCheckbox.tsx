import { Skeleton } from "./ui/skeleton";

const SkeletonFormCheckbox = () => {
  return (
    <div className="rounded-md p-2 flex flex-col justify-center items-center text-center space-y-1.5">
      <Skeleton className="w-32 h-5" />
      <Skeleton className="h-5 w-5" />
    </div>
  );
};

export default SkeletonFormCheckbox;
