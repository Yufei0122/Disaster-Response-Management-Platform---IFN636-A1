Project setup instructions.
Public URL of your project.
Provide a project-specific username and password if we need to access your dashboard.
## CI/CD Workflow

1. **Trigger:** On every push or pull request to main branch.
2. **Testing:** Runs automated tests for backend and frontend.
3. **Backend Deployment:** Deployed to QUT EC2 instance using SSH.
4. **Frontend Deployment:** Built and deployed to AWS (EC2/S3) using GitHub Actions.
5. **Environment Variables:** Stored in GitHub Secrets (EC2_IP, SSH_KEY, etc.)
6. **Commands:** Backend uses `npm install && pm2 restart server.js`; frontend uses `npm install && npm run build`.
