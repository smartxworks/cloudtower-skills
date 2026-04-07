# POST /get-registry-services-connection

**Resource:** [RegistryService](../resources/RegistryService.md)
**Operation ID:** `GetRegistryServicesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetRegistryServicesConnectionRequestBody](../schemas/Get/GetRegistryServicesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[RegistryServiceConnection](../schemas/Registry/RegistryServiceConnection.md)

## Security

- **Authorization**
