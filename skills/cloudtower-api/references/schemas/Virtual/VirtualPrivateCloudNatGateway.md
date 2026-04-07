# VirtualPrivateCloudNatGateway

**Type:** object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `dnat_rules` | NestedVpcDnatRuleType[] | No |  |
| `enable_dnat` | boolean | No |  |
| `enable_snat` | boolean | No |  |
| `entityAsyncStatus` | any | No |  |
| `external_ip` | string | No |  |
| `external_ips` | NestedVpcGatewaysCommonExternalIpsType[] | No |  |
| `external_subnet` | any | No |  |
| `external_subnet_group` | any | No |  |
| `id` | string | Yes |  |
| `local_id` | string | Yes |  |
| `name` | string | Yes |  |
| `vpc` | [NestedVirtualPrivateCloud](NestedVirtualPrivateCloud.md) | Yes |  |

