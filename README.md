# Fan Gateway
Docker container that listens for two different GET API calls and relays them to the address of the fan controller that's specified. Rate limiting allows only 1 call per minute.  

## Purpose
I have an ESP32 that listens for API calls and sends commands over 434MHz to my ceiling fan. I wanted to be able to trigger this functionality from a website but I didn't want to call my ESP32 directly as well as wanting to have more granular control.  
This container listens for the only two API endpoints I've given it, `/on` and `/off`, and then relays those commands to any address that is passed to the container at runtime. Rate limiting is built in and only allows 1 call per minute from anywhere to prevent the fan from being switched on and off repeatedly in rapid succession.

## Use  
Build and deploy as any other container. The server is listening on port 3000. When deploying you need to pass the environment variable for the address to relay commands to:
`FAN_SERVER="http://AddressHere"`  

### API
`/fan/api/on`  
`/fan/api/off`  