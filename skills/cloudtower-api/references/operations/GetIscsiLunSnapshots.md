# POST /get-iscsi-lun-snapshots

**Resource:** [IscsiLunSnapshot](../resources/IscsiLunSnapshot.md)
**Operation ID:** `GetIscsiLunSnapshots`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetIscsiLunSnapshotsRequestBody](../schemas/Get/GetIscsiLunSnapshotsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [IscsiLunSnapshot](../schemas/Iscsi/IscsiLunSnapshot.md)

## Security

- **Authorization**
