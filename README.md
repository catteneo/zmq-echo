# Sample Implementation of a ZeroMQ Echo Server and Client

ZeroMQ is a messaging library that provides [sockets on
steroids](http://zguide.zeromq.org/php:chapter1).  The private
[`npm`](https://www.npmjs.com/) package in this repository implements an echo
server and a client that illustrate some of the features gained by using ZeroMQ
sockets.

## Prerequisites

First make sure [ZeroMQ is
installed](http://www.zeromq.org/intro:get-the-software). Both the ZeroMQ
library and its header files are required. The installation instructions vary
from platform to platform. In the Debian and Ubuntu distributions, it's enough to
run the following command:

```sh
sudo apt-get install libzmq-dev
```

Perhaps needless to say: `git` and `npm` should also be installed in your system
to be able to run the commands in the next section.

## Installation

```sh
git clone https://github.com/n-riesco/zmq-echo.git
npm install zmq-echo
```

## Usage

To start the echo server up, we type in the terminal:

```sh
zmq-echo-server tcp://127.0.0.1:7777
```

where `tcp://127.0.0.1:7777` is the address the echo server will bind. The
server will keep running until CTRL-C is pressed.

And to start the echo client up, we type in another terminal:

```sh
zmq-echo-client tcp://127.0.0.1:7777
```

where `tcp://127.0.0.1:7777` must be the address used to bind the server.

The client sends every typed line to the address. If the server is bound to
that address, it will reply back with the same content sent by the client. When
the client receives the response back, it will print it out. E.g.:

```sh
$ zmq-echo-client tcp://127.0.0.1:7777
Hello, World!
Hello, World!
```

The server and client can be killed with a simple CTRL-C. Ensure they've been
killed before proceeding into the next section.

## The Steroids

What if the server isn't running when the client sends its message? Here's
where the steroids come into action. ZMQ will ensure the message doesn't get
lost.

Let's see with an example how this works. This time, first, we run the client
and type the message:

```sh
$ zmq-echo-client tcp://127.0.0.1:7777
Hello, World!
```

Then, we run the server:

```sh
zmq-echo-server tcp://127.0.0.1:7777
```

And just after that, we will see the reply in the client's terminal:

```sh
$ zmq-echo-client tcp://127.0.0.1:7777
Hello, World!
Hello, World!
```
