# HTML and MD essays

## Rules of repo

### Commit message format

Our convention for commit messages:

```text
feat: Add beta sequence
^--^  ^---------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: docs, fix, refactor (repo is for essays)
```

### File names

Our convention for file names

**Y**ourname - **F**ile name*.\ &#9745;

*Name - file name*.\ &#x2612;

*name - File name*.\ &#x2612;

*Name-File name*.\ &#x2612;

..

### MD and HTML files

Мust follow the standards and there should be no unnecessary spaces
around the characters/tags, trailing spaces.. This is checked automatically.

## Functionality - tools

* [commitlint](https://commitlint.js.org/#/), [husky](https://github.com/typicode/husky)
Check commit messages
* [ls-lint](https://github.com/loeffel-io/ls-lint) - Check file name
* [html-validate](https://gitlab.com/html-validate/html-validate/-/blob/master/README.md)
Validate HTML files
* [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
Validate MD files

[How the tools are integrated](#How-the-tools-are-integrated)

## How to use after clone

1. Install packages

    ```sh
    npm install
    ```

2. Create html/md file..

3. Check file content (fix)

    ```sh
    npm run check
    ```

4. Commit - standard

    ```sh
    git add <file-name>
    ```

    ```sh
    git commit -m <commit-message>
    ```

If there is a problem with the commit message or file name, you will receive a message.
It will show you in great detail what you need to fix. If you don`t
receive an error message: git push.

## How the tools are integrated

**Commitlint** checks the message through a configuration file in which
I have described the rules of our convention **commitlint.config.js**:

 ```sh
 rules: {
        "type-enum": [2, "always", ["docs", "fix", "refactor"]],
        "subject-case": [2, "always", ["sentence-case"]],
        "scope-empty": [2,"always"],
    }
 ```

The first line shows what types the message can be. The second indicates
that the message after the type must be [sentence-case](#Commit-message-format).
The third row removes the parentheses after the type that is required by default.

**ls-lint** checks the file name through a configuration file in which
I have described the rules of our convention **.ls-lint.yml**:

```sh
ls:
  .md: regex:[A-Z][a-z]+ - [A-Za-z0-9 -_]+
  .html: regex:[A-Z][a-z]+ - [A-Za-z0-9 -_]+
```

For each file type, describe what format
[the name should follow](#File-names).
In our case it is the same and we work with MD and HTML files.

 **html-validate** and **markdownlint-cli** are used without additional settings.
[See references to them](#Functionality---tools).

All checks, even this for commits, are included in ci/cd. Thus, uploading a file
from the graphical environment will bring out the problems here in
Actions and can be fixed before a colleague has to check.
Useful reference about Commitlint in Github Action:
[How to Write Good Commit Messages with Commitlint](https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/).
