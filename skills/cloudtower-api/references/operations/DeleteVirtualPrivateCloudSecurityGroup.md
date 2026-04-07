# POST /delete-virtual-private-cloud-security-group

**Resource:** [VirtualPrivateCloudSecurityGroup](../resources/VirtualPrivateCloudSecurityGroup.md)
**Operation ID:** `DeleteVirtualPrivateCloudSecurityGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VirtualPrivateCloudSecurityGroupDeletionParams](../schemas/Virtual/VirtualPrivateCloudSecurityGroupDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteVirtualPrivateCloudSecurityGroup_](../schemas/With/WithTask-DeleteVirtualPrivateCloudSecurityGroup.md)

## Security

- **Authorization**
