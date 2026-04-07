# POST /get-licenses-connection

**Resource:** [License](../resources/License.md)
**Operation ID:** `GetLicensesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetLicensesConnectionRequestBody](../schemas/Get/GetLicensesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[LicenseConnection](../schemas/License/LicenseConnection.md)

## Security

- **Authorization**
