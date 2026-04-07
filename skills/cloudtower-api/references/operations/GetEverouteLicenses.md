# POST /get-everoute-licenses

**Resource:** [EverouteLicense](../resources/EverouteLicense.md)
**Operation ID:** `GetEverouteLicenses`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetEverouteLicensesRequestBody](../schemas/Get/GetEverouteLicensesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [EverouteLicense](../schemas/Everoute/EverouteLicense.md)

## Security

- **Authorization**
