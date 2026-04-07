# POST /update-entity-filter

**Resource:** [EntityFilter](../resources/EntityFilter.md)
**Operation ID:** `UpdateEntityFilter`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [EntityFilterUpdationParams](../schemas/Entity/EntityFilterUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_EntityFilter_](../schemas/With/WithTask-EntityFilter.md)

## Security

- **Authorization**
