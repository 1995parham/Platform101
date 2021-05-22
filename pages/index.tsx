import React, { useEffect } from "react";
import ToC from "../components/ToC";

export default function Home() {
  useEffect(() => {
    const setupReveal = async () => {
      const { default: Reveal } = await import("reveal.js");
      const { default: Code } = await import(
        "reveal.js/plugin/highlight/highlight.esm.js"
      );

      const deck = new Reveal();
      deck.initialize({
        plugins: [Code],
        progress: true,
        slideNumber: true,
        hash: true,
      });
    };

    setupReveal();
  }, []);

  const topics = [
    "IoT Big Picture",
    "IoT Platforms, What & Why?",
    "Connectivity",
    "Data/Things Management",
    "APIs/Users/Analytics/...",
    "Review on Popular Platforms",
  ];

  return (
    <div className="reveal" style={{ height: "100vh" }}>
      <div className="slides">
        <section data-background-image="img/background.jpeg">
          <h2>Introduction to</h2>
          <h1>Internet of Things Platforms</h1>
          <h3>Parham Alvani</h3>
          <h5>
            <a href="https://1995parham.github.io">@1995parham</a>
          </h5>
        </section>
        <section>
          <section>
            <h2>Parham Alvani</h2>
            <p>parham.alvani@gmail.com</p>
            <p>
              <a href="https://1995parham.github.io/">1995parham.github.io</a>
            </p>
            <img
              src="img/1995parham-logo.png"
              alt="1995parham-logo"
              width="500"
            />
          </section>
          <section>
            <h2>Who I am?</h2>
            <p>
              <i className="material-icons">school</i> BSc. Software Engineering
              @ Amirkabir University of Technology
            </p>
            <p>
              <i className="material-icons">school</i> MSc. Computer Networks @
              Amirkabir University of Technology
            </p>
            <p>
              <i className="material-icons">school</i> PhD. Computer Networks @
              Amirkabir University of Technology
            </p>
            <p>
              <i className="material-icons">domain</i> Have been in
              IoT/Platforms since June 2015 (Ordibehesht 1394)
            </p>
            <img src="img/ceit-logo.png" alt="ceit-logo" height="200px" />
            <img src="img/aut-logo.png" alt="aut-logo" height="200px" />
          </section>
          <section data-background-image="img/light-the-lamp.jpg">
            <h2>Let&apos;s Light the Lamp</h2>
          </section>
        </section>
        <section>
          <ToC topics={topics} />
        </section>
        <section>
          <ToC topics={topics} selected={0} />
        </section>
        <section>
          <section>
            <h2>IoT?!</h2>
            <p>
              The Internet of things (IoT) is a system of interrelated computing
              devices, mechanical and digital machines provided with{" "}
              <span className="material-hl-orange">
                unique identifiers (UIDs)
              </span>{" "}
              and{" "}
              <span className="material-hl-green">
                the ability to transfer data over a network
              </span>{" "}
              without requiring human-to-human or human-to-computer interaction.
            </p>
          </section>
          <section>
            <h2>History</h2>
            <ul>
              <li>
                So far, the Internet of Things has been most closely associated
                with machine-to-machine (M2M) communication.
              </li>
              <li>
                Although the concept wasn’t named until 1999, the Internet of
                Things has been in development for decades.
              </li>
            </ul>
          </section>
          <section>
            <h2>Future</h2>
            <ul>
              <li>
                The definition of the Internet of things has evolved due to the
                convergence of multiple technologies:
              </li>
              <ul>
                <li>real-time analytics</li>
                <li>machine learning</li>
                <li>commodity sensors</li>
                <li>and embedded systems</li>
              </ul>
            </ul>
          </section>
        </section>
        <section>
          <h2>IoT’s Applications</h2>
          <ul>
            <li>Environmental monitoring</li>
            <li>Infrastructure management</li>
            <li className="material-hl-blue">Smart metering</li>
            <li className="material-hl-pink">Precision agriculture</li>
            <li>Manufacturing</li>
            <li>Energy management</li>
            <li>Medical and healthcare systems</li>
            <li className="material-hl-yellow">Building and home automation</li>
            <li className="material-hl-cyan">Transportation</li>
            <li>...</li>
          </ul>
        </section>
        <section>
          <section>
            <h2>IoT Big Picture</h2>
            <img src="img/iot-big-picture.png" alt="iot-big-picture" />
          </section>
          <section>
            <h2>Devices</h2>
            <ul>
              <li>Sensors, Actuators, etc.</li>
              <li>Design from scratch</li>
              <li>
                Build with ready-made hardware like Arduio, Raspberry Pi, etc.
              </li>
              <li>
                You need to be familar with Electerical and Hardware engineering
              </li>
            </ul>
          </section>
          <section>
            <h2>Connection</h2>
            <ul>
              <li>Zigbee, ZWave, nRF, etc.</li>
              <li>MQTT, HTTP and etc. over IP</li>
              <li>You need to know about Networking and Protocol Stack</li>
            </ul>
          </section>
          <section>
            <h2>Platform</h2>
            <ul>
              <li>Kaa, Thingsboard, etc.</li>
              <li>
                You need to be familar with Backend even Frontend development
                technologies
              </li>
            </ul>
          </section>
          <section>
            <h2>Application</h2>
            <ul>
              <li>Machine Learning, Data Mining, etc.</li>
              <li>Provide intelligence in IoT Stack</li>
            </ul>
          </section>
        </section>
        <section>
          <ToC topics={topics} selected={1} />
        </section>
        <section>
          <section>
            <h2>Why are we using smart things alone?</h2>
            <p>
              The IoT technologies in sync up with{" "}
              <span className="material-bold">cloud</span>
              infrastructures are to result in people-centric{" "}
              <span className="material-italic">smarter</span> environments.
            </p>
          </section>
          <section>
            <h2>IoT Maturity Model</h2>
            <div className="fragment fade-in-then-out">
              <h3>
                Primitive <small>Sensor</small>
              </h3>
              <ul>
                <li>Siloed Sensors</li>
                <li>Isolated M2M Applications</li>
                <li>Limited Functions</li>
              </ul>
            </div>
            <div className="fragment fade-in-then-out">
              <h3>
                Tentative <small>Kaa</small>
              </h3>
              <ul>
                <li>Connected Devices</li>
                <li>Units Inter-communicated</li>
                <li>Lightweight Protocols</li>
              </ul>
            </div>
            <div className="fragment fade-in">
              <h3>
                Advanced <small>OpenRemote</small>
              </h3>
              <ul>
                <li>Managed Service</li>
                <li>Secured Remote Management</li>
                <li>Reliable QoS</li>
              </ul>
            </div>
          </section>
          <section>
            <h2>IoT Maturity Model</h2>
            <div className="fragment fade-in-then-out">
              <h3>
                Dynamic <small>Dashboard</small>
              </h3>
              <ul>
                <li>Smart Decision</li>
                <li>Contextual Analytics Applied</li>
                <li>Harvest of Knowledge and Insights</li>
              </ul>
            </div>
            <div className="fragment fade-in">
              <h3>
                Optimized <small>Rule Engine</small>
              </h3>
              <ul>
                <li>Converged Tech.</li>
                <li>Interplay with Other Disciplines</li>
                <li>Unified Intelligent Solutions</li>
              </ul>
            </div>
          </section>
        </section>
        <section>
          <section>
            <h2>What is an IoT platform ?</h2>
            <div>
              <header>Internet of Things Wiki</header>
              <p>
                In simple words the purpose of any IoT device is to connect with
                other IoT devices and applications (cloud-based mostly) to relay
                information using internet transfer protocols.
              </p>
              <p>
                The gap between the device sensors and data networks is filled
                by an <span className="material-italic">IoT Platform</span>.
              </p>
            </div>
          </section>
          <section>
            <h2>What is thier job ?</h2>
            <ul>
              <li>
                <span className="material-bold">Developers</span> can develop
                their applications with ease
              </li>
              <li>
                <span className="material-bold">End-users</span> can see his/her
                dashboard and customize it
              </li>
              <li>
                <span className="material-bold">The government</span> can
                provide regulation on data
              </li>
            </ul>
          </section>
          <section>
            <h2>Platforms in bigger scope</h2>
            <p>
              As we mentioned earlier, platforms can be used in a governmental
              scope.
            </p>
            <ul>
              <li>Data Regulation and Governance</li>
              <li>IoT Operators</li>
              <li>
                Rules and regulations applies on{" "}
                <span className="material-bold">IoT Operators</span> instead of{" "}
                <span className="material-italic">Customers</span>
              </li>
            </ul>
          </section>
          <section>
            <blockquote>Foucs on Service</blockquote>
            <p>
              Platforms must provide service to customers, and customers use
              these services to implement their unique applications.
            </p>
          </section>
        </section>
        <section>
          <section>
            <h2>Platforms Components/Services</h2>
          </section>
          <section>
            <img src="img/platform.png" alt="platform" />
          </section>
          <section>
            <p>
              There is <span className="material-bold">no specific</span>{" "}
              standard for platform architecture. Here we use a{" "}
              <span className="material-italic">de-facto</span> standard for
              having a better arrangement of materials.
            </p>
            <ul>
              <li>Layer 1:</li>
              <ul>
                <li>Connectivity</li>
              </ul>
              <li>Layer 2:</li>
              <ul>
                <li>Data Management</li>
                <li>Things Management</li>
              </ul>
              <li>Layer 3:</li>
              <ul>
                <li>Accounting</li>
                <li>User/Project Management</li>
                <li>Application Programming Interface</li>
                <li>Analytics</li>
              </ul>
            </ul>
          </section>
        </section>
        <section>
          <ToC topics={topics} selected={2} />
        </section>
        <section>
          <h2>IoT Platforms Features</h2>
          <ul>
            <li className="material-bold">Support of heterogeneous devices</li>
            <ul>
              <li>LoRa things that send thier data using cbor</li>
              <li>nRF nodes that send their data in unreliable way</li>
              <li>...</li>
            </ul>
          </ul>
        </section>
        <section>
          <section>
            <h2>How to connect?</h2>
            <img src="img/how-to-connect.jpg" alt="How to connect" />
          </section>
          <section>
            <h2>Many ways 😱</h2>
            <ul>
              <li>LoRa, nRF, Ethernet, ...</li>
              <li>Custom, IP, TCP, HTTP, MQTT, CoAP, ...</li>
            </ul>
          </section>
          <section>
            <h2>One Solution 🤓</h2>
            <img src="img/platforms-2.png" alt="Platforms complex view" />
          </section>
          <section>
            <h2>Gateways</h2>
            <img src="img/gateway.jpg" alt="gateway" />
          </section>
          <section>
            <h2>Gateways</h2>
            <ul>
              <li>
                By using gateways every non-TCP protocol can be changed to TCP
              </li>
              <li>
                By using gateways every non-(HTTP MQTT ...) protocol can be
                changed to (HTTP MQTT ...)
              </li>
              <li>Gateways can act in may OSI layers</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h2>How to communicate?</h2>
            <img src="img/how-to-communicate.png" alt="How to communicate" />
          </section>
          <section>
            <h2>Many ways 😱</h2>
            <ul>
              <li>JSON</li>
              <li>CBOR</li>
              <li>ASN.1</li>
              <li>...</li>
            </ul>
          </section>
          <section>
            <h2>JSON?</h2>
            <pre>
              <code data-trim data-noescape className="json">
                {`{
    "timestamp": "Mon Feb 20 21:35:00 1995",
    "states": {
        "temperature": 24,
        "humidity": 10
    }
}`}
              </code>
            </pre>
            <pre>
              <code data-trim data-noescape className="json">
                {`{
    "temperature": 24,
    "humidity": 10,
    "status": "online"
}`}
              </code>
            </pre>
            <pre>
              <code data-trim data-noescape className="json">
                {`{
    "101": 10,
    "102": 10,
    "103": 1024,
    "201": 1.24
}`}
              </code>
            </pre>
          </section>
          <section>
            <h2>CBOR?</h2>
            <pre>
              <code data-trim data-noescape className="json">
                {`{
    "101": 10,
    "102": 10,
    "103": 1024,
    "201": 1.24
}`}
              </code>
            </pre>
            <pre>
              <code data-trim data-noescape className="nohighlight">
                A4 # map(4) 63 # text(3) 313031 # "101" 0A # unsigned(10) 63 #
                text(3) 313032 # "102" 0A # unsigned(10) 63 # text(3) 313033 #
                "103" 19 0400 # unsigned(1024) 63 # text(3) 323031 # "201" FB
                3FF3D70A3D70A3D7 # primitive(4608263282710586327)
              </code>
            </pre>
          </section>
          <section>
            <ul>
              <li>Things-Platform Interoperability</li>
              <ul>
                <li>Generated SDK</li>
                <li>Library</li>
                <li>Custom Encoder/Decoder</li>
              </ul>
              <li>Thing Data Validation</li>
              <ul>
                <li>Models</li>
              </ul>
            </ul>
          </section>
        </section>
        <section>
          <h2>Which protocol must we use for connectivity?</h2>
          <ul>
            <li>WSN Protocols</li>
            <li>TCP/IP Based protocols</li>
          </ul>
        </section>
        <section>
          <h2>Protocols in TCP/IP based Platforms</h2>
          <img src="img/protocols.png" alt="protocols in platforms" />
        </section>
        <section>
          <h2>Can you build an IoT system with familiar Web technologies?</h2>
          <ul>
            <li>
              Yes you can, although the result would not be as efficient as with
              the newer protocols.
            </li>
            <li>But efficiency depends on our agents and things</li>
            <li>At the end, what we want to connect ?</li>
          </ul>
        </section>
        <section>
          <h2>Review on some protocols</h2>
          <h3>TCP/IP Based for agent/platform communication</h3>
          <dl>
            <dt>CoAP</dt>
            <dd>UDP - Rqst/Rspnse</dd>
            <dt>MQTT</dt>
            <dd>UDP - Pub/Subsrb</dd>
            <dt>HTTP</dt>
            <dd>TCP - Rqst/Rspnse</dd>
            <dt>SNMP</dt>
            <dd>UDP - Rqst/Rspnse</dd>
          </dl>
        </section>
        <section>
          <h2>IoT Platforms vs IoT Middlewares</h2>
          <ul>
            <li>
              <span className="material-bold">Middleware</span> connects
              different, often complex and already existing programs that were
              not originally designed to be connected.
            </li>
            <li>
              Middleware is part of the architecture enabling connectivity for
              huge numbers of <span className="material-italic">diverse</span>
              Things by providing a connectivity layer for{" "}
              <span className="material-bold">sensors</span> and also for the{" "}
              <span className="material-bold">application layers</span> that
              provide services that ensure effective communications among
              software.
            </li>
          </ul>
        </section>
        <section>
          <section>
            <h2>IoT Platforms contains IoT Middlewars</h2>
          </section>
          <section>
            <h2>Middleware is a connectivity layer</h2>
            <img src="img/platforms-1.png" alt="Platforms over view" />
          </section>
        </section>
        <section>
          <ToC topics={topics} selected={3} />
        </section>
        <section>
          <h2>IoT Platforms Features</h2>
          <ul>
            <li>Low Level Services: Services that interact with Things</li>
            <ul>
              <li>Data Collection</li>
              <li>Monitoring</li>
              <li>Event Delivering</li>
              <li>(Thing) Discovery</li>
            </ul>
          </ul>
        </section>
        <section>
          <h2>Data?!</h2>
          <ul>
            <li>
              IoT Sensors generate{" "}
              <span className="material-italic">large amount</span> of{" "}
              <span className="material-bold">time-series data</span>
            </li>
          </ul>
          <img src="img/3v.png" alt="3v" />
        </section>
        <section>
          <h2>Where to store things data?</h2>
          <ul>
            <li>Relational Databases</li>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
            </ul>
            <li>Document-based Databases</li>
            <ul>
              <li>MongoDB</li>
            </ul>
            <li>Column-based Databases</li>
            <ul>
              <li>Cassandra</li>
            </ul>
          </ul>
        </section>
        <section>
          <h2>Sharding vs Replication</h2>
          <img src="img/shard-replica.png" alt="shard-replica" height="500px" />
        </section>
        <section>
          <h2>Things Management</h2>
          <ul>
            <li>Discovers the things that are connected to network</li>
            <li>Checks the status of the things and alert if they go down</li>
            <li>Updates things framework Over-the-Air</li>
            <li>Performs control actions over them like restart, ...</li>
            <li>etc.</li>
          </ul>
        </section>
        <section>
          <ToC topics={topics} selected={4} />
        </section>
        <section>
          <section>
            <h2>IoT Platforms Features</h2>
            <ul>
              <li>(Data) Access Control</li>
              <li className="material-italic">API</li>
              <ul>
                <li>ReST (Representational State Transfer)</li>
                <li>RPC (Remote Procedure Call)</li>
              </ul>
              <li>Big Data Streaming</li>
            </ul>
          </section>
          <section>
            <h2>IoT Platforms Features</h2>
            <ul>
              <li>Open Source</li>
              <li>
                Deployment Type:
                <ul>
                  <li>PaaS (Platform-as-a-Service)</li>
                  <li>SaaS (Software-as-a-Service)</li>
                  <li>Local Installation</li>
                </ul>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <p>
            Services in this layer have similar challenges to web applications.
          </p>
        </section>
        <section>
          <h2>Users and Access Management</h2>
          <ul>
            <li>Role-Based Access Control</li>
            <li>Attribute-based Access Control</li>
            <li>...</li>
          </ul>
        </section>
        <section>
          <h2>Application Programming Interfaces</h2>
          <ul>
            <li>Many Ways: ReST/gRPC/GraphQL/...</li>
            <li>
              <span className="material-bold">Push</span>/
              <span className="material-italic">Pull</span> Based:
            </li>
            <ul>
              <li>
                Applications <span className="material-italic">pull</span>{" "}
                platform for new data/events
              </li>
              <li>
                Platform <span className="material-bold">pushes</span> new
                data/events to applications
              </li>
            </ul>
          </ul>
        </section>
        <section>
          <section>
            <h2>Big Data Streaming</h2>
          </section>
          <section>
            <h3>Kafka</h3>
            <p>A streaming platform has three key capabilities:</p>
            <ul>
              <li>
                <span className="material-bold">Publish</span> and{" "}
                <span className="material-bold">subscribe</span> to streams of
                records, similar to a message queue or enterprise messaging
                system.
              </li>
              <li>
                <span className="material-italic">Store</span> streams of
                records in a fault-tolerant durable way.
              </li>
              <li>
                <span className="material-italic">Process</span> streams of
                records as they occur.
              </li>
            </ul>
          </section>
          <section>
            <img src="img/kafka-apis.png" alt="kafka apis" height="350px" />
          </section>
          <section>
            <h3>Batch Processing</h3>
            <ul>
              <li>High Latency</li>
              <li>Static Files</li>
            </ul>
          </section>
          <section>
            <h3>Stream Processing</h3>
            <ul>
              <li>Low Latency</li>
              <li>Event Streams</li>
            </ul>
          </section>
          <section>
            <h3>Apache Spark</h3>
            <img src="img/spark.png" alt="spark" />
          </section>
          <section>
            <ul>
              <li>
                Apache Spark achieves high performance for both batch and
                streaming data
              </li>
            </ul>
          </section>
          <section>
            <h3>Apache Flink</h3>
            <img src="img/flink.jpg" alt="flink" />
          </section>
          <section>
            <img src="img/flink-diagram.png" alt="flink-diagram" />
          </section>
          <section>
            <h3>Programs and Dataflows</h3>
            <ul>
              <li>
                The basic building blocks of Flink programs are streams and
                transformations.
              </li>
              <li>
                A stream is a (potentially never-ending) flow of data records.
              </li>
              <li>
                A transformation is an operation that takes one or more streams
                as input, and produces one or more output streams as a result.
              </li>
            </ul>
          </section>
          <section>
            <img src="img/program_dataflow.svg" alt="program_dataflow" />
          </section>
          <section>
            <h3>Windows</h3>
            <ul>
              <li>
                Aggregating events (e.g., counts, sums) works differently on
                streams than in batch processing.
              </li>
              <li>
                Aggregates on streams (counts, sums, etc), are scoped by windows
              </li>
              <ul>
                <li>count over the last 5 minutes</li>
                <li>sum of the last 100 elements</li>
              </ul>
            </ul>
            <img src="img/windows.svg" alt="windows" />
          </section>
          <section>
            <h3>Data Processing Pipeline</h3>
            <img
              src="img/kafka-flink-pipeline.jpg"
              alt="kafka apis"
              height="350px"
            />
          </section>
          <section>
            <h4>
              Batch as a Special case of Streaming, processing bounded and
              unbounded data streams in Apache Flink
            </h4>
            <img src="img/bounded-unbounded.png" alt="bounded-unbounded" />
          </section>
        </section>
        <section>
          <ToC topics={topics} selected={5} />
        </section>
        <section>
          <h2>Real platform architecture</h2>
          <img src="img/platforms-components.png" alt="platforms components" />
        </section>
        <section>
          <section>
            <h2>Platforms Components</h2>
            <dl>
              <dt>Conectivity and Normalization</dt>
              <dd>
                Agents and libraries that ensure constant object connectivity
                and harmonized data formats
              </dd>
              <dt>Device Management</dt>
              <dd>
                Backend tool for the management of device status,{" "}
                <span className="material-italic">
                  remote software deployment and updates
                </span>
              </dd>
            </dl>
          </section>
          <section>
            <h2>Platforms Components</h2>
            <dl>
              <dt>Processing and action mamagement</dt>
              <dd>
                Rule engine that allows for (real-time) actions based on
                incoming sensor and device data
              </dd>
              <dt>Data visualization</dt>
              <dd>Graphical depiction of (real-time) sensor data</dd>
            </dl>
          </section>
          <section>
            <h2>Platforms Components</h2>
            <dl>
              <dt>Analytics</dt>
              <dd>Algorithms for advanced calculations and machine learning</dd>
              <dt>Additional tools</dt>
              <dd>
                Further development tools (e.g., app prototyping, access
                management, reporting)
              </dd>
            </dl>
          </section>
          <section>
            <h2>Platforms Components</h2>
            <dl>
              <dt>External interfaces</dt>
              <dd>
                APIs, SDKs and gateways that acts as interfaces for 3rd party
                systems
              </dd>
              <dt>Database</dt>
              <dd>Repository that stores the important data sets</dd>
            </dl>
          </section>
        </section>
        <section>
          <img src="img/platforms-wcloud.png" alt="Word Cloud of Platforms" />
        </section>
        <section>
          <section>
            <h2>Kaa</h2>
            <a href="https://www.kaaproject.org/">
              <img src="img/kaa.svg" alt="Kaa logo" />
            </a>
            <a href="https://www.kaaiot.io/">
              <img src="img/kaaiot.svg" width="165px" alt="KaaIoT logo" />
            </a>
          </section>
          <section>
            <h2>Kaa [Wikipedia]</h2>
            <p>
              Kaa is a fictional character that Rudyard Kipling describes him as
              an exceptionally long, yellowish Indian rock python.
            </p>
            <h2>Kaa [Kaa]</h2>
            <p>
              100% open-source Internet of Things middleware platform for
              everyone.
            </p>
          </section>
          <section>
            <h2>What is Kaa?</h2>
            <ul>
              <li>
                Reliable foundation for developing your connected products.
              </li>
              <li>
                <span className="material-italic">Transport-agnostic</span> link
                between the hardware and application worlds.
              </li>
              <li>Much more than just a message bus.</li>
              <li>
                <span className="material-bold">Customizable</span> middleware
                that implements necessary functional patterns for the IoT.
              </li>
              <li>Cloud enablement software for your hardware products.</li>
            </ul>
          </section>
          <section>
            <h2>Kaa Architecture</h2>
            <img
              src="img/kaa-high-level-architecture.png"
              alt="kaa-high-level-architecture"
              width="500px"
            />
          </section>
          <section>
            <h2>Kaa Server</h2>
            <p>
              The Kaa server acts as a foundation for your custom-tailored IoT
              back-end system. It offers a number of mechanisms for internal
              customization and integration with external systems:
            </p>
            <ul>
              <li>
                REST interfaces for integration with product-specific services
              </li>
              <li>Log appenders for integration with analytics</li>
              <li>pluggable implementations of custom transports</li>
            </ul>
          </section>
          <section>
            <h2>Kaa Server</h2>
            <p>
              The Kaa server was designed to handle{" "}
              <span className="material-bold">
                millions of connected devices
              </span>{" "}
              under peak pressure without ever getting tired.
            </p>
            <img
              src="img/kaa-server.svg"
              alt="kaa-server"
              width="500px"
              style={{ backgroundColor: "#666" }}
            />
          </section>
          <section>
            <h2>Kaa Data Model</h2>
            <ul>
              <li>Works with structured and unstructured data</li>
              <li>
                Well-structured data provides excellent material for any
                manipulation and analytics
              </li>
              <li>
                This kind of data also helps abstract out any unimportant
                details of the low-level implementation and your hardware.
              </li>
              <li>
                Kaa ensures that even gadgets based on very different
                technologies can be managed and operated identically, as long as
                they share the same set of data schemas.
              </li>
            </ul>
          </section>
          <section>
            <h2>Kaa Generated SDK</h2>
            <ul>
              <li>
                Kaa endpoint SDKs are available in Java, C++, and C, and are
                designed to be embedded into your client application (or
                firmware).
              </li>
              <li>
                They handle client-server communication, authentication, data
                marshalling, encryption, persistence, and other functions
                provided by the platform.
              </li>
            </ul>
          </section>
          <section>
            <h2>What does kaa do for us?</h2>
            <ul>
              <li>Messaging across endpoints</li>
              <li>Notification</li>
              <li>Collecting data from endpoints</li>
            </ul>
          </section>
          <section>
            <h2>Messaging across endpoints</h2>
            <img src="img/kaa-messaging.png" alt="kaa messaging" />
          </section>
          <section>
            <h2>Messaging across endpoints</h2>
            <ul>
              <li>
                Kaa allows for delivery of events, which are structured
                messages, across endpoints
              </li>
              <li>
                The event className family can be used by one or multiple
                applications, thus the event can be shared between applications
              </li>
            </ul>
          </section>
          <section>
            <h2>Notification</h2>
            <img src="img/kaa-notification.png" alt="kaa notification" />
          </section>
          <section>
            <h2>Notification</h2>
            <ul>
              <li>
                Kaa uses notifications to distribute structured messages, posted
                within notification topics, from the server to endpoints
              </li>
            </ul>
          </section>
          <section>
            <h2>Collecting data from endpoints</h2>
            <img src="img/kaa-collecting-data.png" alt="kaa data collecting" />
          </section>
          <section>
            <h2>Collecting data from endpoints</h2>
            <ul>
              <li>
                Kaa provides rich capabilities for collecting and storing
                structured data from endpoints
              </li>
              <li>
                The data collection subsystem in Kaa is designed to collect
                records (logs) of pre-configured structure
              </li>
              <li>
                it store them in the client, transfer from the client to
                Operations service, persist on server for further processing, or
                submit to the immediate stream analysis
              </li>
            </ul>
          </section>
          <section>
            <h2>Distribution Method</h2>
            <ul>
              <li>Open Source</li>
              <li>PaaS</li>
              <li>
                The ground-breaking Kaa 1.0.0 will be available soon for the
                pre-release trial among early subscribers.
              </li>
            </ul>
          </section>
          <section>
            <h2>Let&apos;s learn it in code</h2>
            <img src="img/show-code.jpg" alt="show me the code" />
          </section>
          <section>
            <h2>2 Main Pieces</h2>
            <ul>
              <li>Kaa SDK (Agent)</li>
              <li>Kaa Server</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h2>Thingsboard</h2>
            <a href="https://thingsboard.io/">
              <img src="img/thingsboard.png" alt="thingsboard logo" />
            </a>
          </section>
          <section>
            <h2>What is ThingsBoard?</h2>
            <p>
              Open-source IoT Platform - Device management, data collection,
              processing and visualization.
            </p>
          </section>
          <section>
            <h2>What does thingsboard do for us?</h2>
            <ul>
              <li className="material-bold">
                Provision and manage devices and assets
              </li>
              <ul>
                <li>
                  Provision, monitor and control your IoT entities in secure way
                  using rich server-side APIs.
                </li>
                <li>
                  Define relations between your devices, assets, customers or
                  any other entities.
                </li>
              </ul>
            </ul>
          </section>
          <section>
            <h2>What does thingsboard do for us?</h2>
            <ul>
              <li className="material-bold">Collect and visualize data</li>
              <li>
                <ul>
                  <li>
                    Collect and store telemetry data in scalable and
                    fault-tolerant way.
                  </li>
                  <li>
                    Visualize your data with built-in or custom widgets and
                    flexible dashboards.
                  </li>
                  <li>Share dashboards with your customers.</li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <h2>What does thingsboard do for us?</h2>
            <ul>
              <li className="material-bold">Process and React</li>
              <ul>
                <li>
                  Define data processing rules and trigger reactions using
                  plugins.
                </li>
                <li>
                  Raise alarms on incoming telemetry events or attribute
                  updates.
                </li>
                <li>
                  Enable use-case specific features using customizable rules and
                  plugins.
                </li>
              </ul>
            </ul>
          </section>
          <section>
            <h2>What does thingsboard do for us?</h2>
            <ul>
              <li className="material-bold">IoT Gateway</li>
              <ul>
                <li>
                  Integrate devices connected to legacy and third-party systems
                  using existing protocols.
                </li>
              </ul>
            </ul>
          </section>
          <section>
            <h2>Supported Protocols</h2>
            <ul>
              <li>MQTT</li>
              <li>CoAP</li>
              <li>HTTP</li>
            </ul>
          </section>
          <section>
            <img
              src="img/thingsboard-rule-engine.svg"
              alt="thingsboard rule engine"
            />
          </section>
          <section>
            <h3>
              IoT data analytics using Apache Spark, Kafka and ThingsBoard
            </h3>
            <img
              src="img/spark-thingsboard-integration.svg"
              alt="spark thingsboard integration"
            />
          </section>
        </section>
        <section>
          <section>
            <h2>Home-Assistant</h2>
            <a href="https://home-assistant.io/">
              <img src="img/home-assistant.png" alt="home-assistant logo" />
            </a>
          </section>
          <section>
            <h2>What is Home-Assistant?</h2>
            <p>Open-source home automation platform running on Python 3</p>
          </section>
          <section>
            <h2>What does Home-Assistant do for us?</h2>
            <ul>
              <li>
                Home Assistant will track the state of all the devices in your
                home, so you don&apos;t have to
              </li>
              <li>
                <span className="material-bold">Control</span> all your devices
                from a single, mobile-friendly, interface
              </li>
              <li>
                Set up advanced <span className="material-italic">rules</span>{" "}
                to control devices and bring your home alive.
              </li>
            </ul>
          </section>
          <section>
            <h2>Automating Home Assistant</h2>
            <pre>
              <code>
                (trigger) When Paulus arrives home (condition) and it is after
                sunset: (action) Turn the lights in the living room on
              </code>
            </pre>
          </section>
        </section>
        <section>
          <section>
            <h3>Microsoft Azure</h3>
            <h2>IoT Hub</h2>
            <a href="https://azure.microsoft.com/en-us/services/iot-hub/">
              <img
                src="img/msazure.png"
                alt="Microsoft azure logo"
                height="300px"
              />
            </a>
          </section>
          <section>
            <h3>Connect, monitor, and manage billions of IoT assets</h3>
          </section>
          <section>
            <ul>
              <li>
                Establish bi-directional communication with billions of IoT
                devices
              </li>
              <li>Work with familiar platforms and protocols</li>
              <ul>
                <li>Open-source device SDKs for multiple platforms</li>
                <li>
                  HTTP, Advanced Message Queuing Protocol (AMQP), and MQ
                  Telemetry Transport (MQTT)
                </li>
              </ul>
              <li>
                Authenticate per device for security-enhanced IoT solutions
              </li>
              <li>Manage your IoT devices at scale with device management</li>
              <li>Extend the power of the cloud to your edge device</li>
            </ul>
          </section>
          <section>
            <img
              src="img/azure-iot-reference-architecture-1.png"
              alt="azure-iot-reference-architecture-1"
            />
          </section>
          <section>
            <img
              src="img/azure-iot-reference-architecture-2.png"
              alt="azure-iot-reference-architecture-2"
            />
          </section>
          <section>
            <h2>Azure IoT Hub Integration</h2>
          </section>
        </section>
        <section data-background-image="img/thank-you.jpeg"></section>
      </div>
    </div>
  );
}
