import {Skeleton} from "@heroui/react";

export function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="h-8 w-8 bg-[#22D3EE] shrink-0 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-2 w-32 bg-[#22D3EE] rounded-lg" />
        <Skeleton className="h-2 w-20 bg-[#22D3EE] rounded-lg" />
      </div>
    </div>
  );
}