# POST /get-pmem-dimms

**Resource:** [PmemDimm](../resources/PmemDimm.md)
**Operation ID:** `GetPmemDimms`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetPmemDimmsRequestBody](../schemas/Get/GetPmemDimmsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [PmemDimm](../schemas/Pmem/PmemDimm.md)

## Security

- **Authorization**
