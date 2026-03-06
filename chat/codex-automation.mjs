export const CODEX_AUTOMATION_MODES = [
  'read-only',
  'workspace-write',
  'danger-full-access',
];

export const DEFAULT_CODEX_AUTOMATION_MODE = 'danger-full-access';

export function normalizeCodexAutomationMode(mode) {
  return CODEX_AUTOMATION_MODES.includes(mode)
    ? mode
    : DEFAULT_CODEX_AUTOMATION_MODE;
}

export function buildCodexAutomationArgs(mode) {
  const normalized = normalizeCodexAutomationMode(mode);

  switch (normalized) {
    case 'read-only':
      return ['--sandbox', 'read-only'];
    case 'workspace-write':
      return ['--sandbox', 'workspace-write'];
    case 'danger-full-access':
    default:
      return ['--dangerously-bypass-approvals-and-sandbox'];
  }
}
