'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

const successRateData = [
  { name: 'Jan', rate: 0.65 },
  { name: 'Feb', rate: 0.75 },
  { name: 'Mar', rate: 0.82 },
  { name: 'Apr', rate: 0.78 },
  { name: 'May', rate: 0.86 },
  { name: 'Jun', rate: 0.9 },
]

const pipelineRunsData = [
  { name: 'Mon', runs: 12 },
  { name: 'Tue', runs: 18 },
  { name: 'Wed', runs: 15 },
  { name: 'Thu', runs: 20 },
  { name: 'Fri', runs: 25 },
  { name: 'Sat', runs: 10 },
  { name: 'Sun', runs: 8 },
]

export function PipelineStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Success Rate</CardTitle>
          <CardDescription>
            Monthly success rate over the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              rate: {
                label: 'Success Rate',
                color: 'hsl(var(--chart-1))',
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={successRateData}>
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value * 100}%`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="var(--color-rate)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Runs</CardTitle>
          <CardDescription>
            Number of pipeline runs per day this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              runs: {
                label: 'Pipeline Runs',
                color: 'hsl(var(--chart-2))',
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipelineRunsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="runs" fill="var(--color-runs)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
