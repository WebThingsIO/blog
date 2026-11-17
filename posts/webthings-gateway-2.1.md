---
layout: post.njk
title: "Announcing WebThings Gateway 2.1"
slug: "WebThings Gateway 2.1 brings support for occupancy sensors and important upgrades."
date: 2026-11-17
author: "Ben Francis"
authorUrl: "https://tola.me.uk"
permalink: "2026/11/17/webthings-gateway-2.1/"
tags: post
featuredImage: "webthings_gateway_2.1_banner.png"
---

The WebThings community are pleased to announce the [WebThings Gateway 2.1](https://webthings.io/gateway/) release.

<img src="../../../../images/webthings_gateway_2.1_banner.png" alt="WebThings Gateway 2.1 logo with a line drawing of a smart home hub" style="width: 100%; max-width: 800px">

This release brings support for occupancy sensors, an upgrade to Node.js 24, UI fixes and important security patches.

You can find the full release notes [here](https://github.com/WebThingsIO/gateway/releases/tag/2.1.0) or head over to our [documentation](https://webthings.io/docs/) to learn more about WebThings Gateway.

## Occupancy Sensors

Whilst WebThings Gateway already supports motion sensors, many sensors have a separate "occupancy" property which can tell you whether a space is currently occupied rather than whether someone is moving.

Occupancy sensors can use a range of different technologies including PIR (passive infrared), ultrasonic or mmWave (millimeter wave) and are useful for all kinds of use cases like lighting, HVAC and security.

<img src="../../../../images/occupancy_sensor_screenshot.png" alt="Screenshot of an occupancy sensor icon on the Things screen" style="width: 100%; max-width: 800px">

WebThings Gateway 2.1 adds support for a new [occupancy sensor](https://webthings.io/schemas/#OccupancySensor) capability schema for such devices, which so far is used by the Virtual Things and Zigbee add-ons.

## Node.js 24

<img src="../../../../images/node.js_logo.svg" alt="Node.js logo" style="width: 100%; max-width: 300px; display: block; margin: 40px auto;">

The WebThings Gateway 2.1 [Docker image](https://hub.docker.com/r/webthingsio/gateway) and [snap package](https://snapcraft.io/webthings-gateway) have been upgraded from Node.js 20 to Node.js 24, which includes some important security patches.

Since Node.js 24 dropped support for the armv7 architecture this also means that these images no longer support very old 32-bit only versions of Raspberry Pi, or 64-bit Raspberry Pis running a 32-bit operating system. If you want to use WebThings Gateway on a 32-bit operating system you should still be able to [build it yourself](https://github.com/WebThingsIO/gateway/blob/master/README.md#prerequisites-for-building) using Node.js 22.

⚠️ **WARNING:** As with previous major Node.js upgrades, some add-ons with native dependencies may need updating by their maintainers to work with Node.js 24, so please check that the add-ons that you care about work with WebThings Gateway 2.1 before upgrading any production instances. We encourage add-on developers to test their add-ons with WebThings Gateway 2.1 and update their entries in the [add-ons list](https://github.com/WebThingsIO/addon-list) repository if necessary.

## Getting Involved

The WebThings open source project is maintained by an international [community](https://webthings.io/community/) of volunteers. I'd like to say a big thank you to the many [contributors](https://github.com/WebThingsIO/gateway/graphs/contributors) who made this release possible.

If you’d like to get involved then you can [file issues on GitHub](https://github.com/WebThingsIO/), [join the conversation on Discourse](https://discourse.mozilla.org/c/iot/252), [chat with us on Matrix](https://matrix.to/#/#iot:mozilla.org), follow us on [Twitter](https://twitter.com/WebThingsIO) or [Mastodon](https://mastodon.social/@WebThingsIO), or jump into our [documentation](https://webthings.io/docs/) to learn how to develop your own web things and gateway add-ons.
