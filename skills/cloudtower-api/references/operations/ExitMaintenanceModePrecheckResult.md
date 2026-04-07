# POST /exit-maintance-mode-precheck-result

**Resource:** [Host](../resources/Host.md)
**Operation ID:** `ExitMaintenanceModePrecheckResult`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [ExitMaintenanceModeResultParams](../schemas/Exit/ExitMaintenanceModeResultParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ExitMaintenanceModeResult](../schemas/Exit/ExitMaintenanceModeResult.md)

## Security

- **Authorization**
