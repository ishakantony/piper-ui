import { PipelineItem } from "./pipeline-item";

export function PipelineListLoading() {
  return (
    <div className="divide-border-200 divide-y rounded-md border">
      <PipelineItem.Skeleton />
      <PipelineItem.Skeleton />
      <PipelineItem.Skeleton />
      <PipelineItem.Skeleton />
      <PipelineItem.Skeleton />
    </div>
  );
}
