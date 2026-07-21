# Create User — 500 Internal Server Error

## Scenario

A valid `POST /api/users` request returns `500 Internal Server Error` while the server processes the request.

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `201 Created`  
**Actual status:** `500 Internal Server Error`

## Purpose

Demonstrates investigation, impact assessment, and escalation of a server-side API failure.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Request body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "id": "123456789",
  "phoneNumber": "0501234567",
  "emailAddress": "walaa@test.com",
  "dateOfBirth": "14/01/2000"
}
```

## Expected result

The API creates the user and returns `201 Created`.

```json
{
  "success": true,
  "message": "User created successfully"
}
```

## Actual result

The API returns `500 Internal Server Error`.

```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Impact

- **Impacted end customers:** 48
- **Business impact:** 100% of affected customers could not create a user between 11:00 AM and 7:00 PM.


## Postman location

`Create User → 5xx - Server Errors → 500 - Internal Server Error - Create User`

## Jira case study

> **Note:** This Jira ticket is a simulated portfolio artifact demonstrating incident documentation, impact assessment, investigation, and escalation.

![Jira ticket — Create User 500 Internal Server Error](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/500%20-%20Internal%20Server%20Error/Jira%20API%20Project%20Create%20User%20500%20Internal%20Server%20Error.png)
