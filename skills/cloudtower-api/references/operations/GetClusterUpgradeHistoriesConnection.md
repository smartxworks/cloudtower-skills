# POST /get-cluster-upgrade-histories-connection

**Resource:** [ClusterUpgradeHistory](../resources/ClusterUpgradeHistory.md)
**Operation ID:** `GetClusterUpgradeHistoriesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetClusterUpgradeHistoriesConnectionRequestBody](../schemas/Get/GetClusterUpgradeHistoriesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ClusterUpgradeHistoryConnection](../schemas/Cluster/ClusterUpgradeHistoryConnection.md)

## Security

- **Authorization**
