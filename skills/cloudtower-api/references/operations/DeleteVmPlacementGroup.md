# POST /delete-vm-placement-group

**Resource:** [VmPlacementGroup](../resources/VmPlacementGroup.md)
**Operation ID:** `DeleteVmPlacementGroup`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VmPlacementGroupDeletionParams](../schemas/Vm/VmPlacementGroupDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteVmPlacementGroup_](../schemas/With/WithTask-DeleteVmPlacementGroup.md)

## Security

- **Authorization**
