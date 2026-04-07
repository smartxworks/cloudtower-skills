# POST /delete-cloudtower-application-package

**Resource:** [CloudTowerApplication](../resources/CloudTowerApplication.md)
**Operation ID:** `DeleteCloudTowerApplicationPackage`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [DeleteCloudTowerApplicationPackageParams](../schemas/Delete/DeleteCloudTowerApplicationPackageParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [DeleteCloudTowerApplicationPackage](../schemas/Delete/DeleteCloudTowerApplicationPackage.md)

## Security

- **Authorization**
