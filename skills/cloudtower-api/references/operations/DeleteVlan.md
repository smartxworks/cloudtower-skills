# POST /delete-vm-vlan

**Resource:** [Vlan](../resources/Vlan.md)
**Operation ID:** `DeleteVlan`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VlanDeletionParams](../schemas/Vlan/VlanDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteVlan_](../schemas/With/WithTask-DeleteVlan.md)

## Security

- **Authorization**
