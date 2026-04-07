# POST /get-cluster-images

**Resource:** [ClusterImage](../resources/ClusterImage.md)
**Operation ID:** `GetClusterImages`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetClusterImagesRequestBody](../schemas/Get/GetClusterImagesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ClusterImage](../schemas/Cluster/ClusterImage.md)

## Security

- **Authorization**
