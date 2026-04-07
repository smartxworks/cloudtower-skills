# POST /get-cluster-settingses

**Resource:** [ClusterSettings](../resources/ClusterSettings.md)
**Operation ID:** `GetClusterSettingses`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetClusterSettingsesRequestBody](../schemas/Get/GetClusterSettingsesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ClusterSettings](../schemas/Cluster/ClusterSettings.md)

## Security

- **Authorization**
