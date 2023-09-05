"use client";

import { useGetPipelines } from "@/hooks/query/use-get-pipelines";
import { EmptyPlaceholder } from "./empty-placeholder";
import { PipelineCreateLink } from "./pipeline-create-link";
import { PipelineItem } from "./pipeline-item";
import { PipelineListLoading } from "./pipeline-list-loading";

const NoPipeline = () => (
  <EmptyPlaceholder>
    <EmptyPlaceholder.Icon name="pipeline" />
    <EmptyPlaceholder.Title>No pipelines created</EmptyPlaceholder.Title>
    <EmptyPlaceholder.Description>
      You don&apos;t have any pipelines. Start creating one.
    </EmptyPlaceholder.Description>
    <PipelineCreateLink variant="outline" />
  </EmptyPlaceholder>
);

export function PipelineList() {
  const { data, isLoading } = useGetPipelines();

  if (isLoading) return <PipelineListLoading />;

  if (data?.length === 0) return <NoPipeline />;

  return (
    <div className="divide-y divide-border rounded-md border">
      {data?.map((pipeline) => (
        <PipelineItem key={pipeline.id} pipeline={pipeline} />
      ))}
    </div>
  );
}
