# Troubleshooting Process — Create User 500 Internal Server Error

> **Note:** This is a simulated portfolio troubleshooting case. All logs and request data are sanitized and created for demonstration purposes.

1. Received a customer ticket reporting that they could not create a new user.

2. Reviewed the application logs.

```log
2026-07-21T10:38:43Z INFO  Widget is clicked
.
.
.
2026-07-21T10:42:10Z INFO  Request payload created
2026-07-21T10:42:14Z INFO  "Create" button submitted
2026-07-21T10:42:15Z INFO  Request received: POST /api/users
2026-07-21T10:42:15Z INFO  Data is successfully saved in the DB
2026-07-21T10:42:17Z ERROR Internal server error
2026-07-21T10:42:17Z INFO  Response sent: 500 Internal Server Error
```

3. Reviewed the request body sent to the API and confirmed that the auth token in missing in the header.

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

4.Check the impact:
##### To check number of impacted customers:
Look up in logs, filter the results by project (API project in this case), and look for in the search bar for "Widget is clicked AND INFO Create user request payload created AND ERROR Conflict detected: user already exists AND INFO Response sent: 409 Conflict"

##### To check business impact:
Look up in the DB and check if there is any new customers that were added to the DB in the time frame of the issue.
Compare how much new users were added compared to similar hours and days in the past.

5. Created a high-priority Jira ticket to document the issue, affected customers, impact, request details, and server-log evidence. Escalated the issue to the development or infrastructure team because it was a server-side failure.

6. Shared the log evidence showing that the API could not connect to the database while processing the Create User request.

7. After the database connection issue was resolved, sent a valid test request and verified that the API returned `201 Created`. Reprocessed only the requests confirmed not to have created a user record.

8. Added a resolution comment to the Jira ticket, documented the server-side fix, and moved the ticket to the resolved status.


