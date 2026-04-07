# POST /update-cluster-license

**Resource:** [Cluster](../resources/Cluster.md)
**Operation ID:** `UpdateClusterLicense`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ClusterLicenseUpdationParams](../schemas/Cluster/ClusterLicenseUpdationParams.md)

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
