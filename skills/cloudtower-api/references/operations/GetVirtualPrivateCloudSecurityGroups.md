# POST /get-virtual-private-cloud-security-groups

**Resource:** [VirtualPrivateCloudSecurityGroup](../resources/VirtualPrivateCloudSecurityGroup.md)
**Operation ID:** `GetVirtualPrivateCloudSecurityGroups`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudSecurityGroupsRequestBody](../schemas/Get/GetVirtualPrivateCloudSecurityGroupsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudSecurityGroup](../schemas/Virtual/VirtualPrivateCloudSecurityGroup.md)

## Security

- **Authorization**
