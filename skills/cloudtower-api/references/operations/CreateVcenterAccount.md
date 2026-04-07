# POST /create-vcenter-account

**Resource:** [VcenterAccount](../resources/VcenterAccount.md)
**Operation ID:** `CreateVcenterAccount`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [CreateVcenterAccountParams](../schemas/Create/CreateVcenterAccountParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[WithTask_VcenterAccount_](../schemas/With/WithTask-VcenterAccount.md)

## Security

- **Authorization**
