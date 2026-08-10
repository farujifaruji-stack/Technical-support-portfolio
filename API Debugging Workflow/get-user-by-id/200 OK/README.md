# Get User by ID — 200 OK

## Scenario

A `GET /api/users/{{userId}}` request successfully retrieves an existing user.

**Method:** `GET`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `200 OK`  
**Actual status:** `200 OK`

## Purpose

Demonstrates a successful Get User by ID request.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to retrieve | `200` |

## Expected result

The API returns the requested user record with `200 OK`.

## Actual result

The API returns `200 OK`.

```json
{
  "success": true,
  "data": {
    "id": 200,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

## Verification

Confirm that the response contains the requested user ID and the expected user details.

## Postman location

`Get User by ID → 2xx - Success Responses → 200 - OK - Get User by ID`

## Jira case study

> **Note:** This Jira ticket is a simulated portfolio artifact demonstrating successful request validation and API response documentation.

<!-- Add the 200 Jira screenshot here after uploading it to GitHub. -->
