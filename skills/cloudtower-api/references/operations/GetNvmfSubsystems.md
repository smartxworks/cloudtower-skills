# POST /get-nvmf-subsystems

**Resource:** [NvmfSubsystem](../resources/NvmfSubsystem.md)
**Operation ID:** `GetNvmfSubsystems`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNvmfSubsystemsRequestBody](../schemas/Get/GetNvmfSubsystemsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [NvmfSubsystem](../schemas/Nvmf/NvmfSubsystem.md)

## Security

- **Authorization**
