---
layout: post.njk
title: "What's Next for WebThings after 1.0?"
slug: "It’s been a while since WebThings flew the nest from Mozilla, so I wanted to provide a brief update on what’s coming next..."
date: 2022-03-03
author: "Ben Francis"
authorUrl: "https://tola.me.uk"
permalink: "2022/03/03/whats-next-after-1.0"
tags: post
featuredImage: "webthings_banner.png"
---

<img src="../../../../images/webthings_banner.png" alt="WebThings logo with an illustration of connected devices" style="width: 100%; max-width: 800px">

(*Reposted from [Medium](https://medium.com/webthingsio/whats-next-for-webthings-after-1-0-9579f6439828)*)

Hi, I’m Ben Francis, founder of [WebThings](https://webthings.io).

It’s been a while since WebThings [flew the nest](https://hacks.mozilla.org/2020/12/flying-the-nest-webthings-gateway-1-0/) from Mozilla, so I wanted to provide a brief update on what’s coming next, but more importantly to encourage you to have your say via our [community survey](https://forms.gle/3kRsxwWBkAxJSUaRA).

## WebThings Gateway 1.1

Contributors are busy working on a [1.1 release](https://github.com/WebThingsIO/gateway/milestone/27) of [WebThings Gateway](https://webthings.io/gateway/). So far we expect this to include:

 - A new “[groups](https://github.com/WebThingsIO/gateway/pull/2826)” feature which enables you to add devices to groups
 - A more reliable back end, following the [re-write](https://discourse.mozilla.org/t/transitioning-gateway-source-to-typescript/73722) in [TypeScript](https://www.typescriptlang.org/)
 - Clean-up of obsolete code including the [transition UI](https://github.com/WebThingsIO/gateway/issues/2612) and router features which are no longer supported
 - Bug fixes
 - Security patches

 ## Towards 2.0 

 Work has already begun on a [2.0 release](https://github.com/WebThingsIO/gateway/milestone/28) of WebThings Gateway.

 One of the main changes in 2.0 will be compliance with new [W3C Web of Things standards](https://www.w3.org/WoT/). This means transitioning the whole WebThings platform from the current [Web Thing API](https://webthings.io/api/) to compliance with upcoming W3C recommendations including [WoT Thing Description 1.1](https://w3c.github.io/wot-thing-description/), [WoT Profile](https://w3c.github.io/wot-profile/) and [WoT Discovery](https://w3c.github.io/wot-discovery/).

 <img src="../../../../images/w3c_wot_logo.png" alt="Web of Things logo" style="width: 100%; max-width: 500px; display: block; margin: 20px auto;">

 This is the result of a multi-year standardisation effort in collaboration with the W3C Web of Things Working Group to ensure that the latest W3C WoT specifications meet the needs of the WebThings project, and make the [changes needed](https://github.com/WebThingsIO/gateway/issues?q=is%3Aopen+is%3Aissue+label%3Aw3c-compliance) to make WebThings compliant with those standards.

Whilst this will be a breaking API change from 1.0, users shouldn’t notice any disruption and we’re working hard to minimise any impact on add-on developers. Stay tuned for more in the coming months.

# Have Your Say

I have my [own ideas](https://medium.com/krellian/introducing-the-webthings-iot-platform-9fe4f97c0c72) about where to take the platform next, but I’d like to hear more from you, the WebThings community. I’d be really grateful if you could fill out this quick [ten question survey](https://forms.gle/3kRsxwWBkAxJSUaRA) to help us understand what benefits you’re currently getting from WebThings and how we can make it better.

