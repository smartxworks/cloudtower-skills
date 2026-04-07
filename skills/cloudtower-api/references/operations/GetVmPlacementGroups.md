# POST /get-vm-placement-groups

**Resource:** [VmPlacementGroup](../resources/VmPlacementGroup.md)
**Operation ID:** `GetVmPlacementGroups`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmPlacementGroupsRequestBody](../schemas/Get/GetVmPlacementGroupsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [VmPlacementGroup](../schemas/Vm/VmPlacementGroup.md)

## Security

- **Authorization**
