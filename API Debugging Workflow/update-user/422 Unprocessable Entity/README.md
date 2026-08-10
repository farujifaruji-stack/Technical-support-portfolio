# Update User — 422 Unprocessable Entity

## Scenario

A `PUT /api/users/{{userId}}` request returns `422 Unprocessable Entity` because the request body fails validation.

**Method:** `PUT`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `200 OK`  
**Actual status:** `422 Unprocessable Entity`

## Purpose

Demonstrates investigation and resolution of an Update User request with validation errors.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to update | `200` |

## Invalid request body

```json
{
  "name": "John Doe",
  "email": "invalid-email"
}
```

## Expected result

The API updates the user record and returns `200 OK`.

## Actual result

The API returns `422 Unprocessable Entity`.

```json
{
  "success": false,
  "message": "Validation failed"
}
```

## Root cause

The request body included data that did not meet the API validation requirements.

## Resolution

Correct the invalid field values in the request body.

## Verification

After correcting the request body, resend the request and verify that the API returns `200 OK`

![Update User — 422 Unprocessable Entity](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/update-user/422%20Unprocessable%20Entity/API%20Project%20-%20Update%20User%20-%20422%20Unprocessable%20Entity.png)

## Postman location

`Update User → 4xx - Client Errors → 422 - Unprocessable Entity - Update User`
