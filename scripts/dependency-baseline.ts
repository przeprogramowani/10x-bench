export function stableReleaseAtStart(packument: any, startedAt: string) {
  const deadline = Date.parse(startedAt);
  if (!Number.isFinite(deadline)) throw new Error('Invalid attempt start time');
  const versions = Object.keys(packument.versions ?? {}).filter(version => /^\d+\.\d+\.\d+$/.test(version) && Number.isFinite(Date.parse(packument.time?.[version])) && Date.parse(packument.time[version]) <= deadline);
  versions.sort((a, b) => { const left = a.split('.').map(Number), right = b.split('.').map(Number); for (let i = 0; i < 3; i++) if (left[i] !== right[i]) return right[i] - left[i]; return 0; });
  if (!versions.length) throw new Error('No stable release existed at attempt start');
  return { version: versions[0], major: Number(versions[0].split('.')[0]), publishedAt: packument.time[versions[0]] };
}
