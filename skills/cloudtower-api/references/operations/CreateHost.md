# POST /create-host

**Resource:** [Host](../resources/Host.md)
**Operation ID:** `CreateHost`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [HostCreationParams](../schemas/Host/HostCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_BatchHosts_](../schemas/With/WithTask-BatchHosts.md)

## Security

- **Authorization**
