# POST /get-elf-data-stores

**Resource:** [ElfDataStore](../resources/ElfDataStore.md)
**Operation ID:** `GetElfDataStores`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetElfDataStoresRequestBody](../schemas/Get/GetElfDataStoresRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ElfDataStore](../schemas/Elf/ElfDataStore.md)

## Security

- **Authorization**
