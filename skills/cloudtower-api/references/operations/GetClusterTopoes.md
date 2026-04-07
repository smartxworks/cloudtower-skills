# POST /get-cluster-topoes

**Resource:** [ClusterTopo](../resources/ClusterTopo.md)
**Operation ID:** `GetClusterTopoes`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetClusterTopoesRequestBody](../schemas/Get/GetClusterTopoesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ClusterTopo](../schemas/Cluster/ClusterTopo.md)

## Security

- **Authorization**
