# POST /get-content-library-vm-templates-connection

**Resource:** [ContentLibraryVmTemplate](../resources/ContentLibraryVmTemplate.md)
**Operation ID:** `GetContentLibraryVmTemplatesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetContentLibraryVmTemplatesConnectionRequestBody](../schemas/Get/GetContentLibraryVmTemplatesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ContentLibraryVmTemplateConnection](../schemas/Content/ContentLibraryVmTemplateConnection.md)

## Security

- **Authorization**
