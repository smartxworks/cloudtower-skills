# POST /get-node-topoes-connection

**Resource:** [NodeTopo](../resources/NodeTopo.md)
**Operation ID:** `GetNodeTopoesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNodeTopoesConnectionRequestBody](../schemas/Get/GetNodeTopoesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[NodeTopoConnection](../schemas/Node/NodeTopoConnection.md)

## Security

- **Authorization**
