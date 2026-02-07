export class ComputeNode {
  id: string

  constructor(id: string) {
    this.id = id
  }

  execute(task: Function) {
    console.log(`Node ${this.id} executing task`)
    return task()
  }
}
