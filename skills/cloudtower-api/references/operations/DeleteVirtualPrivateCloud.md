# POST /delete-virtual-private-cloud

**Resource:** [VirtualPrivateCloud](../resources/VirtualPrivateCloud.md)
**Operation ID:** `DeleteVirtualPrivateCloud`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VirtualPrivateCloudDeletionParams](../schemas/Virtual/VirtualPrivateCloudDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteVirtualPrivateCloud_](../schemas/With/WithTask-DeleteVirtualPrivateCloud.md)

## Security

- **Authorization**
