# POST /create-vm-placement-group

**Resource:** [VmPlacementGroup](../resources/VmPlacementGroup.md)
**Operation ID:** `CreateVmPlacementGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [VmPlacementGroupCreationParams](../schemas/Vm/VmPlacementGroupCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_VmPlacementGroup_](../schemas/With/WithTask-VmPlacementGroup.md)

## Security

- **Authorization**
