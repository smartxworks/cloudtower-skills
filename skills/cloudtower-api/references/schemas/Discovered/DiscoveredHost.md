# DiscoveredHost

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `all_flash` | boolean | Yes |  |
| `deployed` | boolean | No |  |
| `dimms` | NestedDiscoveredHostDimms[] | No |  |
| `disks` | NestedDiscoveredHostDisk[] | Yes |  |
| `host_ip` | string | Yes |  |
| `host_uuid` | string | Yes |  |
| `hostname` | string | Yes |  |
| `ifaces` | NestedDiscoveredHostIface[] | Yes |  |
| `ipmi_ip` | string | No |  |
| `is_os_in_raid1` | boolean | No |  |
| `product` | string | No |  |
| `serial` | string | Yes |  |
| `sockets` | integer (int32) | Yes |  |
| `version` | string | Yes |  |
| `zbs_spec` | string | No |  |

