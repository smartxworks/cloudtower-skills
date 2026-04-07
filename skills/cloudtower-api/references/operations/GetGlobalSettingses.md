# POST /get-global-settingses

**Resource:** [GlobalSettings](../resources/GlobalSettings.md)
**Operation ID:** `GetGlobalSettingses`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetGlobalSettingsesRequestBody](../schemas/Get/GetGlobalSettingsesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [GlobalSettings](../schemas/Global/GlobalSettings.md)

## Security

- **Authorization**
