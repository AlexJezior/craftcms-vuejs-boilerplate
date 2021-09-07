# CraftCMS VueJS Boilerplate

CraftCMS VueJS Sass and Tailwind boilerplate with docker configuration for local development.

## Usage

- Start off by forking the repository for your project.
- Install the composer dependencies: `composer i`
- Navigate to the `docker/nginx` directory and follow the `README.md` instructions for generating a self-signed certificate for your local development environment.
- Update any additional settings in the `docker-compose.yml` file necessary for your project. I.e. the container name prefixes and default mysql configuration.
- Start the docker container `docker-compose up`
- Navigate to the admin panel, and follow the installation process.
- Enjoy! :)
