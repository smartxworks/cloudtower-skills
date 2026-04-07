# POST /get-elf-storage-policies-connection

**Resource:** [ElfStoragePolicy](../resources/ElfStoragePolicy.md)
**Operation ID:** `GetElfStoragePoliciesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetElfStoragePoliciesConnectionRequestBody](../schemas/Get/GetElfStoragePoliciesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ElfStoragePolicyConnection](../schemas/Elf/ElfStoragePolicyConnection.md)

## Security

- **Authorization**
