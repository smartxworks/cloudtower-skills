# POST /uninstall-cloudtower-application

**Resource:** [CloudTowerApplication](../resources/CloudTowerApplication.md)
**Operation ID:** `UninstallCloudTowerApplication`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [UninstallCloudTowerApplicationParams](../schemas/Uninstall/UninstallCloudTowerApplicationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [CloudTowerApplication](../schemas/Cloud/CloudTowerApplication.md)

## Security

- **Authorization**
