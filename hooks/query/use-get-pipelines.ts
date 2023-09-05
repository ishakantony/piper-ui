import { paginatedPipelineResponseSchema } from "@/lib/validations/pipeline-response";
import { useQuery } from "@tanstack/react-query";

const fetchPipelines = async () => {
  const parsed = await fetch("/api/pipelines").then((res) => res.json());

  const validatedData = paginatedPipelineResponseSchema.parse(parsed);

  return validatedData.content;
};

const useGetPipelines = () => {
  return useQuery({
    queryKey: ["pipelines"],
    queryFn: () => fetchPipelines(),
  });
};

export { fetchPipelines, useGetPipelines };
