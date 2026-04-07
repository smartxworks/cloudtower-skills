# POST /get-node-topoes

**Resource:** [NodeTopo](../resources/NodeTopo.md)
**Operation ID:** `GetNodeTopoes`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNodeTopoesRequestBody](../schemas/Get/GetNodeTopoesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [NodeTopo](../schemas/Node/NodeTopo.md)

## Security

- **Authorization**
