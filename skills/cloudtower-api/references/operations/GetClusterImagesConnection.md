# POST /get-cluster-images-connection

**Resource:** [ClusterImage](../resources/ClusterImage.md)
**Operation ID:** `GetClusterImagesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetClusterImagesConnectionRequestBody](../schemas/Get/GetClusterImagesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ClusterImageConnection](../schemas/Cluster/ClusterImageConnection.md)

## Security

- **Authorization**
