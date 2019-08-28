import React, { Component } from 'react';
import styled from 'react-emotion';

import CodeSlide from 'spectacle-code-slide';

import Deck from './components/deck';
import Slide from './components/slide';
import Heading from './components/heading';
import Link from './components/link';
import Text from './components/text';
import Notes from './components/notes';
import Appear from './components/appear';
import Anim from './components/anim';
import BlockQuote from './components/block-quote';
import Quote from './components/quote';
import MarkdownSlides from './components/markdown-slides';
import Markdown from './components/markdown';
import Layout from './components/layout';
import Table from './components/table';
import TableHeader from './components/table-header';
import TableBody from './components/table-body';
import TableItem from './components/table-item';
import TableHeaderItem from './components/table-header-item';
import TableRow from './components/table-row';
import ListItem from './components/list-item';
import List from './components/list';
import Fill from './components/fill';
import SlideSet from './components/slide-set';
import Image from './components/image';
import CodePane from './components/code-pane';
import ComponentPlayground from './components/component-playground';
import GoToAction from './components/go-to-action';
import Cite from './components/cite';


import preloader from './utils/preloader';
import createTheme from './themes/default';
import Interactive from '../example/assets/interactive';
import Terminal from "spectacle-terminal";

require('prismjs/components/prism-markup-templating');
require('prismjs/components/prism-elixir.js');
require('./assets/prism-tomorrow.css');
require('normalize.css');



const images = {
    mux: require('./images/mux.png'),
    citizen: require('./images/textMessage.png'),
    citizen2: require('./images/citizen3.png'),
    citizen3: require('./images/citizen5.png'),
    diode: require('./images/diode.png'),
    smartWatch: require('./images/smartwatch.png'),
    leads: require('./images/leads.png'),
    background: require('./images/background2.svg'),
    background2: require('./images/background.svg'),
    muxConfetti: require('./images/mux_confetti_green.svg'),
    thermostat: require('./images/thermostat.png'),
    test: require('./images/test.png'),
    camera: require('./images/video-camera.svg'),
    muxConfettiRed: require('./images/confetti_red.png'),
    raspberrypi: require('./images/raspberrypi.svg'),
    beaglebone: require('./images/beaglebone.svg'),
    raspberrypiLogo: require('./images/Raspberry_Pi_Logo.png'),
    inception: require('./images/inception.png'),
};

preloader(images);

const theme = createTheme({
    primary: '#000',
    secondary: '#42ff71',
    ternary: '#a2b0ff',
    background: '#2B2B2B'
},{
    primary: 'IBM Plex Mono',
    secondary: {
        name: 'IBM Plex Mono',
        googleFont: true,
        styles: []
    }
});

const CustomListItem = styled(ListItem)`
  font-size: 1.2em;
  color: white;
  text-align: left
`;

export default class BreakingIntoNerves extends Component {
    constructor() {
        super(...arguments);

        this.updateSteps = this.updateSteps.bind(this);
    }

    state = {
        steps: 0
    };

    updateSteps(steps) {
        if (this.state.steps !== steps) {
            this.setState({ steps });
        }
    }

    render() {
        return (
            <Deck
                transition={['', '']}
                theme={theme}
                transitionDuration={500}
                progress="pacman"
                contentWidth="1450px"
                contentHeight="1000px"
            >
                <Slide align="flex-start center" transition={['zoom']} bgColor="primary" bgRepeat="no-repeat">
                    <Heading size={2} lineHeight="1.5" bold textAlign="left" fontWeight={"bold"}>
                        Breaking into Nerves
                    </Heading>
                    <br />
                    <Heading lineHeight="1.3" textAlign="left" bold size={5} textColor="white">
                        Using your Elixir knowledge to create your first embedded Nerves project
                    </Heading>
                </Slide>
                <Slide transition={['fade']} bgColor="black" bgImage={images.muxConfettiRed.replace('/', '')} bgRepeat="repeat" bgDarken={0.75}>
                    <Heading size={1} lineHeight="1.3" textColor="white" bgColor="#00000078">Jacqueline Manzi</Heading>
                    <Heading size={4} lineHeight="1.5" textColor="#42ff71" bgColor="#00000078">Elixir <span style={{color: 'white'}}>/</span> JavaScript <span style={{color: 'white'}}>/</span> Web</Heading>
                    <Image margin="-6.5rem auto" src={images.mux.replace('/', '')} width="600px" />
                </Slide>
                <Slide
                    transitionIn={['slide', 'fade']}
                    transitionOut={['fade']}
                    bgColor="#primary"
                >
                    <Heading fit style={{fontWeight: '400'}}># <span style={{color: "ternary"}}>What's an embedded device?</span></Heading>
                    <br/>
                    <Layout>
                        <List margin="2rem 0">
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Specialized device for one or few specific purposes</Text></Layout>
                            <br/>
                            <br />
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Limited resources and Low power consumption</Text></Layout>
                            <br/>
                            <br/>
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Small size and rugged operating ranges</Text></Layout>
                            <br/>
                            <br/>
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">(Typically) low per-unit cost</Text></Layout>
                        </List>
                        <Layout>
                            <Image margin="10rem 0" src={images.smartWatch.replace('/', '')} width="180px" />
                        </Layout>
                    </Layout>
                </Slide>
                <Slide
                    transitionIn={['slide', 'fade']}
                    transitionOut={['fade']}
                >
                    <Heading size={2} textAlign="left" fontWeight={"400"}># What is Nerves?</Heading>
                    <br />
                    <Layout>
                        <List margin="2rem 5.5rem">
                            <Layout>
                                <Appear>
                                    <div>
                                        <Text textAlign="left" textColor="white" margin="-2px 20px">
                                            Platform
                                        </Text>
                                        <Text textAlign="left" style={{fontSize: "0.9em", marginTop: "30px"}} textColor="ternary" margin="-2px 20px">Customized, minimal Buildroot-derived Linux that boots directly to the BEAM VM.</Text>
                                    </div>
                                </Appear>
                            </Layout>
                            <br/>
                            <br/>
                            <Layout>
                                <Appear>
                                    <div>
                                        <Text textAlign="left" textColor="white" margin="-2px 20px">
                                            Framework
                                        </Text>
                                        <Text textAlign="left" style={{fontSize: "0.9em", marginTop: "30px"}} textColor="ternary" margin="-2px 20px">Ready-to-go library of Elixir modules to get you up and running quickly.</Text>
                                    </div>
                                </Appear>
                            </Layout>
                            <br/>
                            <br/>
                            <Layout>
                                <Appear>
                                    <div>
                                        <Text textAlign="left" textColor="white" margin="-2px 20px">
                                            Tooling
                                        </Text>
                                        <Text textAlign="left" style={{fontSize: "0.9em", marginTop: "30px"}} textColor="ternary" margin="-2px 20px">Powerful command-line tools to manage builds, update firmware, configure devices, and more.</Text>
                                    </div>
                                </Appear>
                            </Layout>
                        </List>
                    </Layout>
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Text textColor="white">Cool, so I can write embedded software in Elixir?</Text>
                    <br/>
                    <Appear><Heading textColor="white">Yes!</Heading></Appear>
                </Slide>
                <Slide
                    transitionIn={['slide', 'zoom']}
                    transitionOut={['slide', 'fade']}
                >
                    <Heading size={2} ># Pick a project</Heading>
                    <Heading size={5} margin="20px 0" textColor="white">Start simple and be realistic</Heading>
                    <Image margin="10rem auto" src={images.camera.replace('/', '')} width="500x" />
                    <Layout> <Text textColor="white"><i>like a security camera</i></Text></Layout>
                </Slide>
                <Slide>
                    <div>
                        <Text style={{color: 'white', fontSize: "1.2em"}}>Because my neighborhood is <i style={{color: "#a2b0ff"}}>interesting</i></Text>
                        <br />
                        <div style={{display: 'flex'}}>
                            <Image src={images.citizen3.replace('/', '')} width="700" />
                        </div>
                    </div>
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Heading size={2} textAlign="left" lineHeight={1.5}># Choosing hardware</Heading>
                    <Heading size={5}  margin="20px 0 0 120px" textColor="white" textAlign="left">Currently (listed) supported hardware</Heading>
                    <Layout style={{color: '#fff', fontSize: '0.8em', margin: '0 0 0 118px', lineHeight: '1.5'}}>
                        <List margin="2rem">
                            <div style={{display: 'flex'}}><Text textColor="secondary" lineHeight="0.9" margin="0 20px 0 0">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi A+, B, B+</Text></div>
                            <br />
                            <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textAlign="left" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi Zero and Zero W</Text></div>
                            <br/>
                            <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi 2</Text></div>
                            <br/>
                            <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi 3 B, B+</Text></div>
                            <br/>
                            <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi 4 B</Text></div>
                            <br/>
                            <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">BeagleBone Black, Green, Green Wireless</Text></div>
                            <br/>
                            <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">PocketBeagle</Text></div>
                            <br/>
                            <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Generic x86_64</Text></div>
                        </List>
                    </Layout>
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Heading size={2} style={{fontWeight: '400'}} fit># Raspberry Pi vs BeagleBone </Heading>
                    <Layout>
                        <Image margin="10rem auto" src={images.raspberrypi.replace('/', '')} width="600px" />
                        <Image margin="10rem auto" src={images.beaglebone.replace('/', '')} width="600px" />
                    </Layout>
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Heading size={2} fit style={{fontWeight: '400'}}># Easiest Option = Raspberry Pi 3 B+</Heading>
                    <Layout style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <Image margin="10rem 0" src={images.raspberrypiLogo.replace('/', '')} width="300px" />
                        <div>
                            <Text margin="20px 10px" textAlign="left" textColor="white"> 4 USB 2.0 ports</Text>
                            <Text margin="20px 10px" textAlign="left" textColor="white"> WIFI and Bluetooth</Text>
                            <Text margin="20px 10px" textAlign="left" textColor="white"> Ethernet port</Text>
                            <Text margin="20px 10px" textAlign="left" textColor="white"> HDMI</Text>
                            <Text margin="20px 10px" textAlign="left" textColor="white"> CSI camera port (for Pi camera)</Text>
                            <Text margin="20px 10px" textAlign="left" textColor="white"> $35</Text>
                        </div>
                    </Layout>
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Text textColor="white" style={{fontSize: "1.7em"}}>Ok we've got our gear, now what?</Text>
                    <Layout style={{alignItems: 'flex-start', justifyContent: 'space-evenly', margin: '50px 0'}}>
                        <List>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">Raspberry Pi</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">Picam</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">SD card</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">SD card writer</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">Power supply</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">Ethernet cable</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">Computer</ListItem>
                        </List>
                    </Layout>
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Heading fit size={2} style={{fontWeight: '400'}} lineHeight={1.2}># Install Nerves on your computer (host)</Heading>
                    <br/>
                    <List margin="2rem 5.5rem">
                        <Layout>
                            <div>
                                <Text margin="20px 10px" textAlign="left" textColor="white" style={{fontSize: '1.8em'}}>Nerves requires:</Text>
                                <List>
                                    <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text textColor="ternary"  margin="0">Erlang</Text></div>
                                    <br/>
                                    <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text textColor="ternary"  margin="0">Elixir</Text></div>
                                    <br/>
                                    <div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text textColor="ternary"  margin="0">A few tools for packaging firmware images</Text></div>
                                </List>
                                <br/>
                                <br/>
                                <Text textAlign="left" textColor="white" margin="0"><Link style={{color: '#975aee'}} href="https://hexdocs.pm/nerves/installation.html">https://hexdocs.pm/nerves/installation.html</Link></Text>
                            </div>
                        </Layout>
                    </List>
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Terminal isMaximized title="Creating a new Nerves app" output={[
                        "mix nerves.new hello_nerves",
                        <div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/config/config.exs</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/config/target.exs</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/lib/hello_nerves.ex</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/lib/hello_nerves/application.ex</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/test/test_helper.exs</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/test/hello_nerves_test.exs</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/rel/vm.args.eex</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/rootfs_overlay/etc/iex.exs</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/.gitignore</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/.formatter.exs</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/mix.exs</div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> hello_nerves/README.md</div>
                            <br/>
                            <div style={{color: '#42ff71'}}>Fetch and install dependencies? [Yn]</div>
                        </div>,
                        "Y",
                        <div>
                            <div>* running mix deps.get</div>
                            <div>Your Nerves project was created successfully.</div>
                        </div>
                    ]}
                    />
                </Slide>
                <CodeSlide
                    bgColor="background"
                    transition={[]}
                    lang="elixir"
                    code={require('raw-loader!./assets/ssh.example')}
                    ranges={[
                        { loc: [11, 33], title: 'config/target.exs - Load your SSH keys', note: '' },
                        { loc: [34, 41], title: 'config/target.exs - Ethernet target config', note: '' }
                    ]}
                />
                <Slide>
                    <Terminal isMaximized title="Build your app for your target" output={[
                        "export MIX_TARGET=rpi3 mix firmware",
                        <div>
                            <div style={{color: '#42ff71'}}>Nerves environment</div>
                            <div style={{color: '#B9B80D'}}>MIX_TARGET:   rpi3</div>
                            <div style={{color: '#B9B80D'}}>MIX_ENV:      dev</div>
                        </div>,
                        <div>
                            <div></div>
                            <div style={{color: '#42ff71'}}>==> nerves_system_br</div>
                            <div style={{color: '#42ff71'}}>Generated nerves_system_br app</div>
                            <div></div>
                        </div>,
                        <div>
                            <br/>
                            <div style={{color: '#42ff71'}}>(... lot's of building happening)</div>
                            <div style={{color: '#B9B80D'}}>|nerves_bootstrap| Building OTP Release...</div>
                        </div>,
                        <div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> _build/rpi3_dev/rel/hello_nerves/releases/0.1.0/vm.args</div>
                            <div style={{color: '#42ff71'}}>Updating base firmware image with Erlang release...</div>
                        </div>,
                        <div>
                            <br/>
                            <div style={{color: '#42ff71'}}>(... statistics info ...)</div>
                            <div style={{color: '#42ff71'}}>Building /Users/YourUser/hello_nerves/_build/rpi3_dev/nerves/images/hello_nerves.fw..</div>
                        </div>
                    ]}
                    />
                </Slide>
                <Slide>
                    <Terminal isMaximized title="Burn the firmware to your SD card" output={[
                        "mix firmware.burn",
                        <div>
                            <div style={{color: '#42ff71'}}>Nerves environment</div>
                            <div style={{color: '#B9B80D'}}>MIX_TARGET:   rpi3</div>
                            <div style={{color: '#B9B80D'}}>MIX_ENV:      dev</div>
                        </div>,
                        <div>
                            <div></div>
                            <div style={{color: '#42ff71'}}>==> nerves_system_br</div>
                            <div style={{color: '#42ff71'}}>Generated nerves_system_br app</div>
                            <div></div>
                        </div>,
                        <div>
                            <br/>
                            <div style={{color: '#42ff71'}}>(... lot's of building happening)</div>
                            <div style={{color: '#B9B80D'}}>|nerves_bootstrap| Building OTP Release...</div>
                        </div>,
                        <div>
                            <div style={{color: '#42ff71'}}><span style={{color: '#B9B80D'}}>* creating</span> _build/rpi3_dev/rel/hello_nerves/releases/0.1.0/vm.args</div>
                            <div style={{color: '#42ff71'}}>Updating base firmware image with Erlang release...</div>
                        </div>,
                        <div>
                            <br/>
                            <div style={{color: '#42ff71'}}>(... statics info ...)</div>
                            <div style={{color: '#42ff71'}}>Building /Users/YourUser/hello_nerves/_build/rpi3_dev/nerves/images/hello_nerves.fw..</div>
                        </div>
                    ]}
                    />
                </Slide>
                <Slide>
                    <Text lineHeight={1.5} style={{fontSize: "2em"}} textColor="white">Wait, do I need to burn to my SD card every time I want to deploy new code?</Text>
                </Slide>
                <Slide>
                    <Layout style={{justifyContent: "center"}}>
                        <List>
                            <Text lineHeight={1.5} style={{fontSize: "1.6em"}} textColor="white">Ok, now put the card in your device (target)</Text>
                            <br/>
                            <Appear><Text lineHeight={1.5} style={{fontSize: "1.6em"}} textColor="white">Plug your power supply into your target</Text></Appear>
                            <br />
                            <Appear><Text lineHeight={1.5} style={{fontSize: "1.6em"}} textColor="white">Connect your target ethernet to your computer</Text></Appear>
                            <br />
                            <Appear><Text lineHeight={1.5} style={{fontSize: "1.6em"}} textColor="white">Check to make sure you're connected</Text></Appear>
                        </List>
                    </Layout>
                </Slide>
                <Slide>
                    <Terminal isMaximized title="Ping your target and SSH in" output={[
                        "ping nerves.local",
                        <div>
                            <div style={{color: '#42ff71'}}>PING nerves.local (192.168.2.2): 56 data bytes</div>
                            <div style={{color: '#42ff71'}}>64 bytes from 192.168.2.2: icmp_seq=0 ttl=64 time=0.544 ms</div>
                            <div style={{color: '#42ff71'}}>64 bytes from 192.168.2.2: icmp_seq=1 ttl=64 time=0.557 ms</div>
                            <div style={{color: '#42ff71'}}>64 bytes from 192.168.2.2: icmp_seq=2 ttl=64 time=0.518 ms</div>
                            <br />
                        </div>,
                        "ssh pi@nerves.local",
                        <div>
                            <div style={{color: '#42ff71'}}>RingLogger is collecting log messages from Elixir and Linux. To see the</div>
                            <div style={{color: '#42ff71'}}>messages, either attach the current IEx session to the logger:</div>
                            <br />
                            <div style={{color: '#42ff71'}}>  RingLogger.attach</div>
                            <br/>
                            <div style={{color: '#42ff71'}}>or print the next messages in the log:</div>
                            <br/>
                            <div style={{color: '#42ff71'}}>  RingLogger.next</div>
                            <br/>
                            <div style={{color: '#B9B80D'}}>iex></div>
                        </div>,
                    ]}
                    />
                </Slide>
                <Slide>
                    <Text lineHeight={1.5} style={{fontSize: "2em"}} textColor="white">We're in!</Text>
                    <br/>
                    <Appear><Text lineHeight={1.5} style={{fontSize: "2em"}} textColor="white">Let's take a look around</Text></Appear>
                    <br />
                    <Appear><Text lineHeight={1.5} style={{fontSize: "2em"}} textColor="white">Oooh what's this <span style={{color: "#a2b0ff"}}>Toolshed</span> thing</Text></Appear>
                </Slide>
                <Slide>
                    <Text lineHeight={1.5} style={{fontSize: "2em"}} textColor="white">Ok cool, let's do something useful</Text>
                    <Appear><Text lineHeight={1.5} style={{fontSize: "2em"}} textColor="white">...like build a security camera!</Text></Appear>
                </Slide>
                <Slide>
                    <Text lineHeight={1.5} style={{fontSize: "2em"}} textColor="white">Are there any Elixir libraries for the Picam?</Text>
                    <Appear>
                        <div>
                            <br/>
                            <Text lineHeight={1.5} style={{fontSize: "2em"}} textColor="ternary">Yes! Elixir-Vision</Text>
                            <Text textAlign="center" textColor="white" margin="0"><Link style={{color: '#975aee'}} href="https://github.com/elixir-vision/picam">https://github.com/elixir-vision/picam</Link></Text>
                        </div>
                    </Appear>
                </Slide>
                <Slide>
                    <Layout style={{flexDirection: 'column', margin: '50px 0 0 0', alignItems: 'center'}}>
                        <Text lineHeight={1.5} style={{fontSize: "1.6em"}} textColor="white">Let's implement the example HTTP project</Text>
                        <br/>
                        <Image src={images.inception.replace('/', '')} width="700px" />
                    </Layout>
                </Slide>
                <Slide>
                    <Text lineHeight={1.5} style={{fontSize: "1.6em"}} textColor="white">Well that's pretty neat.</Text>
                    <Text lineHeight={1.5} style={{fontSize: "1.6em"}} textColor="white">Can I use this for basic motion detection?</Text>
                    <br/>
                    <Appear><Text fit textColor="ternary">What if I compare the previous frame to the current frame?</Text></Appear>
                </Slide>
                <Slide>
                    <CodeSlide
                        bgColor="background"
                        transition={[]}
                        lang="elixir"
                        code={require('raw-loader!./assets/motion.example')}
                        ranges={[
                            { loc: [2, 19], title: 'Basic GenServer to detect motion', note: '' },
                        ]}
                    />
                </Slide>
                <Slide>
                    <Text lineHeight={1.5} style={{fontSize: "2em"}} textColor="white">Holy crap, I did not expect that to work</Text>
                </Slide>
                <Slide>
                    <Text lineHeight={1.5} style={{fontSize: "1.6em"}} textColor="white">It would be cool if I could start streaming video to the cloud when motion is detected</Text>
                    <br/>
                    <Appear><Text lineHeight={1.5} style={{fontSize: "1.6em"}} textColor="ternary">Can I do that with this constant stream of jpegs?</Text></Appear>
                </Slide>
                <Slide>
                    <div style={{textAlign: 'left'}}>
                        <Text textColor="ternary" margin="0">Me:</Text>
                        <Text textColor="white">Hey guys, can I live-stream a bunch of jpegs?</Text>
                    </div>
                    <br/>
                    <br/>
                    <Appear>
                        <div style={{textAlign: 'left', fontSize: '1.2em'}}><i style={{color: "#a2b0ff"}}>lot's of laughter in the background</i></div>
                    </Appear>
                    <br/>
                    <div style={{textAlign: 'left'}}>
                        <br/>
                        <Appear>
                            <div>
                                <Text textColor="ternary" margin="0">Video engineers I work with:</Text>
                                <Text textColor="white" lineHeight={1.5}>lol, no - Use FFMPEG</Text>
                            </div>
                        </Appear>
                    </div>
                </Slide>
                <Slide>
                    <Heading># FFMPEG... is that on this build?</Heading>
                    <div>/usr/bin</div>
                    <div>Yeah, no</div>
                </Slide>
                <Slide>
                    <Heading># Building a custom Nerves System</Heading>
                    <div>You'll need Linux (or a VM for cross compilation)</div>
                    <div>Steps code</div>
                </Slide>
                <Slide>
                    <Heading># Configuring your build</Heading>
                    <div>Screenshots</div>
                </Slide>
                <Slide>
                    <div>Show games section</div>
                </Slide>
                <Slide>
                    <div>Export environment variables</div>
                </Slide>
                <Slide>
                    <div>Build, deploy, and ssh into your custom system</div>
                </Slide>
                <Slide>
                    <div>Checkout the /usr/bin directory now</div>
                    <div>show that ffmpeg is there</div>
                </Slide>
                <Slide>
                    <div>Ok, now how do we actually interact with this in Elixir?</div>
                    <div>Let's look at the elixir vision project and see what they do</div>
                    <div>They're using Ports!</div>
                </Slide>
                <Slide>
                    <div>Adding live streaming code to the GenServer with a port</div>
                </Slide>
                <Slide>
                    <div>Adding Twilio text message alert</div>
                </Slide>
                <Slide>
                    <div>Adding in a flag to enable it</div>
                </Slide>
                <Slide>
                    <div>SSH in and enable it with message passing to the process</div>
                </Slide>
                <Slide>
                    <div>Try it out... and... errors!</div>
                    <div>Ok, what is happening</div>
                    <div>Oh, the elixir vision library is accessing the picam and one process can at a time</div>
                </Slide>
                <Slide>
                    <div>Let's kill the Picam port!</div>
                </Slide>
                <Slide>
                    <div>Show working stuff</div>
                </Slide>
                <Slide>
                    <div>Nifs vs Ports</div>
                </Slide>
                <Slide>
                    <div>What's a Nif?</div>
                </Slide>
                <Slide>
                    <div>GenSevers and image writing to /tmp</div>
                </Slide>
                <Slide>
                    <div>Bloopers Section</div>
                </Slide>
                <Slide>
                    <div>Nerves resources Slack / team</div>
                </Slide>
                <Slide>
                    <div>Closing slide with twitter handle</div>
                </Slide>
            </Deck>
        );
    }
}
