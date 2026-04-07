# ElfDataStore

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `description` | string | Yes |  |
| `external_use` | boolean | Yes |  |
| `id` | string | Yes |  |
| `internal` | boolean | Yes |  |
| `ip_whitelist` | string | Yes |  |
| `iscsi_target` | any | No |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `nfs_export` | any | No |  |
| `nvmf_subsystem` | any | No |  |
| `replica_num` | integer (int32) | Yes |  |
| `thin_provision` | boolean | Yes |  |
| `type` | [ElfDataStoreType](ElfDataStoreType.md) | Yes |  |

