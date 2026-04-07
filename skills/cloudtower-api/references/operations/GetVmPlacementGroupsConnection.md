# POST /get-vm-placement-groups-connection

**Resource:** [VmPlacementGroup](../resources/VmPlacementGroup.md)
**Operation ID:** `GetVmPlacementGroupsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmPlacementGroupsConnectionRequestBody](../schemas/Get/GetVmPlacementGroupsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmPlacementGroupConnection](../schemas/Vm/VmPlacementGroupConnection.md)

## Security

- **Authorization**
