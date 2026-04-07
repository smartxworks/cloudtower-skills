# POST /create-vds-with-migrate-vlan

**Resource:** [Vds](../resources/Vds.md)
**Operation ID:** `CreateVdsWithMigrateVlan`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [VdsCreationWithMigrateVlanParams](../schemas/Vds/VdsCreationWithMigrateVlanParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Vds_](../schemas/With/WithTask-Vds.md)

## Security

- **Authorization**
