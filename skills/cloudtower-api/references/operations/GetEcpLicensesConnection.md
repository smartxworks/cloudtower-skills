# POST /get-ecp-licenses-connection

**Resource:** [EcpLicense](../resources/EcpLicense.md)
**Operation ID:** `GetEcpLicensesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetEcpLicensesConnectionRequestBody](../schemas/Get/GetEcpLicensesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[EcpLicenseConnection](../schemas/Ecp/EcpLicenseConnection.md)

## Security

- **Authorization**
