# POST /get-export-file-download-links

**Resource:** [Ovf](../resources/Ovf.md)
**Operation ID:** `GetExportFileDownloadLinks`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetExportFileDownloadLinksParams](../schemas/Get/GetExportFileDownloadLinksParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [ExportFileDownloadLinks](../schemas/Export/ExportFileDownloadLinks.md)

## Security

- **Authorization**
