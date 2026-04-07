# POST /get-cluster-storage-info

**Resource:** [Cluster](../resources/Cluster.md)
**Operation ID:** `GetClusterStorageInfo`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetClusterStorageInfoRequestBody](../schemas/Get/GetClusterStorageInfoRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ClusterStorageInfo](../schemas/Cluster/ClusterStorageInfo.md)

## Security

- **Authorization**
