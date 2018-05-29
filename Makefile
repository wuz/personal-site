all: less blog

less:
	lessc style/main.less css/style.css

blog:
	cd blog
	./bb.sh rebuild
	cd ..

serve: all
	httpster

deploy: all
	rsync -vr * root@wuzzard.com:/var/www/html
