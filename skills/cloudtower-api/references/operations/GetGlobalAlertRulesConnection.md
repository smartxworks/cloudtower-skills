# POST /get-global-alert-rules-connection

**Resource:** [GlobalAlertRule](../resources/GlobalAlertRule.md)
**Operation ID:** `GetGlobalAlertRulesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetGlobalAlertRulesConnectionRequestBody](../schemas/Get/GetGlobalAlertRulesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[GlobalAlertRuleConnection](../schemas/Global/GlobalAlertRuleConnection.md)

## Security

- **Authorization**
