# POST /get-entity-filters

**Resource:** [EntityFilter](../resources/EntityFilter.md)
**Operation ID:** `GetEntityFilters`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetEntityFiltersRequestBody](../schemas/Get/GetEntityFiltersRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [EntityFilter](../schemas/Entity/EntityFilter.md)

## Security

- **Authorization**
