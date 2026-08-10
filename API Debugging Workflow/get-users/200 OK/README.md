# Get Users — 200 OK

## Scenario

A `GET /api/users` request successfully retrieves the list of users.

**Method:** `GET`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `200 OK`  
**Actual status:** `200 OK`

## Purpose

Demonstrates a successful Get Users request.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Expected result

The API returns a list of user records with `200 OK`.

## Actual result

The API returns `200 OK`.

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ]
}
```

## Verification

Confirm that the response contains a list of user records and returns `200 OK`.

## Postman location

`Get Users → 2xx - Success Responses → 200 - OK - Get Users`

## Jira case study

> **Note:** This Jira ticket is a simulated portfolio artifact demonstrating successful request validation and API response documentation.

<!-- Add the 200 Jira screenshot here after uploading it to GitHub. -->
