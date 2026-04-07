# POST /update-vm-vlan

**Resource:** [Vlan](../resources/Vlan.md)
**Operation ID:** `UpdateVlan`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VmVlanUpdationParams](../schemas/Vm/VmVlanUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Vlan_](../schemas/With/WithTask-Vlan.md)

## Security

- **Authorization**
