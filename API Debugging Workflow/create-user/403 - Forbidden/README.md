# Create User — 403 Insufficient Permissions

## Scenario

A `POST /api/users` request returns `403 Forbidden` because the required `x-api-key` header is missing.

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `201 Created`  
**Actual status:** `403 Forbidden`

## Purpose

Demonstrates investigation and resolution of an API authorization failure caused by insufficient permissions.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| Content-Type | `application/json` |

> The `x-api-key` header is intentionally omitted to reproduce the error.

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

The API returns `403 Forbidden`.

```json
{
  "success": false,
  "message": "Access denied"
}
```

## Root cause

The request includes authentication, but it does not include the required `x-api-key` header. The API denies access because the client does not have the required API-key permission.

## Resolution

Add the `x-api-key` header and resend the request.

| Header | Value |
|---|---|
| x-api-key | `{{apiKey}}` |

## Verification

After adding a valid API key, the request completes successfully and returns `201 Created`.

## Postman location

`Create User → 4xx - Client Errors → 403 - Forbidden - Create User`

## Jira case study

A Jira bug was created to document the missing API key, the investigation, and the successful resolution.

![Jira ticket — Create User 403 Insufficient Permissions](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/403%20-%20Forbidden/Jira%20API%20Project%20Create%20User%20403%20Insufficient%20Permissions.png)
