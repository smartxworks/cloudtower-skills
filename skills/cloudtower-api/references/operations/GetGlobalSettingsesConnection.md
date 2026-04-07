# POST /get-global-settingses-connection

**Resource:** [GlobalSettings](../resources/GlobalSettings.md)
**Operation ID:** `GetGlobalSettingsesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetGlobalSettingsesConnectionRequestBody](../schemas/Get/GetGlobalSettingsesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[GlobalSettingsConnection](../schemas/Global/GlobalSettingsConnection.md)

## Security

- **Authorization**
