# Delete User API Debugging

This folder documents successful and failed `Delete User` API requests for a mock User Management API.

> **Note:** This is a simulated portfolio project. All API requests, Jira tickets, logs, credentials, and customer data are sanitized or created for demonstration purposes.

## Endpoint

**Method:** `DELETE`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`

## Purpose

Demonstrates API testing and troubleshooting for user-deletion requests, including authorization checks, non-existent user records, request verification, Jira documentation, and simulated logs.

## Required headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to delete | `123456789` |

## Status-code coverage

| Status code | Scenario |
|---|---|
| **204 No Content** | The user record was deleted successfully. |
| **403 Forbidden** | The authenticated user does not have permission to delete user records. |
| **404 Not Found** | The specified user ID does not match an existing user record. |

## Verification

After a successful `204 No Content` response, send a `GET` request for the same user ID.

```text
GET {{baseUrl}}/api/users/123456789
```

The API should return `404 Not Found`, confirming that the user record was deleted.

## Evidence included

Status-code folders may include:

- A status-specific `README.md`
- Postman request and response screenshots
- Simulated Jira tickets
- Simulated, sanitized troubleshooting logs
- Troubleshooting or verification documentation

## Postman collection

Import the User Management Postman collection from the `Postman-collection` folder to run the requests.

## Skills demonstrated

- REST API testing with Postman
- HTTP DELETE requests and path parameters
- Authentication and authorization checks
- HTTP status-code troubleshooting
- Verification of data deletion
- Jira issue documentation and resolution tracking
- Log analysis and error investigation
