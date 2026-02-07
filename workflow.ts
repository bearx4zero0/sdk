export type WorkflowStep = () => any

export interface Workflow {
  name: string
  steps: WorkflowStep[]
  creator: string
}
