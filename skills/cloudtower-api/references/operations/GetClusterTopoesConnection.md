# POST /get-cluster-topoes-connection

**Resource:** [ClusterTopo](../resources/ClusterTopo.md)
**Operation ID:** `GetClusterTopoesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetClusterTopoesConnectionRequestBody](../schemas/Get/GetClusterTopoesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ClusterTopoConnection](../schemas/Cluster/ClusterTopoConnection.md)

## Security

- **Authorization**
