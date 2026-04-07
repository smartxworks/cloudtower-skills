# POST /delete-iscsi-target

**Resource:** [IscsiTarget](../resources/IscsiTarget.md)
**Operation ID:** `DeleteIscsiTarget`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [IscsiTargetDeletionParams](../schemas/Iscsi/IscsiTargetDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteIscsiTarget_](../schemas/With/WithTask-DeleteIscsiTarget.md)

## Security

- **Authorization**
