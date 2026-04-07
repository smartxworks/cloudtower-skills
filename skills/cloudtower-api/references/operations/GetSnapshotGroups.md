# POST /get-snapshot-groups

**Resource:** [SnapshotGroup](../resources/SnapshotGroup.md)
**Operation ID:** `GetSnapshotGroups`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnapshotGroupsRequestBody](../schemas/Get/GetSnapshotGroupsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [SnapshotGroup](../schemas/Snapshot/SnapshotGroup.md)

## Security

- **Authorization**
