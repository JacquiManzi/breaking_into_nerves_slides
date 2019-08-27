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
    citizen: require('./images/citizen4.png'),
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
                    bgColor="primary"
                >
                    <Heading fit style={{fontWeight: '400'}}># <span style={{color: "ternary"}}>What's an embedded device?</span></Heading>
                    <br/>
                    <Layout>
                        <List margin="2rem 5.5rem">
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Specialized device for one or few specific purposes</Text></Layout>
                            <br/>
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Limited resources and Low power consumption</Text></Layout>
                            <br/>
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Small size and rugged operating ranges</Text></Layout>
                            <br/>
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">(Typically) low per-unit cost</Text></Layout>
                        </List>
                        <Layout>
                            <Image margin="10rem 0" src={images.smartWatch.replace('/', '')} width="120px" />
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
                                <div>
                                    <Text textAlign="left" textColor="white" margin="-2px 20px">
                                        Platform
                                    </Text>
                                    <Text textAlign="left" style={{fontSize: "0.9em", marginTop: "30px"}} textColor="ternary" margin="-2px 20px">Customized, minimal Buildroot-derived Linux that boots directly to the BEAM VM.</Text>
                                </div>
                            </Layout>
                            <br/>
                            <br/>
                            <Layout>
                                <div>
                                    <Text textAlign="left" textColor="white" margin="-2px 20px">
                                        Framework
                                    </Text>
                                    <Text textAlign="left" style={{fontSize: "0.9em", marginTop: "30px"}} textColor="ternary" margin="-2px 20px">Ready-to-go library of Elixir modules to get you up and running quickly.</Text>
                                </div>
                            </Layout>
                            <br/>
                            <br/>
                            <Layout>
                                <div>
                                    <Text textAlign="left" textColor="white" margin="-2px 20px">
                                        Tooling
                                    </Text>
                                    <Text textAlign="left" style={{fontSize: "0.9em", marginTop: "30px"}} textColor="ternary" margin="-2px 20px">Powerful command-line tools to manage builds, update firmware, configure devices, and more.</Text>
                                </div>
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
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Heading size={2} textAlign="left" lineHeight={1.5}># Choosing hardware</Heading>
                    <Heading size={5}  margin="20px 0 0 120px" textColor="white" textAlign="left">Currently (listed) supported hardware</Heading>
                    <Layout style={{color: '#fff', fontSize: '0.8em', margin: '0 0 0 118px', lineHeight: '1.5'}}>
                        <List margin="2rem">
                            <Appear><div style={{display: 'flex'}}><Text textColor="secondary" lineHeight="0.9" margin="0 20px 0 0">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi A+, B, B+</Text></div></Appear>
                            <br />
                            <Appear><div style={{display: 'flex'}}><Text margin="0 20px 0 0" textAlign="left" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi Zero and Zero W</Text></div></Appear>
                            <br/>
                            <Appear><div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi 2</Text></div></Appear>
                            <br/>
                            <Appear><div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi 3 B, B+</Text></div></Appear>
                            <br/>
                            <Appear><div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Raspberry Pi 4 B</Text></div></Appear>
                            <br/>
                            <Appear><div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">BeagleBone Black, Green, Green Wireless</Text></div></Appear>
                            <br/>
                            <Appear><div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">PocketBeagle</Text></div></Appear>
                            <br/>
                            <Appear><div style={{display: 'flex'}}><Text margin="0 20px 0 0" textColor="secondary" lineHeight="0.9">::</Text><Text margin="0 0" textAlign="left" textColor="ternary">Generic x86_64</Text></div></Appear>
                        </List>
                    </Layout>
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Heading size={2} style={{fontWeight: '400'}}># Standard Raspberry Pi </Heading>
                    <Image margin="10rem auto" src={images.raspberrypi.replace('/', '')} width="600px" />
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Heading size={2} style={{fontWeight: '400'}}># Standard BeagleBone</Heading>
                    <Image margin="10rem auto" src={images.beaglebone.replace('/', '')} width="600px" />
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
                    <Heading size={2} fit style={{fontWeight: '400'}}># Ok we've got our gear, now what?</Heading>
                    <Layout style={{alignItems: 'flex-start', justifyContent: 'space-evenly', margin: '50px 0'}}>
                        <List>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">Raspberry Pi</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">Camera</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">SD card</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">Power Supply</ListItem>
                            <ListItem bulletStyle="classicCheck" margin="20px 10px" textColor="white">Ethernet cable</ListItem>
                        </List>
                    </Layout>
                </Slide>
                <Slide
                    transitionIn={['fade']}
                    transitionOut={['fade']}
                >
                    <Heading fit style={{fontWeight: '400'}} lineHeight={1.2}># Install Nerves on your computer (host)</Heading>
                    <Text textAlign="left" textColor="white" margin="0 0 0 70px"><Link href="https://hexdocs.pm/nerves/installation.html">https://hexdocs.pm/nerves/installation.html</Link></Text>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <List margin="2rem 5.5rem">
                        <Layout>
                            <div>
                                <Text margin="20px 10px" textAlign="left" textColor="ternary" style={{fontSize: '2em'}}>Nerves requires Erlang, Elixir, and a few tools for packaging firmware images.</Text>
                            </div>
                        </Layout>
                    </List>
                </Slide>
                <Slide>
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
                    <Terminal isMaximized title="Prepare your app for your target" output={[
                        "export MIX_TARGET=rpi3 mix firmware",
                        <div>
                        <div>Nerves environment</div>
                            <div>MIX_TARGET:   rpi3</div>
                            <div> MIX_ENV:      dev</div>
                            <div></div>
                            <div>==> nerves_system_br</div>
                            <div>Generated nerves_system_br app</div>
                            <div></div>
                            <div>Nerves environment</div>
                            <div>MIX_TARGET:   rpi3</div>
                            <div>MIX_ENV:      dev</div>
                            <div>(... lot's of building happening)</div>
                            <div>|nerves_bootstrap| Building OTP Release...</div>
                            <div>* creating _build/rpi3_dev/rel/hello_nerves/releases/0.1.0/vm.args</div>
                            <div>Updating base firmware image with Erlang release...</div>
                            <div>(... statics ...)</div>
                            <div>Building /Users/YourUser/hello_nerves/_build/rpi3_dev/nerves/images/hello_nerves.fw...</div>
                        </div>,
                    ]}
                    />
                </Slide>
                <Slide>
                    <Heading># Burn the firmware to your SD card</Heading>
                    <div>mix firmware.burn</div>
                </Slide>
                <Slide>
                    <Heading># Put the card in your device (target)</Heading>
                    <div></div>
                </Slide>
                <Slide>
                    <Heading># Check to make sure you're connected</Heading>
                    <div>ping nerves.local</div>
                </Slide>
                <Slide>
                    <Heading># We're in!</Heading>
                    <div>iex</div>
                </Slide>
                <Slide>
                    <Heading># Take a look around</Heading>
                    <div>iex commands, explore directories</div>
                </Slide>
                <Slide>
                    <Heading># Oooh what's this Toolshed thing</Heading>
                    <div>display the weather</div>
                </Slide>
                <Slide>Wait, do I need to burn to my SD card everytime I want to deploy?</Slide>
                <Slide>
                    <Heading># Ok cool, let's do something useful</Heading>
                    <div>...Like build a security camera!</div>
                </Slide>
                <Slide>
                    {/*<Heading fit># Because I could probably use one 👀</Heading>*/}
                    <Text style={{color: 'white'}}>Because I could probably use one 👀</Text>
                    <br />
                    <div style={{display: 'flex'}}>
                        <Image src={images.citizen.replace('/', '')} width="500" />
                        <Image src={images.citizen2.replace('/', '')} width="500" />
                    </div>
                    <Image src={images.citizen3.replace('/', '')} width="400" />
                </Slide>
                <Slide>
                    <Heading># Are there any Elixir libraries for the Picam?</Heading>
                    <div>https://github.com/elixir-vision/picam</div>
                </Slide>
                <Slide>
                    <Heading># Implement the example project</Heading>
                    <div>Show funny image of http cam working</div>
                </Slide>
                <Slide>
                    <Heading># Well that's pretty neat- can I use this for basic motion detection?</Heading>
                    <div>jpg comparision</div>
                </Slide>
                <Slide>
                    <Heading># Basic GenServer for motion detection</Heading>
                    <div>show code</div>
                </Slide>
                <Slide>
                    <Heading># Holy crap, I did not expect that to work</Heading>
                    <div>show video of movement</div>
                </Slide>
                <Slide>
                    <Heading># Well that was easy, now what</Heading>
                    <div>Well, it would be cool if I could start streaming video to the cloud when motion is detected</div>
                    <div>Can I do that with this constant stream of jpegs?</div>
                </Slide>
                <Slide>
                    <Heading># Video engineers I work with</Heading>
                    <div>Them laughing</div>
                    <div>Lol, no.</div>
                    <div>Use FFMPEG</div>
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
