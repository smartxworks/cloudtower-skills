# POST /get-elf-data-stores-connection

**Resource:** [ElfDataStore](../resources/ElfDataStore.md)
**Operation ID:** `GetElfDataStoresConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetElfDataStoresConnectionRequestBody](../schemas/Get/GetElfDataStoresConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ElfDataStoreConnection](../schemas/Elf/ElfDataStoreConnection.md)

## Security

- **Authorization**
