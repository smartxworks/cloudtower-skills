# NvmfSubsystemCommonParams

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `business_host_groups` | [BusinessHostGroupWhereInput](BusinessHostGroupWhereInput.md) | No |  |
| `business_hosts` | [BusinessHostWhereInput](BusinessHostWhereInput.md) | No |  |
| `configuration_adaptive` | boolean | No |  |
| `configuration_method` | [ConfigurationMethod](ConfigurationMethod.md) | No |  |
| `encrypt_method` | [EncryptMethod](EncryptMethod.md) | No |  |
| `prioritized` | boolean | No |  |
| `ec_m` | number (double) | No |  |
| `ec_k` | number (double) | No |  |
| `resiliency_type` | [ResiliencyType](ResiliencyType.md) | No |  |
| `bps_wr_max_length` | integer (int64) | No |  |
| `bps_wr_max_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `bps_wr_max` | integer (int64) | No |  |
| `bps_rd_max_length` | integer (int64) | No |  |
| `bps_rd_max_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `bps_rd_max` | integer (int64) | No |  |
| `bps_max_length` | integer (int64) | No |  |
| `bps_max_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `bps_max` | integer (int64) | No |  |
| `iops_wr_max_length` | integer (int64) | No |  |
| `iops_wr_max` | integer (int64) | No |  |
| `iops_rd_max_length` | integer (int64) | No |  |
| `iops_rd_max` | integer (int64) | No |  |
| `iops_max_length` | integer (int64) | No |  |
| `iops_max` | integer (int64) | No |  |
| `bps_wr_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `bps_wr` | integer (int64) | No |  |
| `bps_rd_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `bps_rd` | integer (int64) | No |  |
| `bps_unit` | [BPSUnit](BPSUnit.md) | No |  |
| `bps` | integer (int64) | No |  |
| `iops_wr` | integer (int64) | No |  |
| `iops_rd` | integer (int64) | No |  |
| `iops` | integer (int64) | No |  |
| `description` | string | No |  |
| `nqn_whitelist` | string | No |  |
| `ip_whitelist` | string | No |  |

