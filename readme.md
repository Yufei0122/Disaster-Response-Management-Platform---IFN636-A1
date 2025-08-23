**Project setup instructions.**  
Prerequisite:  
Please install the following software:  
• Nodejs [https://nodejs.org/en] - Version should be 22.  
• Git [https://git-scm.com/]  
• VS code editor [https://code.visualstudio.com/]  
Create account in following web tools:  
• MongoDB Account [https://account.mongodb.com/account/login] - In tutorial, we have also showed how can you create MongoDB account and database: follow step number 2.  
• GitHub Account [https://github.com/signup?source=login] - We also need to create GitHub account, if you have one.  
Step by step procedure:  
1.clone the code  
git clone https://github.com/Yufei0122/Disaster-Response-Management-Platform---IFN636-A1.git  
#enter the code  
cd Disaster-Response-Management-Platform---IFN636-A1  
2.dependencies install  
Frontend:  
cd frontend  
npm install  
Backend:  
cd backend  
npm install  
3.setup .env file  
create an .env file in the backend floder,paste following codes:  
MONGO_URI=mongodb+srv://hyf0122:hyf545046263@ifn636tutorial.dx3nri7.mongodb.net/IFN636A1?retryWrites=true&w=majority&appName=IFN636Tutorial  
JWT_SECRET=2J8zqkP7VN6bxzg+Wy7DQZsd3Yx8mF3Bl0kch6HYtFs=  
PORT=5001  
4.start app  
run the commond to root in backend folder:cd backend  
run the commond to start the app: npm start  

**Public URL:**
Disaster Response Management Platform
**Provide a project-specific username and password if we need to access your dashboard.**
Email:admin@admin.com
Password:addmin
Or just register a new account.
## CI/CD Workflow

1. **Trigger:** On every push or pull request to main branch.
2. **Testing:** Runs automated tests for backend and frontend.
3. **Backend Deployment:** Deployed to QUT EC2 instance using SSH.
4. **Frontend Deployment:** Built and deployed to AWS (EC2/S3) using GitHub Actions.
5. **Environment Variables:** Stored in GitHub Secrets (EC2_IP, SSH_KEY, etc.)
6. **Commands:** Backend uses `npm install && pm2 restart server.js`; frontend uses `npm install && npm run build`.
