# POST /get-pmem-dimms-connection

**Resource:** [PmemDimm](../resources/PmemDimm.md)
**Operation ID:** `GetPmemDimmsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetPmemDimmsConnectionRequestBody](../schemas/Get/GetPmemDimmsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[PmemDimmConnection](../schemas/Pmem/PmemDimmConnection.md)

## Security

- **Authorization**
