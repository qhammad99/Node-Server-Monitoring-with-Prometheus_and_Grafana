# Node-Server-Monitoring-with-Prometheus_and_Grafana
In that project we will create a node-js server using express framework. Then we will start monitoring that server.

## What is Monitoring?
Monitoring means tracking and observing servers health and operations running on it. We monitor our servers, so if any issue comes we can trace it. Monitoring is of two types
1. Metrics
2. Logs

### Metrics
Metrics means tracking server health. Like how much RAM it is using, how much CPU usage and Storage usage.

### Logs
Logs means maintaining logs information from code.


## Tools for monitoring.
There are many tools available which monitor servers. But we will use following tools to monitor.

1. Prometheus
2. Grafana
3. Grafana Loki

### Prometheus
Prometheus will cover _Metrcis_ monitoring. Prometheus client will generate metrics and we will create route /metrics which will send metrics outside. Then we will use Prometheus server. which will get data from metrics route in intervals. 
    
We will use Docker container of Prometheus server. Docker image for the following is 
    
***prom/prometheus***
    
and port used for that server is

***9090***

It will also need config (yaml) file. We will bind that volumne at

***/etc/prometheus/prometheus.yml***
    

### Grafana

Grafana is a GUI tool, which will provide use beautiful Visuals. We will connect Grafana server with prometeus server to display those values in beautifule graphs.

    Grafana will hold data for some days. Not permanent. Currently it is holding data for 15 Days.

Docker image used for grafana server is

***grafana/grafana-oss***
    
and port used for that server is

***3000***

    By default we have to set dashboard manually, but that is very time consuming, some buil in dashboards already available we will use them, more details we will cover later...

### Grafana Loki
    (Logs monitoring server, Maybe we will not cover that in our project.)


## How to run Project
To run project you will pre-required installation of following.

1. node with nvm
2. docker compose

You can run node js server by following commands in terminal.

```
cd node-server
npm app.js
```

You can run required monitoring server by following commands in terminal.

```
#navigate to main project folder, if you currently in node-server
cd .. 
docker compose up
```

More steps will be added after doing some more work

---

_Created by: qhammad99_

---
If you found any issue, feel free to open issue. 
Thank you!
