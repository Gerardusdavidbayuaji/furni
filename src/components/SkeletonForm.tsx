import { Skeleton } from "./ui/skeleton";

const SkeletonForm = () => {
  return (
    <div className="rounded-md p-2 flex justify-start items-center text-center text-[#2B2B2B]">
      <div className="grid w-full max-w-sm gap-1.5">
        <Skeleton className="w-32 h-5" />
        <Skeleton className="w-full h-[39px]" />
      </div>
    </div>
  );
};

export default SkeletonForm;
