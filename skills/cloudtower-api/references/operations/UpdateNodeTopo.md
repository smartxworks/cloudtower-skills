# POST /move-node-topo

**Resource:** [NodeTopo](../resources/NodeTopo.md)
**Operation ID:** `UpdateNodeTopo`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NodeTopoUpdationParams](../schemas/Node/NodeTopoUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_NodeTopo_](../schemas/With/WithTask-NodeTopo.md)

## Security

- **Authorization**
