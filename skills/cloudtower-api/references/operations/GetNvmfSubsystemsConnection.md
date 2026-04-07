# POST /get-nvmf-subsystems-connection

**Resource:** [NvmfSubsystem](../resources/NvmfSubsystem.md)
**Operation ID:** `GetNvmfSubsystemsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetNvmfSubsystemsConnectionRequestBody](../schemas/Get/GetNvmfSubsystemsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[NvmfSubsystemConnection](../schemas/Nvmf/NvmfSubsystemConnection.md)

## Security

- **Authorization**
