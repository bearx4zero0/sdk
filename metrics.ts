import { Workflow } from "../workflow/workflow"

export function recordMetrics(workflow: Workflow) {
  console.log(`📊 Metrics recorded for ${workflow.name}`)
}
