import os
import socket
import threading


os.system('cls')
port = int(input("Control Port: "))
host = "127.0.0.1"

s = socket.socket()
s.bind((host, port))
print('Socket successfully bound. Listening...')
s.listen(1)

c, addr = s.accept()
print('Connection incoming from ' + str(addr) )

message = ""
while message != "exit":
    os.system('cls')
    message = input("Command, 'exit' to exit \n > ")
    command = message.encode()
    c.send(bytes(command))
    
c.send(bytes(message.encode()))
os.system('cls')
print('Connection terminated.')
