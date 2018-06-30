import os
import socket
import threading


os.system('cls')
host = input("Host: ")
if host == "":
    host = "127.0.0.1"
print(host)
port = int(input("Control Port: "))
if port == "":
    port = 1

s = socket.socket()
s.connect((host, port))
print('Client successfully connected. Waiting for commands...')

def Move(command):
    os.system('cls')
    if command == "up":
        print("MOVING UP")
    elif command == "down":
        print("MOVING DOWN")
    elif command == "right":
        print("TURNING RIGHT")
    elif command == "left":
        print("TURNING LEFT")
    else:
        print("COMMAND INVALID")
        

while True:
    command = s.recv(2048)
    command = command.decode("utf-8")
    if command != "":
        threading._start_new_thread(Move, (command,) )