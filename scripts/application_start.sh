#!/bin/bash
cd /home/ubuntu/chaletretreat-frontend
npm start
pm2 start npm --name "chaletretreat-frontend" -- start
pm2 startup
pm2 save
pm2 restart all