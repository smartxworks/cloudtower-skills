# POST /get-nics

**Resource:** [Nic](../resources/Nic.md)
**Operation ID:** `GetNics`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNicsRequestBody](../schemas/Get/GetNicsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [Nic](../schemas/Nic/Nic.md)

## Security

- **Authorization**
