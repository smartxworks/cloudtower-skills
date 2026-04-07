# POST /get-virtual-private-cloud-external-subnet-groups

**Resource:** [VirtualPrivateCloudExternalSubnetGroup](../resources/VirtualPrivateCloudExternalSubnetGroup.md)
**Operation ID:** `GetVirtualPrivateCloudExternalSubnetGroups`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudExternalSubnetGroupsRequestBody](../schemas/Get/GetVirtualPrivateCloudExternalSubnetGroupsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudExternalSubnetGroup](../schemas/Virtual/VirtualPrivateCloudExternalSubnetGroup.md)

## Security

- **Authorization**
