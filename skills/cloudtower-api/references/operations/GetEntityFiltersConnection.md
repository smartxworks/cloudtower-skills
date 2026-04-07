# POST /get-entity-filters-connection

**Resource:** [EntityFilter](../resources/EntityFilter.md)
**Operation ID:** `GetEntityFiltersConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetEntityFiltersConnectionRequestBody](../schemas/Get/GetEntityFiltersConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[EntityFilterConnection](../schemas/Entity/EntityFilterConnection.md)

## Security

- **Authorization**
