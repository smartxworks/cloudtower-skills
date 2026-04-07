# POST /get-virtual-private-cloud-route-tables-connection

**Resource:** [VirtualPrivateCloudRouteTable](../resources/VirtualPrivateCloudRouteTable.md)
**Operation ID:** `GetVirtualPrivateCloudRouteTablesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudRouteTablesConnectionRequestBody](../schemas/Get/GetVirtualPrivateCloudRouteTablesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VirtualPrivateCloudRouteTableConnection](../schemas/Virtual/VirtualPrivateCloudRouteTableConnection.md)

## Security

- **Authorization**
