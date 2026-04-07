# ClusterNetworkSettingUpdationParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `data` | object | Yes |  |
| `where` | [ClusterWhereInput](ClusterWhereInput.md) | Yes |  |

## Nested Fields

### `data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mgt_ip_mapper` | MgtIpMapper[] | No |  |
| `mgt_netmask` | string | No |  |
| `mgt_gateway` | string | No |  |
| `ntp_mode` | [NtpMode](NtpMode.md) | No |  |
| `ntp_servers` | string[] | No |  |
| `dns` | string[] | No |  |
| `iscsi_vip` | string | No |  |
| `management_vip` | string | No |  |

