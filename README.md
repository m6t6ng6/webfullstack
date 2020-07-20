
WEBFULLSTACK

uade-01-julio-2020: 
	{
		Dockerfile environment values: 
			[ 	MYSQL_ROOT_USER=<usuario_root>,
				MYSQL_ROOT_PASSWORD=<password>,
				MYSQL_USER=<usuario>,
				MYSQL_PASS=<password>,
				MYSQL_HOST=<nombre_contenedor_mysql>
				MYSQL_PORT=<puerto_mysql>
				MYSQL_DB_VOLUME_LOCAL_PATH=<dir_local_de_mysql>
				APP_URL=<nombre_contenedor_app>
				APP_PORT=3000
				APP_VOLUME_LOCAL_PATH=<dir_local_donde_esta_la_web>
			]
	}
	Copiar la pagina web y sus componentes a APP_VOLUME_LOCAL_PATH

# PARA PROD: - DO
# shell > docker-compose --env-file .env.prod up -d
# funciones_cliente.js > 
# PROD
# var host = "pensaenverde-app.matanga.net.ar";
# var port = 3000;

# PARA STAGING: - local/ docker - MACOS
# shell > docker-compose --env-file .env.staging up -d
# STAGING
# var host = "pensaenverde-app";
# var port = 3000;

# PARA DEV: - local/ raspy - no docker - MACOS
# paste environment variables from .env.dev locally in the computer
# DEV
# var host = "localhost";
# var port = 3300;
