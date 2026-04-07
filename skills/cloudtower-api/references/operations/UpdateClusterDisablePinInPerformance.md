# POST /disable-cluster-pin-in-performance

**Resource:** [Cluster](../resources/Cluster.md)
**Operation ID:** `UpdateClusterDisablePinInPerformance`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ClusterDisablePinInPerformanceParams](../schemas/Cluster/ClusterDisablePinInPerformanceParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_ClusterPinInPerformanceInfo_](../schemas/With/WithTask-ClusterPinInPerformanceInfo.md)

## Security

- **Authorization**
