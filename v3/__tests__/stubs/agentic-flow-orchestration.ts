/**
 * Stub for agentic-flow/orchestration.
 *
 * agentic-flow v2.x does not export the ./orchestration subpath.
 * This stub satisfies vite's module resolver during tests so the bridge
 * can gracefully resolve to null at runtime without throwing.
 */
export function createOrchestrator(..._args: any[]): any { return null; }
export function createOrchestrationClient(..._args: any[]): any { return null; }
export async function seedMemory(..._args: any[]): Promise<any> { return null; }
export async function searchMemory(..._args: any[]): Promise<any> { return null; }
export async function harvestMemory(..._args: any[]): Promise<any> { return null; }
