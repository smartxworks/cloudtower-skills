# POST /get-upload-tasks-connection

**Resource:** [UploadTask](../resources/UploadTask.md)
**Operation ID:** `GetUploadTasksConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetUploadTasksConnectionRequestBody](../schemas/Get/GetUploadTasksConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[UploadTaskConnection](../schemas/Upload/UploadTaskConnection.md)

## Security

- **Authorization**
