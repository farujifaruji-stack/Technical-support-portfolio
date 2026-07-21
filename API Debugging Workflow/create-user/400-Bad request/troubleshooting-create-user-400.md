# Troubleshooting Process — Create User 400 Bad Request

> **Note:** This is a simulated portfolio troubleshooting case. All logs and request data are sanitized and created for demonstration purposes.

1. Received a customer ticket reporting that they could not create a new user.

2. Reviewed the application logs.

```log
2026-07-21T10:42:15Z INFO Request payload created
2026-07-21T10:42:15Z INFO "Create" button submitted
2026-07-21T10:42:15Z INFO Request received: POST /api/users
2026-07-21T10:42:17Z ERROR Validation failed: firstName is required
2026-07-21T10:42:17Z INFO Response sent: 400 Bad Request
```

3. Reviewed the request body sent to the API and confirmed that the required `firstName` field was missing.

```json
{
  "lastName": "Doe",
  "id": "123456789",
  "phoneNumber": "0501234567",
  "emailAddress": "walaa@test.com",
  "dateOfBirth": "14/01/2000"
}
```

4. Created a Jira ticket to document the issue, evidence, investigation, and resolution. No escalation to the development team was needed because the issue was caused by an incomplete request payload.

5. Added the missing `firstName` field to the request body.

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

6. Resent the request and verified that the API returned `201 Created`.
