# POST /enter-maintenance-mode-precheck

**Resource:** [Host](../resources/Host.md)
**Operation ID:** `EnterMaintenanceModePreCheck`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [EnterMaintenanceModeCheckParams](../schemas/Enter/EnterMaintenanceModeCheckParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[EnterMaintenanceModeCheckResult](../schemas/Enter/EnterMaintenanceModeCheckResult.md)

## Security

- **Authorization**
