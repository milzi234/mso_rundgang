dev:
	docker run -v $(PWD)/app-files:/usr/share/nginx/html:ro -d -p 8080:80 nginx