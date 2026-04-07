# POST /delete-iscsi-lun-snapshot

**Resource:** [IscsiLunSnapshot](../resources/IscsiLunSnapshot.md)
**Operation ID:** `DeleteIscsiLunSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [IscsiLunSnapshotDeletionParams](../schemas/Iscsi/IscsiLunSnapshotDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteIscsiLunSnapshot_](../schemas/With/WithTask-DeleteIscsiLunSnapshot.md)

## Security

- **Authorization**
