
function init(){
	if test ! -f "/data/nginx/nginx.conf" ;then
	  mkdir -p /data/nginx/
	  mkdir -p /data/nginx/conf.d
	  mkdir -p /data/nginx/cert
	  mkdir -p /data/nginx/dist
		cp nginx.conf /data/nginx/
		cp api.net-data.cn.conf /data/nginx/conf.d

		chmod 777 /data/nginx/nginx.conf
    chmod -R 777 /data/nginx/cert
    chmod -R 777 /data/nginx/conf.d
	fi
}

function up(){
	docker-compose up -d
}

function down(){
	docker-compose down
}

function rmaaa(){
	docker-compose rm -fvs
}

function build(){
	docker-compose build
}

function rma(){
	rm -rf /data/nginx
}

case "$1" in
"init")
	init
;;
"up")
	up
;;
"down")
	down
;;
"rm")
	rmaaa
;;
"build")
	build
;;
"rma")
	rma
;;
*)
	echo "Error input."
;;
esac
