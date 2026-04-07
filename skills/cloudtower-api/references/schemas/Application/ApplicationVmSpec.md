# ApplicationVmSpec

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vmUsage` | [VmUsage](VmUsage.md) | No |  |
| `storages` | ApplicationVmSpecStorage[] | No |  |
| `status` | [ApplicationVmSpecStatus](ApplicationVmSpecStatus.md) | No |  |
| `publicKeys` | string[] | No |  |
| `network` | [ApplicationVmSpecNetwork](ApplicationVmSpecNetwork.md) | No |  |
| `name` | string | No |  |
| `memory_unit` | [ByteUnit](ByteUnit.md) | No |  |
| `memory` | integer (int64) | No |  |
| `internal` | boolean | No |  |
| `image` | string | No |  |
| `host` | string | No |  |
| `env` | ApplicationVmSpecEnv[] | No |  |
| `cpu` | integer (int32) | No |  |
| `cluster` | string | No |  |
| `cloudInitUserData` | string | No |  |

