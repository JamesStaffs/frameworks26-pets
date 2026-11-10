This project contains two subfolders
- backend - Node.js API using Express
- front-end - Next.js web application

You can use these as two separate projects, however if you open the top level directory in Visual Studio Code you can also use these helper commands:

1. Run `npm run install:all`, which will run 'npm run install' within the top level, frontend and backend directories
1. Run `npm run dev`, which will run 'npm run dev' in the frontend and backend directories
1. Open http://localhost:3000 in your web browser to access your Next.js application
1. Open http://localhost:3900 in your web browser (or use this in Postman) to test your API responses
1. Use http://localhost:3900 as the API endpoint in your Next.js application