# POST /get-v2-everoute-licenses

**Resource:** [V2EverouteLicense](../resources/V2EverouteLicense.md)
**Operation ID:** `GetV2EverouteLicenses`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetV2EverouteLicensesRequestBody](../schemas/Get/GetV2EverouteLicensesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [V2EverouteLicense](../schemas/V2EverouteLicense/V2EverouteLicense.md)

## Security

- **Authorization**
