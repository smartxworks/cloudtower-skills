# POST /get-elf-storage-policies

**Resource:** [ElfStoragePolicy](../resources/ElfStoragePolicy.md)
**Operation ID:** `GetElfStoragePolicies`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetElfStoragePoliciesRequestBody](../schemas/Get/GetElfStoragePoliciesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ElfStoragePolicy](../schemas/Elf/ElfStoragePolicy.md)

## Security

- **Authorization**
