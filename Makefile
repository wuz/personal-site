all: less blog

less:
	npx lessc style/main.less css/style.css

blog:
	cd blog
	./bb.sh rebuild
	cd ..

serve: all
	npx httpster

deploy: all
	rsync -vr * wuz_wuzzard@ssh.phx.nearlyfreespeech.net:/home/public
