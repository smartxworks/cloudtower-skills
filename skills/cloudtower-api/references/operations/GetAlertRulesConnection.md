# POST /get-alert-rules-connection

**Resource:** [AlertRule](../resources/AlertRule.md)
**Operation ID:** `GetAlertRulesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetAlertRulesConnectionRequestBody](../schemas/Get/GetAlertRulesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[AlertRuleConnection](../schemas/Alert/AlertRuleConnection.md)

## Security

- **Authorization**
