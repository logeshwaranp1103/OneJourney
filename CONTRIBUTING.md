# Contributing to OneJourney

Thank you for contributing to our hackathon project! To maintain a clean and reliable codebase, please adhere to the following guidance:

## Quick Rules
1.  **Do not push directly to `main`**. All changes must go through feature branches and pull requests.
2.  **Pull the latest `main`** before beginning any new feature branch:
    ```bash
    git checkout main
    git pull origin main
    ```
3.  **Always create a feature or fix branch** with appropriate prefixes (e.g. `feature/name` or `fix/issue`).
4.  **Keep commits focused** and write meaningful commit messages with descriptive prefixes (e.g. `feat:`, `fix:`, `docs:`).
5.  **Run lint and build verification** locally before pushing:
    ```bash
    npm run lint
    npm run build
    ```
    Your PR branch will block merges if linting or compilation fails.
6.  **Open a pull request** from your feature branch to `main` for review.
7.  **Add screenshots or screen recordings** to the PR description for any UI/UX or styling changes.
8.  **Resolve conflicts locally** before updating the pull request.
9.  **Obtain at least one teammate review** and approval before merging.
10. **Never commit secrets, API keys, or `.env` files**. Keep environment setups secure.
