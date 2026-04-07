# POST /create-rack-topo

**Resource:** [RackTopo](../resources/RackTopo.md)
**Operation ID:** `CreateRackTopo`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [RackTopoCreationParams](../schemas/Rack/RackTopoCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_RackTopo_](../schemas/With/WithTask-RackTopo.md)

## Security

- **Authorization**
