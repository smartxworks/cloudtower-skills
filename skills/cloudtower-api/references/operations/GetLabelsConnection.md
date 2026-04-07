# POST /get-labels-connection

**Resource:** [Label](../resources/Label.md)
**Operation ID:** `GetLabelsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetLabelsConnectionRequestBody](../schemas/Get/GetLabelsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[LabelConnection](../schemas/Label/LabelConnection.md)

## Security

- **Authorization**
