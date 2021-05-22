top-guns is an open source project to for employers to find and hire top-guns (AKA Remote Engineers) 

## Running on local
### If you don't have docker installed on your system, what are you doing with your life? Install that first!

- Go to root directory and run `docker-compose up`
- Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the magic.

### For those, who are born to hate docker and want to live life without it
#### First run the client (webpack)
- Go to `src/client` directory by running `cd src/client`
- Run `yarn install`
- Run `yarn dev`

#### Now run the server (Express)
- Open a new terminal and go to `src/server` directory by running `cd src/server`
- Run `yarn install`
- Run `yarn dev`
- Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the magic.
