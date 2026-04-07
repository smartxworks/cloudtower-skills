# POST /get-everoute-clusters-connection

**Resource:** [EverouteCluster](../resources/EverouteCluster.md)
**Operation ID:** `GetEverouteClustersConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetEverouteClustersConnectionRequestBody](../schemas/Get/GetEverouteClustersConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[EverouteClusterConnection](../schemas/Everoute/EverouteClusterConnection.md)

## Security

- **Authorization**
