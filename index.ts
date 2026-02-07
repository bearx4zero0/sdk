import { registerWorkflow } from "./network/registry"
import { executeWorkflow } from "./workflow/executor"
import sampleWorkflow from "./workflow/sample.workflow"

console.log("🐻 Bearx402 Node Starting...")

registerWorkflow(sampleWorkflow)
executeWorkflow(sampleWorkflow)
