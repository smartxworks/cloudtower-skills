# Vds

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `bond_mode` | string | Yes |  |
| `cluster` | [NestedCluster](NestedCluster.md) | Yes |  |
| `entityAsyncStatus` | any | No |  |
| `everoute_cluster` | any | No |  |
| `id` | string | Yes |  |
| `internal` | boolean | Yes |  |
| `labels` | NestedLabel[] | No |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `nics` | NestedNic[] | No |  |
| `ovsbr_name` | string | Yes |  |
| `type` | [NetworkType](NetworkType.md) | Yes |  |
| `vlans` | NestedVlan[] | No |  |
| `vlans_num` | integer (int32) | Yes |  |
| `work_mode` | string | No |  |

