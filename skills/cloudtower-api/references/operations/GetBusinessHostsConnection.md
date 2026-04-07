# POST /get-business-hosts-connection

**Resource:** [BusinessHost](../resources/BusinessHost.md)
**Operation ID:** `GetBusinessHostsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBusinessHostsConnectionRequestBody](../schemas/Get/GetBusinessHostsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[BusinessHostConnection](../schemas/Business/BusinessHostConnection.md)

## Security

- **Authorization**
