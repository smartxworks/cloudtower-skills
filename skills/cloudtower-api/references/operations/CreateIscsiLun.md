# POST /create-iscsi-lun

**Resource:** [IscsiLun](../resources/IscsiLun.md)
**Operation ID:** `CreateIscsiLun`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [IscsiLunCreationParams](../schemas/Iscsi/IscsiLunCreationParams.md)

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
