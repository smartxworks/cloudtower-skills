# POST /update-cluster-network-setting

**Resource:** [Cluster](../resources/Cluster.md)
**Operation ID:** `UpdateClusterNetworkSetting`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ClusterNetworkSettingUpdationParams](../schemas/Cluster/ClusterNetworkSettingUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Cluster_](../schemas/With/WithTask-Cluster.md)

## Security

- **Authorization**
