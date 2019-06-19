FROM ubuntu:16.04
MAINTAINER Dockerfiles

RUN apt-get update && apt-get install -y \
	git \
	python \
	python-dev \
	python-setuptools \
	python-pip \
	nginx \
	vim \
	supervisor \
	sqlite3 \
	libmysqlclient-dev \
  && rm -rf /var/lib/apt/lists/*

RUN pip install uwsgi
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY server/conf/nginx-app.conf /etc/nginx/sites-available/default
COPY server/conf/supervisor-app.conf /etc/supervisor/conf.d/

COPY server/docker-scripts/ /docker-scripts/
RUN chmod 755 /docker-scripts/*.sh

COPY server/app/requirements.txt /home/docker/code/app/
RUN pip install -r /home/docker/code/app/requirements.txt

COPY server /home/docker/code/
RUN echo "0" > /home/docker/code/app/report/initial_data/is_data_initialized.txt
RUN python /home/docker/code/app/manage.py migrate
RUN python /home/docker/code/app/report/populate_data_from_docker_build.py

RUN rm /usr/share/nginx/html/index.html

EXPOSE 80
CMD ["/docker-scripts/start.sh"]
