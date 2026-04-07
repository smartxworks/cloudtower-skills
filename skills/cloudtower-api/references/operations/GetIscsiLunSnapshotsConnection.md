# POST /get-iscsi-lun-snapshots-connection

**Resource:** [IscsiLunSnapshot](../resources/IscsiLunSnapshot.md)
**Operation ID:** `GetIscsiLunSnapshotsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetIscsiLunSnapshotsConnectionRequestBody](../schemas/Get/GetIscsiLunSnapshotsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[IscsiLunSnapshotConnection](../schemas/Iscsi/IscsiLunSnapshotConnection.md)

## Security

- **Authorization**
