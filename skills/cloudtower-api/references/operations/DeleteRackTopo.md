# POST /delete-rack-topo

**Resource:** [RackTopo](../resources/RackTopo.md)
**Operation ID:** `DeleteRackTopo`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [RackTopoDeletionParams](../schemas/Rack/RackTopoDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteRackTopo_](../schemas/With/WithTask-DeleteRackTopo.md)

## Security

- **Authorization**
