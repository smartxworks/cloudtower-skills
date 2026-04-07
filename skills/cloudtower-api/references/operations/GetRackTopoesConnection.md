# POST /get-rack-topoes-connection

**Resource:** [RackTopo](../resources/RackTopo.md)
**Operation ID:** `GetRackTopoesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetRackTopoesConnectionRequestBody](../schemas/Get/GetRackTopoesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[RackTopoConnection](../schemas/Rack/RackTopoConnection.md)

## Security

- **Authorization**
