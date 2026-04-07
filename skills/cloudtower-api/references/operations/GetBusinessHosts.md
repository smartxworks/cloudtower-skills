# POST /get-business-hosts

**Resource:** [BusinessHost](../resources/BusinessHost.md)
**Operation ID:** `GetBusinessHosts`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetBusinessHostsRequestBody](../schemas/Get/GetBusinessHostsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [BusinessHost](../schemas/Business/BusinessHost.md)

## Security

- **Authorization**
