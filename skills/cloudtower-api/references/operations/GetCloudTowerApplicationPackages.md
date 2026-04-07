# POST /get-cloudtower-application-packages

**Resource:** [CloudTowerApplicationPackage](../resources/CloudTowerApplicationPackage.md)
**Operation ID:** `GetCloudTowerApplicationPackages`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetCloudTowerApplicationPackagesRequestBody](../schemas/Get/GetCloudTowerApplicationPackagesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [CloudTowerApplicationPackage](../schemas/Cloud/CloudTowerApplicationPackage.md)

## Security

- **Authorization**
