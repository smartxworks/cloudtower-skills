# POST /update-nic

**Resource:** [Nic](../resources/Nic.md)
**Operation ID:** `UpdateNic`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NicUpdationParams](../schemas/Nic/NicUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Nic_](../schemas/With/WithTask-Nic.md)

## Security

- **Authorization**
