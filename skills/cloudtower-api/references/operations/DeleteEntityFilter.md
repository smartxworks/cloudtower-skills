# POST /delete-entity-filter

**Resource:** [EntityFilter](../resources/EntityFilter.md)
**Operation ID:** `DeleteEntityFilter`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [EntityFilterDeletionParams](../schemas/Entity/EntityFilterDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteEntityFilter_](../schemas/With/WithTask-DeleteEntityFilter.md)

## Security

- **Authorization**
