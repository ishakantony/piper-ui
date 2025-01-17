import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-col flex-1 justify-center items-center p-4 pt-0">
        <h1 className="text-4xl">
          Streamline Your Systems Tasks with{' '}
          <span className="font-bold underline">Piper</span>
        </h1>
        <p className="text-gray-600">
          Manage pipelines, jobs, and runners seamlessly
        </p>
      </div>
    </React.Fragment>
  )
}
