import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const runningPipelines = [
  {
    id: 1,
    name: 'Data Ingestion',
    startTime: '2023-06-15 09:30:00',
    duration: '00:45:12',
    status: 'Running',
  },
  {
    id: 2,
    name: 'Model Training',
    startTime: '2023-06-15 10:15:00',
    duration: '01:30:45',
    status: 'Running',
  },
  {
    id: 3,
    name: 'API Deployment',
    startTime: '2023-06-15 11:00:00',
    duration: '00:15:30',
    status: 'Running',
  },
]

export function RunningPipelines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Currently Running Pipelines</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pipeline Name</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {runningPipelines.map((pipeline) => (
              <TableRow key={pipeline.id}>
                <TableCell className="font-medium">{pipeline.name}</TableCell>
                <TableCell>{pipeline.startTime}</TableCell>
                <TableCell>{pipeline.duration}</TableCell>
                <TableCell>{pipeline.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
