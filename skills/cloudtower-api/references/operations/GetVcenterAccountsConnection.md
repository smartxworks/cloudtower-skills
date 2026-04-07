# POST /get-vcenter-accounts-connection

**Resource:** [VcenterAccount](../resources/VcenterAccount.md)
**Operation ID:** `GetVcenterAccountsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVcenterAccountsConnectionRequestBody](../schemas/Get/GetVcenterAccountsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VcenterAccountConnection](../schemas/Vcenter/VcenterAccountConnection.md)

## Security

- **Authorization**
