# POST /get-cloud-tower-applications-connection

**Resource:** [CloudTowerApplication](../resources/CloudTowerApplication.md)
**Operation ID:** `GetCloudTowerApplicationsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetCloudTowerApplicationsConnectionRequestBody](../schemas/Get/GetCloudTowerApplicationsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[CloudTowerApplicationConnection](../schemas/Cloud/CloudTowerApplicationConnection.md)

## Security

- **Authorization**
