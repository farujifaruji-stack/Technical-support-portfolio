# Create User — 401 Unauthorized

## Scenario

A `POST /api/users` request returns `401 Unauthorized` because the required `Authorization` header is missing.

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `201 Created`  
**Actual status:** `401 Unauthorized`

## Purpose

Demonstrates investigation and resolution of an API authentication failure.

## Request headers

| Header | Value |
|---|---|
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

> The `Authorization` header is intentionally omitted to reproduce the error.

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

The API returns `401 Unauthorized`.

```json
{
  "success": false,
  "message": "Authentication required"
}
```

## Root cause

The request does not include the required `Authorization` header with a valid bearer token.

## Resolution

Add the Authorization header and send the request again.

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |

## Verification

After adding a valid bearer token, the request completes successfully and returns `201 Created`.

## Postman location

`Create User → 4xx - Client Errors → 401 - Unauthorized - Create User`

## Jira case study

A Jira bug was created to document the missing authentication header, the investigation, and the successful resolution.

![Jira ticket — Create User 401 Unauthorized](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/401-Unauthorized/Jira%20API%20Project%20Create%20User%20401%20Unauthorized.png)
