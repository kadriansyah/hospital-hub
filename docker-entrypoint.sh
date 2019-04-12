#!/bin/bash
set -e
mongo --host mongo hospital-hub --eval 'db.createUser({user:"admin",pwd:"password",roles:["readWrite"]});'
RAILS_ENV='production' bundle exec rails db:seed
RAILS_ENV='production' bundle exec rails assets:precompile
chown -R app:app /var/www/html/hospital-hub.com/public
chown -R app:app /var/www/html/hospital-hub.com/tmp
chown -R app:app /var/www/html/hospital-hub.com/log
exec "$@"