# nodev0.12.7tlsmemoryleak
Standalone test case which shows C++ objects pertinent to TLS/SSL leaking over time (Also a timer leak)

Steps:

    node server.js
    node client.js

a. Make sure that the client is running in node v0.12.*

b. The test runs roughly for around 100 seconds, and produces heapdumps before and after the transactions.

c. Ideally, we won't expect any 'traces' of the transactions in the heapdump, but there are neumerous TLSWrap, WriteWrap, SecureContext, and TCP objects lying around.

d. The code has dependency on heapdump module.
