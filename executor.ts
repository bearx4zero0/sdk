import { Workflow } from "./workflow"
import { recordMetrics } from "../compute/metrics"
import { distributeRewards } from "../incentives/rewards"

export function executeWorkflow(workflow: Workflow) {
  console.log(`🚀 Executing workflow: ${workflow.name}`)

  workflow.steps.forEach((step, index) => {
    console.log(`→ Step ${index + 1}`)
    step()
  })

  recordMetrics(workflow)
  distributeRewards(workflow.creator)
}
