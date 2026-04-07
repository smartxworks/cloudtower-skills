# POST /get-hosts-connection

**Resource:** [Host](../resources/Host.md)
**Operation ID:** `GetHostsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetHostsConnectionRequestBody](../schemas/Get/GetHostsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[HostConnection](../schemas/Host/HostConnection.md)

## Security

- **Authorization**
