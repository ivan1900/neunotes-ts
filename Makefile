db-permissions:
	sudo chmod 775 docker/mysql -R

docker-build: db-permissions
	docker-compose --env-file ./.env -f docker/docker-compose.yml -p "neunotes-ts" build

run-daemonized: docker-build
	docker-compose --env-file ./.env -f docker/docker-compose.yml -p "neunotes-ts" up -d

dockers-down:
	docker-compose --env-file ./.env -f docker/docker-compose.yml -p "neunotes-ts" down
