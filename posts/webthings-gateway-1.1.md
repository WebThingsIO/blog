---
layout: post.njk
title: "Announcing WebThings Gateway 1.1"
slug: "The WebThings community are delighted to announce the release of WebThings Gateway 1.1"
date: 2023-01-05
author: "Ben Francis"
authorUrl: "https://tola.me.uk"
permalink: "2023/01/05/webthings-gateway-1.1"
tags: post
featuredImage: "webthings_gateway_banner.png"
---

The WebThings community are delighted to announce the release of [WebThings Gateway 1.1](https://webthings.io/gateway/).

<img src="../../../../images/webthings_gateway_banner.png" alt="WebThings logo with an illustration of connected devices" style="width: 100%; max-width: 800px">

(*Reposted from [Mailchimp](https://mailchi.mp/7fdde38a8916/announcing-webthings-gateway-11)*)

*WebThings Gateway is a software distribution for smart building hubs focused on privacy, security and interoperability.*

Following lots of hard work by our open source community, this long-awaited release includes many improvements under the hood including an entirely refactored back end, removal of redundant code and various bugfixes and security patches.


The refactoring of the back end into the strongly typed [TypeScript](https://www.typescriptlang.org/) programming language is intended to improve the stability of the gateway by reducing the likelihood of runtime errors.


This release also includes various security improvements and bug fixes, including an essential certificate renewal fix for anyone using the webthings.io secure remote access service.


For all the technical details and notes for add-on developers, please see the [release notes](https://github.com/WebThingsIO/gateway/releases/tag/1.1.0).


If you have an existing gateway using our Raspberry Pi image then it should automatically update itself to the new release, otherwise you can [download](https://webthings.io/gateway/) a fresh copy from our website.

## What's Next?

We’re now looking forward to WebThings Gateway 1.2 which will include lots of improvements including a much requested “groups” feature. Work has also already begun on a 2.0 release which will be fully compliant with the latest [W3C WoT standards](http://w3c.org/WoT).

## Getting Involved

If you’d like to get involved then you can [file issues on GitHub](https://github.com/WebThingsIO/), [join the conversation on Discourse](https://discourse.mozilla.org/c/iot/252), [chat with us on Matrix](https://matrix.to/#/#iot:mozilla.org), [follow us on Twitter](https://twitter.com/WebThingsIO) or jump into our [documentation](https://webthings.io/docs/) to learn how to develop your own web things and gateway add-ons.

