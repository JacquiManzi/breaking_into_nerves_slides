import React, { Component } from 'react';
import styled from 'react-emotion';

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
};

preloader(images);

const theme = createTheme({
    primary: '#000',
    secondary: '#42ff71',
    ternary: '#a2b0ff'
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
                <Slide transition={['fade']} bgColor="black" bgImage={images.muxConfetti.replace('/', '')} bgRepeat="repeat" bgDarken={0.75}>
                    <Heading size={1} lineHeight="1.3" textColor="white" bgColor="#00000078">Jacqueline Manzi</Heading>
                    <Heading size={4} lineHeight="1.5" textColor="#42ff71" bgColor="#00000078">Elixir / JavaScript / Web</Heading>
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
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Limited resources</Text></Layout>
                            <br/>
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Low power consumption</Text></Layout>
                            <br/>
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Small size</Text></Layout>
                            <br/>
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Rugged operating ranges</Text></Layout>
                            <br/>
                            <Layout>{"::"}<Text textAlign="left" textColor="white" margin="-2px 20px">Low per-unit cost</Text></Layout>
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
                    <Heading size={1}># Pick a project</Heading>
                    <Heading size={5} margin="20px 0" textColor="white">Start simple and be realistic</Heading>
                    <Image margin="10rem auto" src={images.camera.replace('/', '')} width="500x" />
                </Slide>
                <Slide>
                    <h3># Choosing hardware</h3>
                    <div style={{color: '#fff', margin: '20px 0 0 70px'}}>Currently (listed) Supported Hardware</div>
                    <div style={{color: '#fff', fontSize: '0.8em', margin: '20px 0 0 100px', lineHeight: '1.5'}}>
                        <div>/ Raspberry Pi A+, B, B+</div>
                        <div>/ Raspberry Pi Zero and Zero W</div>
                        <div>/ Raspberry Pi 2</div>
                        <div>/ Raspberry Pi 3 B, B+</div>
                        <div>/ BeagleBone Black, Green, Green Wireless</div>
                        <div>/ PocketBeagle</div>
                        <div>/ Generic x86_64</div>
                    </div>
                </Slide>
                <Slide>
                    <Heading># Standard Raspberry Pi (A+, B, B+ 2, 3, 4)</Heading>
                </Slide>
                <Slide>
                    <Heading># Raspberry Zero</Heading>
                </Slide>
                <Slide>
                    <Heading># BeagleBone (Black, Green, Green Wireless)</Heading>
                </Slide>
                <Slide>
                    <Heading># PocketBeagle</Heading>
                </Slide>
                <Slide>
                    <h3># Easiest Option = Raspberry Pi B+</h3>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', lineHeight: '1.8'}}>
                        <Image style={{}} height="370px" width="320px" src="images/Raspberry_Pi_Logo.svg" />
                        <div>
                            <div style={{color: '#fff', fontSize: '0.8em'}}>/ 4 USB 2.0 ports</div>
                            <div style={{color: '#fff', fontSize: '0.8em'}}>/ WIFI and Bluetooth</div>
                            <div style={{color: '#fff', fontSize: '0.8em'}}>/ Ethernet port</div>
                            <div style={{color: '#fff', fontSize: '0.8em'}}>/ HDMI</div>
                            <div style={{color: '#fff', fontSize: '0.8em'}}>/ CSI camera port (for Pi camera)</div>
                            <div style={{color: '#fff', fontSize: '0.8em'}}>/ $35</div>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <h3># Ok we've got our gear, now what?</h3>
                    <div style={{display: 'flex'}}>
                        <Image src="images/rp.svg" width="366px" height="205px" />
                        <Image src="images/cam.svg" width="312px" height="112px" />
                        <Image src="images/sd.svg" width="80px" height="80px" />
                    </div>
                </Slide>
                <Slide>
                    <Heading># Install Nerves on your computer (host)</Heading>
                    <div>go here: https://hexdocs.pm/nerves/installation.html</div>
                    Nerves requires a number of programs on your system to work. These include Erlang, Elixir, and a few tools for packaging firmware images.
                    I installed on both Ubuntu and MacOs using the instructions provided and had no issues
                    (slightly more installation for Linux)
                </Slide>
                <Slide>
                    <Heading># Create a new Nerves app</Heading>
                    <div>mix nerves.new hello_nerves</div>
                </Slide>
                <Slide>
                    <Heading># Configure for your device (target)</Heading>
                </Slide>
                <Slide>
                    <Heading># SSH Configuration</Heading>
                </Slide>
                <Slide>
                    <Heading># Wifi / Ethernet setup</Heading>
                </Slide>
                <Slide>
                    <Heading># Prepare your app for your device (target)</Heading>
                    <div>cd hello_nerves
                        export MIX_TARGET=rpi3
                        mix deps.get</div>
                </Slide>
                <Slide>
                    <Heading># Build the firmware</Heading>
                    <div>mix firmware</div>
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
                    <Heading># SSH into your device (target)</Heading>
                    <div>ssh pi@nerves.local</div>
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
