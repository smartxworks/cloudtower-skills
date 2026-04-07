# POST /get-vcenter-accounts

**Resource:** [VcenterAccount](../resources/VcenterAccount.md)
**Operation ID:** `GetVcenterAccounts`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVcenterAccountsRequestBody](../schemas/Get/GetVcenterAccountsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VcenterAccount](../schemas/Vcenter/VcenterAccount.md)

## Security

- **Authorization**
