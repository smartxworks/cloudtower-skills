# POST /get-report-tasks-connection

**Resource:** [ReportTask](../resources/ReportTask.md)
**Operation ID:** `GetReportTasksConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetReportTasksConnectionRequestBody](../schemas/Get/GetReportTasksConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ReportTaskConnection](../schemas/Report/ReportTaskConnection.md)

## Security

- **Authorization**
