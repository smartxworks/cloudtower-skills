# POST /delete-vds

**Resource:** [Vds](../resources/Vds.md)
**Operation ID:** `DeleteVds`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VdsDeletionParams](../schemas/Vds/VdsDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteVds_](../schemas/With/WithTask-DeleteVds.md)

## Security

- **Authorization**
