import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { PipelineCards } from '@/features/pipeline-dashboard/pipeline-cards'
import { PipelineStats } from '@/features/pipeline-dashboard/pipeline-stats'
import { RunningPipelines } from '@/features/pipeline-dashboard/running-pipelines'
import React from 'react'

export default function PipelineDashboardPage() {
  return (
    <React.Fragment>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Pipelines</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="space-y-4 p-4 pt-0">
        <h1 className="text-3xl font-bold">Pipeline Dashboard</h1>
        <PipelineStats />
        <PipelineCards />
        <RunningPipelines />
      </div>
    </React.Fragment>
  )
}
