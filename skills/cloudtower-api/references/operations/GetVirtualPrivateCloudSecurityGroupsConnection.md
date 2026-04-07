# POST /get-virtual-private-cloud-security-groups-connection

**Resource:** [VirtualPrivateCloudSecurityGroup](../resources/VirtualPrivateCloudSecurityGroup.md)
**Operation ID:** `GetVirtualPrivateCloudSecurityGroupsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudSecurityGroupsConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudSecurityGroupsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudSecurityGroupConnection](../schemas/Virtual/VirtualPrivateCloudSecurityGroupConnection.md)

## Security

- **Authorization**
