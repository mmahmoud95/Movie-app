Project Structure:

```
movie-app/
├── movie-app-backend/
├── movie-app-frontend/
```

### Frontend:
- Navigate to frontend: `cd movie-app-frontend`
- install with `npm install -f`
- Runs with: `npm run dev`
- URL: [http://localhost:5173/](http://localhost:5173/)

### Backend:
- Navigate to backend: `cd movie-app-backend`
- - install with `npm install -f`
- .env.example add data like in .env.example with your environment 
- Runs with: `npm run start:dev`
- URL: [http://localhost:3000/](http://localhost:3000/)
- Uses: PostgreSQL, Prisma

### Setting up PostgreSQL and Prisma:
1. **Install PostgreSQL:**
   - Download and install from [PostgreSQL Official Site](https://www.postgresql.org/download/)
   - Start PostgreSQL service
   - Create a database: `CREATE DATABASE movie_app;`

2. **Set up Prisma:**
   - Navigate to backend: `cd movie-app-backend`
   - Install Prisma: `npm install prisma --save-dev`
   - Initialize Prisma: `npx prisma init`
   - Update `.env` file with your database URL: `DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/movie_app"`
   - Run migrations: `npx prisma migrate dev --name init`
   - Generate Prisma client: `npx prisma generate`

