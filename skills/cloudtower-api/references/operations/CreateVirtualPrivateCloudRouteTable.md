# POST /create-virtual-private-cloud-route-table

**Resource:** [VirtualPrivateCloudRouteTable](../resources/VirtualPrivateCloudRouteTable.md)
**Operation ID:** `CreateVirtualPrivateCloudRouteTable`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [VirtualPrivateCloudRouteTableCreationParams](../schemas/Virtual/VirtualPrivateCloudRouteTableCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VirtualPrivateCloudRouteTable_](../schemas/With/WithTask-VirtualPrivateCloudRouteTable.md)

## Security

- **Authorization**
