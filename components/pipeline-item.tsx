import Link from "next/link";

import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/utils";
import { PipelineResponse } from "@/lib/validations/pipeline-response";

type PipelineItemProps = {
  pipeline: PipelineResponse;
};

export function PipelineItem({ pipeline }: PipelineItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/pipelines/${pipeline.id}`}
          className="font-semibold hover:underline"
        >
          {pipeline.name}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(pipeline.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}

PipelineItem.Skeleton = function PipelineItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
