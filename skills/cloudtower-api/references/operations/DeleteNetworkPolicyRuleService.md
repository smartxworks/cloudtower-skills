# POST /delete-network-policy-rule-service

**Resource:** [NetworkPolicyRuleService](../resources/NetworkPolicyRuleService.md)
**Operation ID:** `DeleteNetworkPolicyRuleService`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NetworkPolicyRuleServiceDeletionParams](../schemas/Network/NetworkPolicyRuleServiceDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteNetworkPolicyRuleService_](../schemas/With/WithTask-DeleteNetworkPolicyRuleService.md)

## Security

- **Authorization**
