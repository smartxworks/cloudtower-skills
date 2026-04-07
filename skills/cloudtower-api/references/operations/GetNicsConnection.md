# POST /get-nics-connection

**Resource:** [Nic](../resources/Nic.md)
**Operation ID:** `GetNicsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNicsConnectionRequestBody](../schemas/Get/GetNicsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[NicConnection](../schemas/Nic/NicConnection.md)

## Security

- **Authorization**
