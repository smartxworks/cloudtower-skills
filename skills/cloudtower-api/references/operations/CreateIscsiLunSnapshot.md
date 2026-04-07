# POST /create-iscsi-lun-snapshot

**Resource:** [IscsiLunSnapshot](../resources/IscsiLunSnapshot.md)
**Operation ID:** `CreateIscsiLunSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [IscsiLunSnapshotCreationParams](../schemas/Iscsi/IscsiLunSnapshotCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_IscsiLunSnapshot_](../schemas/With/WithTask-IscsiLunSnapshot.md)

## Security

- **Authorization**
