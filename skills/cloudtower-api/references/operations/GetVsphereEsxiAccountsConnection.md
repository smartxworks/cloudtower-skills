# POST /get-vsphere-esxi-accounts-connection

**Resource:** [VsphereEsxiAccount](../resources/VsphereEsxiAccount.md)
**Operation ID:** `GetVsphereEsxiAccountsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVsphereEsxiAccountsConnectionRequestBody](../schemas/Get/GetVsphereEsxiAccountsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VsphereEsxiAccountConnection](../schemas/Vsphere/VsphereEsxiAccountConnection.md)

## Security

- **Authorization**
