# POST /get-cluster-settingses-connection

**Resource:** [ClusterSettings](../resources/ClusterSettings.md)
**Operation ID:** `GetClusterSettingsesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetClusterSettingsesConnectionRequestBody](../schemas/Get/GetClusterSettingsesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ClusterSettingsConnection](../schemas/Cluster/ClusterSettingsConnection.md)

## Security

- **Authorization**
