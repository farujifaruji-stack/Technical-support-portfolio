# Create User — 409 Conflict

## Scenario

A `POST /api/users` request returns `409 Conflict` because a user with the submitted email address already exists.

**Method:** `POST`  
**Endpoint:** `{{baseUrl}}/api/users`  
**Expected status:** `201 Created`  
**Actual status:** `409 Conflict`

## Purpose

Demonstrates investigation and resolution of a duplicate-user conflict during user creation.

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

The API creates a new user and returns `201 Created`.

```json
{
  "success": true,
  "message": "User created successfully"
}
```

## Actual result

The API returns `409 Conflict`.

```json
{
  "success": false,
  "message": "User already exists"
}
```

## Root cause

The submitted email address is already associated with an existing user record.

## Resolution

Use a unique email address for a new user, or inform the user that an account already exists.

```json
{
  "emailAddress": "new.user@test.com"
}
```

## Verification

After changing the request to use a unique email address, the API creates the user successfully and returns `201 Created`.

## Postman location

`Create User → 4xx - Client Errors → 409 - Conflict - Create User`

## Jira case study

A Jira bug was created to document the duplicate-email conflict, the investigation, and the resolution.

![Jira ticket — Create User 409 Conflict](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/create-user/409-Conflict/Jira%20API%20Project%20Create%20User%20409%20Conflict.png)
