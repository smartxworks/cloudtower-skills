# POST /get-virtual-private-cloud-security-policies

**Resource:** [VirtualPrivateCloudSecurityPolicy](../resources/VirtualPrivateCloudSecurityPolicy.md)
**Operation ID:** `GetVirtualPrivateCloudSecurityPolicies`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudSecurityPoliciesRequestBody](../schemas/Get/GetVirtualPrivateCloudSecurityPoliciesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudSecurityPolicy](../schemas/Virtual/VirtualPrivateCloudSecurityPolicy.md)

## Security

- **Authorization**
