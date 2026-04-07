# POST /get-network-policy-rule-services-connection

**Resource:** [NetworkPolicyRuleService](../resources/NetworkPolicyRuleService.md)
**Operation ID:** `GetNetworkPolicyRuleServicesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNetworkPolicyRuleServicesConnectionRequestBody](../schemas/Get/GetNetworkPolicyRuleServicesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[NetworkPolicyRuleServiceConnection](../schemas/Network/NetworkPolicyRuleServiceConnection.md)

## Security

- **Authorization**
