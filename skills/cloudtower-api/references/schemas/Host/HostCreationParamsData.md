# HostCreationParamsData

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `vdses` | HostVdsConfig[] | No |  |
| `zbs_spec` | [ZbsSpec](ZbsSpec.md) | No |  |
| `ifaces` | HostBatchCreateIfaceInput[] | Yes |  |
| `disks` | HostBatchCreateDiskInput[] | Yes |  |
| `platform_password` | string | No |  |
| `platform_username` | string | No |  |
| `platform_ip` | string | No |  |
| `ipmi` | [HostBatchCreateIpmiInput](HostBatchCreateIpmiInput.md) | No |  |
| `hostname` | string | Yes |  |
| `host_uuid` | string | Yes |  |
| `host_ip` | string | Yes |  |

