# POST /clone-iscsi-lun-from-snapshot

**Resource:** [IscsiLun](../resources/IscsiLun.md)
**Operation ID:** `CloneIscsiLunFromSnapshot`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [IscsiLunCloneParams](../schemas/Iscsi/IscsiLunCloneParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_IscsiLun_](../schemas/With/WithTask-IscsiLun.md)

## Security

- **Authorization**
