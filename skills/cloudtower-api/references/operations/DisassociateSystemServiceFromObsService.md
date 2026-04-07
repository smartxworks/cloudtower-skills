# POST /disassociate-system-service-from-obs-service

**Resource:** [Observability](../resources/Observability.md)
**Operation ID:** `DisassociateSystemServiceFromObsService`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [DisassociateSystemServiceFromObsServiceParams](../schemas/Disassociate/DisassociateSystemServiceFromObsServiceParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[WithTask_DisassociateSystemServiceFromObsServiceResult_](../schemas/With/WithTask-DisassociateSystemServiceFromObsServiceResult.md)

## Security

- **Authorization**
