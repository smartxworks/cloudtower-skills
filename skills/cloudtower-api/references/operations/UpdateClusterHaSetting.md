# POST /update-cluster-ha-setting

**Resource:** [Cluster](../resources/Cluster.md)
**Operation ID:** `UpdateClusterHaSetting`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ClusterHaUpdationParams](../schemas/Cluster/ClusterHaUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_ClusterSettings_](../schemas/With/WithTask-ClusterSettings.md)

## Security

- **Authorization**
