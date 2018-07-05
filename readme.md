# About
You will be tasked with building an API from scratch. This API should:

Follow RESTful patterns
Use an opinionated architecture (e.g. MVC)
Include error handling
Include nested resources
You may optionally test your project.

## Bank Account

### Accounts
1. ID: (You Choose) A unique id that represents the account. Created automatically.
2. Name: (String) Name of the account. Required.
3. Bank Name: (String) Name of the bank the account is associated with. Required.
4. Description: (String) A description of the account. Required.
5. Transactions: (Array) An array of transactions.

### Transactions
1. ID: (You Choose) A unique id that represents the transaction. Created automatically.
2. Title: (String) A title for the transaction. Cannot be more than 8 characters. Required.
3. Amount: (Number) A positive or negative number depending on the type of transaction. Required.
4. Pending: (Boolean) A true/false value for whether or not the transaction is pending. Required. Defaults to true.

Build RESTful routes so that you can:

Create, Read, Update, and Delete accounts
Create, Read, Update, and Delete transactions through accounts
