# POST /trigger-disk-blink

**Resource:** [Host](../resources/Host.md)
**Operation ID:** `TriggerDiskBlink`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [TriggerDiskBlinkParams](../schemas/Trigger/TriggerDiskBlinkParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Host_](../schemas/With/WithTask-Host.md)

## Security

- **Authorization**
