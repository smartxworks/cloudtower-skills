# POST /get-everoute-clusters

**Resource:** [EverouteCluster](../resources/EverouteCluster.md)
**Operation ID:** `GetEverouteClusters`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetEverouteClustersRequestBody](../schemas/Get/GetEverouteClustersRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [EverouteCluster](../schemas/Everoute/EverouteCluster.md)

## Security

- **Authorization**
