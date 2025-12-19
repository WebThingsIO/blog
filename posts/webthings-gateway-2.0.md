---
layout: post.njk
title: "Announcing WebThings Gateway 2.0"
slug: "The WebThings community are very excited to announce the WebThings Gateway 2.0 release."
date: 2025-12-19
author: "Ben Francis"
authorUrl: "https://tola.me.uk"
permalink: "2025/12/19/webthings-gateway-2.0"
tags: post
featuredImage: "webthings_gateway_2.0_banner.png"
---

The WebThings community are very excited to announce the [WebThings Gateway 2.0](https://webthings.io/gateway/) release.

<img src="../../../../images/webthings_gateway_2.0_banner.png" alt="WebThings logo with an illustration of connected devices" style="width: 100%; max-width: 800px">

*Build your own smart home hub. WebThings Gateway is a self-hosted web application for monitoring and controlling your home over the web.*

## What's New?
### Groups

An often requested feature is the ability to create groups of "things". With the new groups feature you can now create a group by clicking the big "+" button at the bottom right of the Things screen and then clicking "Add group".

<img src="../../../../images/add_group_button_screenshot.png" alt="Screenshot of add group button in Things screen" style="width: 100%; max-width: 800px">

You can then drag and drop things into groups and organise them however you like.

<img src="../../../../images/groups_feature_screenshot.png" alt="Screenshot of Things organised into groups" style="width: 100%; max-width: 800px">

### W3C Web of Things Compliance

WebThings Gateway 2.0 is the first version to be compliant with the [W3C Web of Things](https://www.w3.org/WoT/) 1.x family of standards, as a replacement for our legacy [Web Thing API](https://webthings.io/api/).

<img src="../../../../images/w3c_wot_logo.png" alt="W3C WoT logo" style="width: 100%; max-width: 250px; display: block; margin: 40px auto;">

This includes [WoT Thing Description 1.1](https://www.w3.org/TR/wot-thing-description11/) for describing connected devices in a standardised way, [WoT Discovery 1.0](https://www.w3.org/TR/wot-discovery/) for sharing a directory of devices, and [WoT Profiles 1.0](https://www.w3.org/TR/wot-profile/) (including the [HTTP Basic Profile](https://www.w3.org/TR/wot-profile/#http-basic-profile) and [HTTP SSE Profile](https://www.w3.org/TR/wot-profile/#http-sse-profile)) for providing interoperability guarantees.

This is a really big deal for us and is the culmination of a years-long effort working closely with the [W3C WoT Working Group](https://www.w3.org/WoT/wg/) to ensure that the needs of the WebThings project have been reflected in the standards.

We believe that having your smart home safely expose a standards-based web API is the best way to enable an open ecosystem of apps and services which you can benefit from, whilst remaining fully in control of your own devices and data.

### OS Upgrades

The Docker image has been upgraded from a Debian 10 (Buster) to Debian 12 (Bookworm) base, and makes a giant leap from Node.js 10 to Node.js 20, and from Python 3.7 to Python 3.11.

This will provide a much more up to date base for the gateway and mean it can benefit from the latest features of programming languages and their various software libraries and packages.

### Release Model

WebThings Gateway 2.0 brings a new approach to our release model.

WebThings Gateway has always had an automatic update mechanism for the gateway application itself, but there was no way to automatically update the underlying Raspbian operating system used in our OS images for the Raspberry Pi.

Unfortunately the version of Raspbian we were using has now reached the point where it is too old to support the dependencies that the latest version of WebThings Gateway relies on, and is no longer receiving security updates. Because there is no way for us to automatically upgrade existing users to a new version of the operating system, and it can be tricky for users to upgrade between major versions manually, we have decided to switch to a new release model.

<img src="../../../../images/webthings_gateway_raspbian.svg" alt="Raspbian-based OS images - Deprecated" style="width: 100%; max-width: 250px; display: block; margin: 20px auto;">

We could have just released a new OS image using the latest version of what is now called Raspberry Pi OS and ask users to re-install from scratch, but the same situation would eventually occur again. Therefore we are recommending that users of the WebThings Gateway 1.x OS images switch to using our [Docker image](https://hub.docker.com/r/webthingsio/gateway), or experimental [snap package](https://snapcraft.io/webthings-gateway), instead.

Both of these options bundle all of the dependencies the gateway needs inside a container that is safely sandboxed from the underlying OS. By choosing your own host operating system you will be fully in control of the OS that runs your smart home, have the freedom to install other self-hosted web applications alongside WebThings Gateway, and can be sure that it will always be possible for you to upgrade to the latest version of the gateway in the future. Both options also give you a wider range of hardware to choose from, *whilst still supporting Raspberry Pi*.

<img src="../../../../images/webthings_gateway_docker_and_snap.svg" alt="Docker image and snap package" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;">

The Docker image has already become by far the most popular way to use WebThings Gateway, but for those users currently using our Raspbian-based 1.x OS images it will unfortunately require a one-off re-installation of a new operating system. Please see the [documentation](https://webthings.io/docs/gateway/installation/) for installation instructions.

We realise that not everyone wants to administer their own host operating system and we've spent *lots* of time exploring alternatives for creating a pre-built OS image using lightweight, containerised base operating systems like [Ubuntu Core](https://ubuntu.com/core) and [balenaOS](https://www.balena.io/os). Unfortunately we still haven't quite found the right fit for a community-maintained distribution which anyone can download and use. We are continuing to explore other alternatives which might meet our [needs](https://github.com/WebThingsIO/gateway/issues/2801) for a lightweight production-quality OS which supports OTA updates of both applications and the underlying operating system, has a solid security model, is easily maintainable, and can target a wide range of hardware.

In the meantime, we recommend you use the [Docker image](https://hub.docker.com/r/webthingsio/gateway), or experimental [snap package](https://snapcraft.io/webthings-gateway).

💡 Before upgrading an exisiting gateway, we recommend you back up the `.webthings` directory which the gateway uses to store its local data, so that you can restore it back to its original state if necessary. In some cases this may also be useful when migrating between installation methods (e.g. from the legacy Raspbian-based OS images to the Docker image).


## A Note about Add-ons

**⚠️ Warning:** Many add-ons may not yet work properly with WebThings Gateway 2.0.

This is a big update to both APIs and the underlying OS which has inevitably meant some backwards incompatible changes. We've tried to minimise the impact on add-ons as much as possible by having the gateway automatically migrate things. However, it's quite likely that add-ons that worked with versions 1.0 and 1.1 of the gateway may need updating for 2.0, even if they are listed in the add-ons directory as being compatible with any gateway version.

The WebThings Gateway 2.0.0 Beta release has been available for four months now and we've already tested some core add-ons like the Zigbee adapter and Virtual Things adapter, but we need your help to test your favourite add-ons and [file issues](https://github.com/WebThingsIO/addon-list/issues) for any problems you discover.

This does mean that you may want to hold off on upgrading any mission critical gateways until you've verified that the add-ons you depend on will work with 2.0.

 **🗒️ Note:** If you are an add-on developer, please see [this wiki page](https://github.com/WebThingsIO/wiki/wiki/Updating-add-ons-for-WebThings-Gateway-2.0) for advice on how to update your add-on to work with WebThings Gateway 2.0.

## What's Next?

We have lots of exciting plans for upcoming future releases, including:
- More [device capabilities](https://webthings.io/schemas/) (e.g. occupancy sensors and smart displays)
- An adapter add-on for the [Matter](https://csa-iot.org/all-solutions/matter/) protocol
- Implementation of the emerging [Web Thing Protocol](https://w3c.github.io/web-thing-protocol/) standard to replace our legacy [WebSocket API](https://webthings.io/api/#web-thing-websocket-api)
- A UI refresh

<img src="../../../../images/matter_logo.jpg" alt="Matter logo" style="width: 100%; max-width: 500px; display: block; margin: 20px auto;">

Outside of the gateway there are also lots of exciting upcoming developments coming to WebThings including:
- [WebThings Shell](https://github.com/WebThingsIO/shell) - A web app runtime for smart displays to enable you to build your own touch screen control panel
- [WebThings Framework](https://webthings.io/framework/) - Updated libraries for building web things which conform to the latest W3C WoT standards
- [WebThings App](https://github.com/WebThingsIO/desktop-app) - A new desktop application for browsing the Web of Things

<img src="../../../../images/webthings_shell_mockup.png" alt="A mockup of a touchscreen user interface with a status bar and navigation bar" style="width: 100%; max-width: 800px; display: block; margin: 20px auto;">

*UI mockup of WebThings Shell*

## Getting Involved

The WebThings open source project is maintained by an international [community](https://webthings.io/community/) of volunteers. I'd like to say a big thank you to the many [contributors](https://github.com/WebThingsIO/gateway/graphs/contributors) who made this release possible.

If you’d like to get involved then you can [file issues on GitHub](https://github.com/WebThingsIO/), [join the conversation on Discourse](https://discourse.mozilla.org/c/iot/252), [chat with us on Matrix](https://matrix.to/#/#iot:mozilla.org), follow us on [Twitter](https://twitter.com/WebThingsIO) or [Mastodon](https://mastodon.social/@WebThingsIO), or jump into our [documentation](https://webthings.io/docs/) to learn how to develop your own web things and gateway add-ons.

---

## Commercial Smart Building Pilot

*A quick note from our sponsors, [Krellian](https://krellian.com/)...*

Are you wasting money on underutilised and inefficient buildings? Krellian helps **facilities managers** meet their **net zero** targets whilst **saving money**, by using smart building technology to optimise space utilisation and reduce energy consumption.

<img src="../../../../images/krellian_cloud_mockup-widescreen.png" alt="Screenshot of the Krellian Cloud user interface showing a heat map superimposed over the floorplan of large building" style="width: 100%; max-width: 800px; display: block; margin: 20px auto;">

Early next year we will be starting a pilot of our commercial smart building [solution](https://krellian.com/solutions/netzero/):

- [Krellian Hub](https://krellian.com/hub/) is a first of its kind commercial smart building hub which consolidates multi-vendor building management systems into a single standardised interface using the Web of Things.
- [Krellian Cloud](https://krellian.com/cloud/) provides real-time data analytics for buildings to model how they're being used and identify potential optimisations.


If you would like to make your building smarter, safer, and more sustainable, then please register your interest today at [krellian.com](https://krellian.com/).