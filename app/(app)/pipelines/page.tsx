import { DashboardHeader } from "@/components/header";
import { PipelineCreateLink } from "@/components/pipeline-create-link";
import { PipelineList } from "@/components/pipeline-list";
import { DashboardShell } from "@/components/shell";

export const metadata = {
  title: "Pipelines",
};

export default function PipelinesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Pipelines"
        text="Create and manage your pipelines."
      >
        <PipelineCreateLink />
      </DashboardHeader>
      <div>
        <PipelineList />
      </div>
    </DashboardShell>
  );
}
