# VmPlacementGroupUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [VmPlacementGroupWhereInput](VmPlacementGroupWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vm_vm_policy` | [VmVmPolicy](VmVmPolicy.md) | No |  |
| `vms` | [VmWhereInput](VmWhereInput.md) | No |  |
| `prefer_hosts` | [HostWhereInput](HostWhereInput.md) | No |  |
| `must_hosts` | [HostWhereInput](HostWhereInput.md) | No |  |
| `vm_host_prefer_enabled` | boolean | No |  |
| `vm_host_must_policy` | boolean | No |  |
| `vm_host_must_enabled` | boolean | No |  |
| `vm_host_prefer_policy` | boolean | No |  |
| `vm_vm_policy_enabled` | boolean | No |  |
| `name` | string | No |  |
| `description` | string | No |  |
| `enabled` | boolean | No |  |

