# POST /get-v-2-everoute-licenses-connection

**Resource:** [V2EverouteLicense](../resources/V2EverouteLicense.md)
**Operation ID:** `GetV2EverouteLicensesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetV2EverouteLicensesConnectionRequestBody](../schemas/Get/GetV2EverouteLicensesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[V2EverouteLicenseConnection](../schemas/V2EverouteLicenseConnection/V2EverouteLicenseConnection.md)

## Security

- **Authorization**
