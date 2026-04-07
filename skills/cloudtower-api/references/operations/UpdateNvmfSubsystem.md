# POST /update-nvmf-subsystem

**Resource:** [NvmfSubsystem](../resources/NvmfSubsystem.md)
**Operation ID:** `UpdateNvmfSubsystem`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [NvmfSubsystemUpdationParams](../schemas/Nvmf/NvmfSubsystemUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_NvmfSubsystem_](../schemas/With/WithTask-NvmfSubsystem.md)

## Security

- **Authorization**
