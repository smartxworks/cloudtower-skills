# POST /get-virtual-private-cloud-route-tables

**Resource:** [VirtualPrivateCloudRouteTable](../resources/VirtualPrivateCloudRouteTable.md)
**Operation ID:** `GetVirtualPrivateCloudRouteTables`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVirtualPrivateCloudRouteTablesRequestBody](../schemas/Get/GetVirtualPrivateCloudRouteTablesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VirtualPrivateCloudRouteTable](../schemas/Virtual/VirtualPrivateCloudRouteTable.md)

## Security

- **Authorization**
