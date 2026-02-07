import { Workflow } from "../workflow/workflow"

const registry: Workflow[] = []

export function registerWorkflow(workflow: Workflow) {
  registry.push(workflow)
  console.log(`📦 Workflow registered: ${workflow.name}`)
}

export function listWorkflows() {
  return registry
}
