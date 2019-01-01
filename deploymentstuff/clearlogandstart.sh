sudo systemctl stop beerwithai
sudo journalctl --rotate
sudo journalctl --vacuum-time=1s
sudo systemctl start beerwithai
