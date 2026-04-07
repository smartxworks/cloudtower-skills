# POST /update-vm-placement-group

**Resource:** [VmPlacementGroup](../resources/VmPlacementGroup.md)
**Operation ID:** `UpdateVmPlacementGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VmPlacementGroupUpdationParams](../schemas/Vm/VmPlacementGroupUpdationParams.md)

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
