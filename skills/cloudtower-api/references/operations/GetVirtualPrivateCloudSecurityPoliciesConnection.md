# POST /get-virtual-private-cloud-security-policies-connection

**Resource:** [VirtualPrivateCloudSecurityPolicy](../resources/VirtualPrivateCloudSecurityPolicy.md)
**Operation ID:** `GetVirtualPrivateCloudSecurityPoliciesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudSecurityPoliciesConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudSecurityPoliciesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudSecurityPolicyConnection](../schemas/Virtual/VirtualPrivateCloudSecurityPolicyConnection.md)

## Security

- **Authorization**
