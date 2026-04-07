# POST /create-virtual-private-cloud

**Resource:** [VirtualPrivateCloud](../resources/VirtualPrivateCloud.md)
**Operation ID:** `CreateVirtualPrivateCloud`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [VirtualPrivateCloudCreationParams](../schemas/Virtual/VirtualPrivateCloudCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VirtualPrivateCloud_](../schemas/With/WithTask-VirtualPrivateCloud.md)

## Security

- **Authorization**
