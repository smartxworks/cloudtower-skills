# POST /update-vds

**Resource:** [Vds](../resources/Vds.md)
**Operation ID:** `UpdateVds`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [VdsUpdationParams](../schemas/Vds/VdsUpdationParams.md)

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
