# POST /get-cloud-tower-application-packages-connection

**Resource:** [CloudTowerApplicationPackage](../resources/CloudTowerApplicationPackage.md)
**Operation ID:** `GetCloudTowerApplicationPackagesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetCloudTowerApplicationPackagesConnectionRequestBody](../schemas/Get/GetCloudTowerApplicationPackagesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[CloudTowerApplicationPackageConnection](../schemas/Cloud/CloudTowerApplicationPackageConnection.md)

## Security

- **Authorization**
