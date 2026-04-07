# POST /get-licenses

**Resource:** [License](../resources/License.md)
**Operation ID:** `GetLicenses`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetLicensesRequestBody](../schemas/Get/GetLicensesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [License](../schemas/License/License.md)

## Security

- **Authorization**
