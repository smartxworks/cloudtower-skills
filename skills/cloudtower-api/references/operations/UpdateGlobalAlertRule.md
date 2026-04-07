# POST /update-global-alert-rule

**Resource:** [GlobalAlertRule](../resources/GlobalAlertRule.md)
**Operation ID:** `UpdateGlobalAlertRule`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GlobalAlertRuleUpdationParams](../schemas/Global/GlobalAlertRuleUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_GlobalAlertRule_](../schemas/With/WithTask-GlobalAlertRule.md)

## Security

- **Authorization**
