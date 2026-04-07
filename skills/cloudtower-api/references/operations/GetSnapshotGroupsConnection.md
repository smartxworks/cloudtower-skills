# POST /get-snapshot-groups-connection

**Resource:** [SnapshotGroup](../resources/SnapshotGroup.md)
**Operation ID:** `GetSnapshotGroupsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetSnapshotGroupsConnectionRequestBody](../schemas/Get/GetSnapshotGroupsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[SnapshotGroupConnection](../schemas/Snapshot/SnapshotGroupConnection.md)

## Security

- **Authorization**
