# POST /get-everoute-licenses-connection

**Resource:** [EverouteLicense](../resources/EverouteLicense.md)
**Operation ID:** `GetEverouteLicensesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetEverouteLicensesConnectionRequestBody](../schemas/Get/GetEverouteLicensesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[EverouteLicenseConnection](../schemas/Everoute/EverouteLicenseConnection.md)

## Security

- **Authorization**
