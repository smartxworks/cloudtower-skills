# POST /upgrade-cloudtower-application

**Resource:** [CloudTowerApplication](../resources/CloudTowerApplication.md)
**Operation ID:** `UpgradeCloudTowerApplication`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [UpgradeCloudTowerApplicationParams](../schemas/Upgrade/UpgradeCloudTowerApplicationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[CloudTowerApplication](../schemas/Cloud/CloudTowerApplication.md)

## Security

- **Authorization**
