# POST /get-alert-rules

**Resource:** [AlertRule](../resources/AlertRule.md)
**Operation ID:** `GetAlertRules`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetAlertRulesRequestBody](../schemas/Get/GetAlertRulesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [AlertRule](../schemas/Alert/AlertRule.md)

## Security

- **Authorization**
