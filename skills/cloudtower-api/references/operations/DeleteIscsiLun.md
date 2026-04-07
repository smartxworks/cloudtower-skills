# POST /delete-iscsi-lun

**Resource:** [IscsiLun](../resources/IscsiLun.md)
**Operation ID:** `DeleteIscsiLun`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [IscsiLunDeletionParams](../schemas/Iscsi/IscsiLunDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteIscsiLun_](../schemas/With/WithTask-DeleteIscsiLun.md)

## Security

- **Authorization**
