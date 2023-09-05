import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Helicopter view of your pipelines."
      />
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="dashboard" />
          <EmptyPlaceholder.Title>Coming soon</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            This feature is still under development, come back soon.
          </EmptyPlaceholder.Description>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  );
}
