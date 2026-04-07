# POST /get-registry-services

**Resource:** [RegistryService](../resources/RegistryService.md)
**Operation ID:** `GetRegistryServices`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetRegistryServicesRequestBody](../schemas/Get/GetRegistryServicesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [RegistryService](../schemas/Registry/RegistryService.md)

## Security

- **Authorization**
