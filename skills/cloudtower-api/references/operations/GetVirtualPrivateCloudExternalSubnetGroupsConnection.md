# POST /get-virtual-private-cloud-external-subnet-groups-connection

**Resource:** [VirtualPrivateCloudExternalSubnetGroup](../resources/VirtualPrivateCloudExternalSubnetGroup.md)
**Operation ID:** `GetVirtualPrivateCloudExternalSubnetGroupsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudExternalSubnetGroupsConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudExternalSubnetGroupsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudExternalSubnetGroupConnection](../schemas/Virtual/VirtualPrivateCloudExternalSubnetGroupConnection.md)

## Security

- **Authorization**
