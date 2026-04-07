# POST /get-cluster-pin-in-performance-info

**Resource:** [Cluster](../resources/Cluster.md)
**Operation ID:** `GetClusterPinInPerformanceInfo`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetClusterPinInPerformanceInfoRequestBody](../schemas/Get/GetClusterPinInPerformanceInfoRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ClusterPinInPerformanceInfo](../schemas/Cluster/ClusterPinInPerformanceInfo.md)

## Security

- **Authorization**
