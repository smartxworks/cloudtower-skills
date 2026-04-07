# POST /update-network-policy-rule-service

**Resource:** [NetworkPolicyRuleService](../resources/NetworkPolicyRuleService.md)
**Operation ID:** `UpdateNetworkPolicyRuleService`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NetworkPolicyRuleServiceUpdationParams](../schemas/Network/NetworkPolicyRuleServiceUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_NetworkPolicyRuleService_](../schemas/With/WithTask-NetworkPolicyRuleService.md)

## Security

- **Authorization**
