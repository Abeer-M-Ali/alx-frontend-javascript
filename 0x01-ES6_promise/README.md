```markdown
# 0x01. ES6 Promises

### Setup Instructions
1. **Install NodeJS 12.11.x**:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. **Check NodeJS and npm versions**:

```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

3. **Install Jest, Babel, and ESLint** using the supplied `package.json`:

```bash
$ npm install
```

### Configuration Files
Add the files below to your project directory:

- **`package.json`**: Defines project dependencies and configurations.
- **`babel.config.js`**: Configuration for Babel.
- **`utils.js`**: Provides `uploadPhoto` and `createUser` functions.
- **`.eslintrc.js`**: ESLint configuration file.

### Response Data Format
- **`uploadPhoto`** returns:

```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```

- **`createUser`** returns:

```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

## Tasks

### 0. Keep every promise you make and only make promises you can keep
- **File**: `0-promise.js`
- **Description**: Return a Promise using the function `getResponseFromAPI()`.
  
### 1. Don't make a promise...if you know you can't keep it
- **File**: `1-promise.js`
- **Description**: Return a promise that resolves or rejects based on a boolean parameter.

### 2. Catch me if you can!
- **File**: `2-then.js`
- **Description**: Append handlers to a Promise and log a message.

### 3. Handle multiple successful promises
- **File**: `3-all.js`
- **Description**: Collectively resolve multiple promises and log the results.

### 4. Simple promise
- **File**: `4-user-promise.js`
- **Description**: Return a resolved promise with a given object.

### 5. Reject the promises
- **File**: `5-photo-reject.js`
- **Description**: Return a rejected promise with an error message.

### 6. Handle multiple promises
- **File**: `6-final-user.js`
- **Description**: Handle multiple promises and return an array with the results.

### 7. Load balancer
- **File**: `7-load_balancer.js`
- **Description**: Return the value of the promise that resolves first.

### 8. Throw error / try catch
- **File**: `8-try.js`
- **Description**: Handle division and throw errors for invalid operations.

### 9. Throw an error
- **File**: `9-try.js`
- **Description**: Execute a function and handle errors using a queue.

### 10. Await / Async
- **File**: `100-await.js`
- **Description**: Use async/await to handle multiple async operations and return an object.



## Author

- **Abeer Ragab** 

  [<img src="https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white"/>](https://twitter.com/abeerragab5211)
  [<img src="https://img.shields.io/badge/Linkedin-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/abeer-ragab-b25872260/)
  [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white"/>](https://github.com/Abeer-M-Ali)