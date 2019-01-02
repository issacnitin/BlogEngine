sudo systemctl stop beerwithai
sudo cp beerwithai.service /etc/systemd/system/
sudo journalctl --rotate
sudo journalctl --vacuum-time=1s
sudo systemctl start beerwithai
sudo systemctl daemon-reload
sudo journalctl -u beerwithai
