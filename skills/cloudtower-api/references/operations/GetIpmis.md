# POST /get-ipmis

**Resource:** [Ipmi](../resources/Ipmi.md)
**Operation ID:** `GetIpmis`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetIpmisRequestBody](../schemas/Get/GetIpmisRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [Ipmi](../schemas/Ipmi/Ipmi.md)

## Security

- **Authorization**
