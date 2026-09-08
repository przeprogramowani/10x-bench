export async function getWorkerEnv(): Promise<Record<string, unknown>> {
  try {
    const mod = (await import('cloudflare:workers')) as { env?: Record<string, unknown> };
    return mod.env ?? {};
  } catch {
    return {};
  }
}
