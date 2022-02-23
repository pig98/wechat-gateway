tar --exclude=wechat-gateway.tar.gz -zcf wechat-gateway.tar.gz *
ip=$1
scp wechat-gateway.tar.gz root@$ip:
ssh root@$ip "rm -rf /data/wechat-gateway/*; tar zxf wechat-gateway.tar.gz -C /data/wechat-gateway"
ssh root@$ip "docker restart wechat-gateway"
