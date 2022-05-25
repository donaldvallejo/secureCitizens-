import React from 'react'
import { Layout } from '../../layout'
import tw, { styled, css } from 'twin.macro'
import { motion } from 'framer-motion'

// ============================ //
// STYLED / TAILWIND COMPONENTS //
// ============================ //
const Container = styled(motion.div)(() =>

    [
        tw`
      flex
      flex-col
      items-center
      text-white
      bg-gray-800
      px-16
      py-32
      z-0
      `,
        tw`
      pt-40
    `
    ])

export default function Privacy() {
    return (
        <Layout>
            <Container>
                <div>


                    <style dangerouslySetInnerHTML={{
                        __html: `
\n[data-custom-class='body'], [data-custom-class='body'] * {
\nbackground: transparent !important;
\n}                 
\n[data-custom-class='title'], [data-custom-class='title'] * {
\nfont-family: Arial !important;
\nfont-size: 26px !important;
\ncolor: white !important;
\n}
\n[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
\nfont-family: Arial !important;
\ncolor: white !important;
\nfont-size: 14px !important;
\n}
\n[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
\nfont-family: Arial !important;
\nfont-size: 19px !important;
\ncolor: white !important;
\n}
\n[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
\nfont-family: Arial !important;
\nfont-size: 17px !important;
\ncolor: white !important;
\n}
\n[data-custom-class='body_text'], [data-custom-class='body_text'] * {
\ncolor: white !important;
\nfont-size: 14px !important;
\nfont-family: Arial !important;
\n}
\n[data-custom-class='link'], [data-custom-class='link'] * {
\ncolor: lightblue !important;
\nfont-size: 14px !important;
\nfont-family: Arial !important;
\nword-break: break-word !important;
\n}
\n`
                    }} />


                    <div data-custom-class="body">


                        <div>

                            <strong>

                                <span style={{ fontSize: '26px' }}>

                                    <span data-custom-class="title">
                                        PRIVACY NOTICE
                                    </span>

                                </span>

                            </strong>&nbsp;

                        </div>

                        <div>

                            <br />

                        </div>

                        <div>

                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                <strong>

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="subtitle">
                                            Last updated &nbsp;
                                            <bdt className="question">
                                                April 23, 2022
                                            </bdt>

                                        </span>

                                    </span>

                                </strong>&nbsp;

                            </span>

                        </div>

                        <div>

                            <br />

                        </div>

                        <div>

                            <br />

                        </div>

                        <div>

                            <br />

                        </div>

                        <div style={{ lineHeight: '1.5' }}>

                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                    <span data-custom-class="body_text">
                                        This privacy notice for
                                        <bdt className="question">
                                            The Rockademy LLC
                                        </bdt>

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <bdt className="block-component" />

                                            </span>

                                        </span>
                                        &nbsp;("
                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <bdt className="block-component" />

                                            </span>

                                        </span>

                                        <strong>
                                            Company
                                        </strong>

                                    </span>

                                    <span style={{ color: 'rgb(127, 127, 127)' }}>

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="statement-end-if-in-editor">

                                                            <span data-custom-class="body_text" />

                                                        </bdt>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                    <span data-custom-class="body_text">
                                        ," "
                                        <strong>
                                            we
                                        </strong>
                                        ," "
                                        <strong>
                                            us
                                        </strong>
                                        ," or "
                                        <strong>
                                            our
                                        </strong>
                                        "), describes how and why we might collect, store, use, and/or share ("
                                        <strong>
                                            process
                                        </strong>
                                        ") your information when you use our services ("
                                        <strong>
                                            Services
                                        </strong>
                                        "), such as when you:
                                    </span>

                                </span>

                            </span>

                            <span style={{ fontSize: '15px' }}>

                                <span style={{ color: 'rgb(127, 127, 127)' }}>

                                    <span data-custom-class="body_text">

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <bdt className="block-component" />

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </span>

                        </div>

                        <ul>

                            <li style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">
                                            Visit our website&nbsp;
                                            <bdt className="block-component" />
                                            at
                                            <bdt className="question">

                                                &nbsp;<a href="https://www.therockademy.com/" target="_blank" data-custom-class="link">
                                                    https://www.therockademy.com/
                                                </a>

                                            </bdt>

                                            <span style={{ fontSize: '15px' }}>

                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                    <span data-custom-class="body_text">

                                                        <span style={{ fontSize: '15px' }}>

                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                <bdt className="statement-end-if-in-editor">
                                                                    , or any website of ours that links to this privacy notice
                                                                </bdt>

                                                            </span>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </li>

                        </ul>

                        <div>

                            <bdt className="block-component">

                                <span style={{ fontSize: '15px' }}>

                                    <span style={{ fontSize: '15px' }}>

                                        <span style={{ color: 'rgb(127, 127, 127)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="block-component" />

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </bdt>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span style={{ color: 'rgb(127, 127, 127)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="block-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">
                                                Engage with us in other related ways, including any sales, marketing, or events
                                                <span style={{ fontSize: '15px' }}>

                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                        <span data-custom-class="body_text">

                                                            <span style={{ fontSize: '15px' }}>

                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                    <bdt className="statement-end-if-in-editor" />

                                                                </span>

                                                            </span>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span style={{ color: 'rgb(127, 127, 127)' }}>

                                        <span data-custom-class="body_text">

                                            <strong>
                                                Questions or concerns?
                                            </strong>&nbsp;
                                            Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at&nbsp;
                                            <bdt className="question">
                                                rockademy@hotmail.com
                                            </bdt>
                                            .
                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <strong>

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="heading_1">
                                            SUMMARY OF KEY POINTS
                                        </span>

                                    </span>

                                </strong>&nbsp;

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>

                                            <em>
                                                This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click
                                            </em>

                                        </strong>&nbsp;

                                    </span>

                                </span>

                                &nbsp;<a data-custom-class="link" href="#toc">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">

                                            <strong>

                                                <em>
                                                    here
                                                </em>

                                            </strong>&nbsp;

                                        </span>

                                    </span>

                                </a>&nbsp;

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>

                                            <em>
                                                to go directly to our table of contents.
                                            </em>

                                        </strong>&nbsp;

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>
                                            What personal information do we process?
                                        </strong>&nbsp;
                                        When you visit, use, or navigate our Services, we may process personal information depending on how you interact with
                                        <bdt className="block-component" />

                                        <bdt className="question">
                                            The Rockademy LLC
                                        </bdt>

                                        <bdt className="statement-end-if-in-editor" />
                                        and the Services, the choices you make, and the products and features you use. Click
                                    </span>

                                </span>

                                &nbsp;<a data-custom-class="link" href="#personalinfo">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">
                                            here
                                        </span>

                                    </span>

                                </a>&nbsp;

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">
                                        to learn more.
                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>
                                            Do we process any sensitive personal information?
                                        </strong>&nbsp;

                                        <bdt className="block-component" />
                                        We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Click
                                    </span>

                                </span>

                                &nbsp;<a data-custom-class="link" href="#sensitiveinfo">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">
                                            here
                                        </span>

                                    </span>

                                </a>&nbsp;

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">
                                        to learn more.
                                        <bdt className="statement-end-if-in-editor" />

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>
                                            Do you receive any information from third parties?
                                        </strong>&nbsp;

                                        <bdt className="block-component" />
                                        We do not receive any information from third parties.
                                        <bdt className="else-block" />

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>
                                            How do you process my information?
                                        </strong>&nbsp;
                                        We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click
                                    </span>

                                </span>

                                &nbsp;<a data-custom-class="link" href="#infouse">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">
                                            here
                                        </span>

                                    </span>

                                </a>&nbsp;

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">
                                        to learn more.
                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>
                                            In what situations and with which
                                            <bdt className="block-component" />
                                            parties do we share personal information?
                                        </strong>&nbsp;
                                        We may share information in specific situations and with specific
                                        <bdt className="block-component" />
                                        third parties. Click
                                    </span>

                                </span>

                                &nbsp;<a data-custom-class="link" href="#whoshare">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">
                                            here
                                        </span>

                                    </span>

                                </a>&nbsp;

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">
                                        to learn more.
                                        <bdt className="block-component" />

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>
                                            How do we keep your information safe?
                                        </strong>&nbsp;
                                        We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click
                                    </span>

                                </span>

                                &nbsp;<a data-custom-class="link" href="#infosafe">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">
                                            here
                                        </span>

                                    </span>

                                </a>&nbsp;

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">
                                        to learn more.
                                        <bdt className="statement-end-if-in-editor" />

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>
                                            What are your rights?
                                        </strong>&nbsp;
                                        Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click
                                    </span>

                                </span>

                                &nbsp;<a data-custom-class="link" href="#privacyrights">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">
                                            here
                                        </span>

                                    </span>

                                </a>&nbsp;

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">
                                        to learn more.
                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>
                                            How do I exercise my rights?
                                        </strong>&nbsp;
                                        The easiest way to exercise your rights is by filling out our data subject request form available
                                        <bdt className="block-component" />

                                    </span>

                                </span>

                                &nbsp;<a data-custom-class="link" href="https://app.termly.io/notify/f70d0793-1198-49ef-8533-3e331a142d5e" rel="noopener noreferrer" target="_blank">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">
                                            here
                                        </span>

                                    </span>

                                </a>&nbsp;

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <bdt className="block-component" />
                                        , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">
                                        Want to learn more about what
                                        <bdt className="block-component" />

                                        <bdt className="question">
                                            The Rockademy LLC
                                        </bdt>

                                        <bdt className="statement-end-if-in-editor" />
                                        does with any information we collect? Click
                                    </span>

                                </span>

                                &nbsp;<a data-custom-class="link" href="#toc">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">
                                            here
                                        </span>

                                    </span>

                                </a>&nbsp;

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">
                                        to review the notice in full.
                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div id="toc" style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span style={{ color: 'rgb(127, 127, 127)' }}>

                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                            <strong>

                                                <span data-custom-class="heading_1">
                                                    TABLE OF CONTENTS
                                                </span>

                                            </strong>&nbsp;

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    &nbsp;<a data-custom-class="link" href="#infocollect">

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                                            1. WHAT INFORMATION DO WE COLLECT?
                                        </span>

                                    </a>&nbsp;

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    &nbsp;<a data-custom-class="link" href="#infouse">

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                                            2. HOW DO WE PROCESS YOUR INFORMATION?
                                            <bdt className="block-component" />

                                        </span>

                                    </a>&nbsp;

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                        &nbsp;<a data-custom-class="link" href="#whoshare">
                                            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                                        </a>&nbsp;

                                    </span>

                                    <span data-custom-class="body_text">

                                        <bdt className="block-component" />

                                    </span>

                                    <span style={{ color: 'rgb(127, 127, 127)' }}>

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                    <bdt className="block-component" />

                                                </span>

                                            </span>

                                            <span data-custom-class="body_text">

                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                            <bdt className="block-component" />

                                                        </span>

                                                    </span>

                                                    <bdt className="block-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    &nbsp;<a data-custom-class="link" href="#inforetain">

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                                            4. HOW LONG DO WE KEEP YOUR INFORMATION?
                                        </span>

                                    </a>&nbsp;

                                    <span style={{ color: 'rgb(127, 127, 127)' }}>

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                        <bdt className="block-component" />

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    &nbsp;<a data-custom-class="link" href="#infosafe">

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                                            5. HOW DO WE KEEP YOUR INFORMATION SAFE?
                                        </span>

                                    </a>&nbsp;

                                    <span style={{ color: 'rgb(127, 127, 127)' }}>

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                    <bdt className="statement-end-if-in-editor" />

                                                    <bdt className="block-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                        &nbsp;<a data-custom-class="link" href="#privacyrights">
                                            6. WHAT ARE YOUR PRIVACY RIGHTS?
                                        </a>&nbsp;

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    &nbsp;<a data-custom-class="link" href="#DNT">

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                                            7. CONTROLS FOR DO-NOT-TRACK FEATURES
                                        </span>

                                    </a>&nbsp;

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    &nbsp;<a data-custom-class="link" href="#caresidents">

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                                            8. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                                        </span>

                                    </a>&nbsp;

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    &nbsp;<a data-custom-class="link" href="#policyupdates">

                                        <span style={{ color: 'rgb(89, 89, 89)' }}>
                                            9. DO WE MAKE UPDATES TO THIS NOTICE?
                                        </span>

                                    </a>&nbsp;

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                &nbsp;<a data-custom-class="link" href="#contact">

                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>
                                        10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                    </span>

                                </a>&nbsp;

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                &nbsp;<a data-custom-class="link" href="#request">

                                    <span style={{ color: 'rgb(89, 89, 89)' }}>
                                        11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                                    </span>

                                </a>&nbsp;

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div id="infocollect" style={{ lineHeight: '1.5' }}>

                                <span style={{ color: 'rgb(127, 127, 127)' }}>

                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                    <strong>

                                                        <span data-custom-class="heading_1">
                                                            1. WHAT INFORMATION DO WE COLLECT?
                                                        </span>

                                                    </strong>&nbsp;

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div id="personalinfo" style={{ lineHeight: '1.5' }}>

                                <span data-custom-class="heading_2" style={{ color: 'rgb(0, 0, 0)' }}>

                                    <span style={{ fontSize: '15px' }}>

                                        <strong>
                                            Personal information you disclose to us
                                        </strong>&nbsp;

                                    </span>

                                </span>

                            </div>

                            <div>

                                <div>

                                    <br />

                                </div>

                                <div style={{ lineHeight: '1.5' }}>

                                    <span style={{ color: 'rgb(127, 127, 127)' }}>

                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                        <span data-custom-class="body_text">

                                                            <strong>

                                                                <em>
                                                                    In Short:
                                                                </em>

                                                            </strong>&nbsp;

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                        <span data-custom-class="body_text">

                                                            <strong>

                                                                <em>

                                                                </em>

                                                            </strong>&nbsp;

                                                            <em>
                                                                We collect personal information that you provide to us.
                                                            </em>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </div>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">
                                            We collect personal information that you voluntarily provide to us when you
                                            <span style={{ fontSize: '15px' }}>

                                                <bdt className="block-component" />

                                            </span>
                                            register on the Services,
                                        </span>

                                        <span style={{ fontSize: '15px' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px' }}>

                                                    <bdt className="statement-end-if-in-editor" />

                                                </span>

                                            </span>

                                            <span data-custom-class="body_text">
                                                express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <bdt className="block-component" />

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <strong>
                                                Personal Information Provided by You.
                                            </strong>&nbsp;
                                            The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="forloop-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="question">
                                                            names
                                                        </bdt>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="forloop-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="question">
                                                            phone numbers
                                                        </bdt>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="forloop-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="question">
                                                            email addresses
                                                        </bdt>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="forloop-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="question">
                                                            mailing addresses
                                                        </bdt>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="forloop-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="question">
                                                            billing addresses
                                                        </bdt>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="forloop-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="question">
                                                            debit/credit card numbers
                                                        </bdt>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="forloop-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="question">
                                                            usernames
                                                        </bdt>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="forloop-component" />

                                                </span>

                                                <span data-custom-class="body_text">

                                                    <bdt className="statement-end-if-in-editor" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div id="sensitiveinfo" style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <strong>
                                            Sensitive Information.
                                        </strong>&nbsp;

                                        <bdt className="block-component" />
                                        When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
                                        <bdt className="forloop-component" />

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text">

                                            <bdt className="question">
                                                student data
                                            </bdt>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div>

                                <span style={{ fontSize: '15px' }}>

                                    <span data-custom-class="body_text">

                                        <bdt className="forloop-component" />

                                    </span>

                                    <span data-custom-class="body_text">

                                        <bdt className="statement-end-if-in-editor" />

                                    </span>

                                </span>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="block-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <strong>
                                                Payment Data.
                                            </strong>&nbsp;
                                            We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by
                                            <bdt className="forloop-component" />

                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span data-custom-class="body_text">

                                                        <span style={{ fontSize: '15px' }}>

                                                            <span data-custom-class="body_text">

                                                                <bdt className="block-component" />

                                                            </span>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                            <bdt className="question">
                                                __________
                                            </bdt>

                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span data-custom-class="body_text">

                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                <span data-custom-class="body_text">

                                                                    <span style={{ fontSize: '15px' }}>

                                                                        <span data-custom-class="body_text">

                                                                            <bdt className="block-component" />

                                                                        </span>

                                                                    </span>

                                                                </span>

                                                                <span data-custom-class="body_text">

                                                                    <span style={{ fontSize: '15px' }}>

                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                            <span data-custom-class="body_text">

                                                                                <span style={{ fontSize: '15px' }}>

                                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                        <span data-custom-class="body_text">

                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                    <span data-custom-class="body_text">

                                                                                                        <bdt className="forloop-component" />

                                                                                                    </span>

                                                                                                </span>

                                                                                            </span>

                                                                                        </span>

                                                                                    </span>

                                                                                </span>

                                                                            </span>

                                                                        </span>

                                                                    </span>

                                                                </span>

                                                            </span>

                                                        </span>
                                                        . You may find their privacy notice link(s) here:
                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                <span data-custom-class="body_text">

                                                                    <bdt className="forloop-component" />

                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                            <span data-custom-class="body_text">

                                                                                <span style={{ fontSize: '15px' }}>

                                                                                    <span data-custom-class="body_text">

                                                                                        <bdt className="block-component" />

                                                                                    </span>

                                                                                </span>

                                                                            </span>

                                                                        </span>

                                                                    </span>

                                                                </span>

                                                            </span>

                                                        </span>

                                                        <bdt className="question">
                                                            __________
                                                        </bdt>

                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                <span data-custom-class="body_text">

                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                            <span data-custom-class="body_text">

                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                        <span data-custom-class="body_text">

                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                <span data-custom-class="body_text">

                                                                                                    <bdt className="block-component" />

                                                                                                </span>

                                                                                            </span>

                                                                                        </span>

                                                                                    </span>

                                                                                </span>

                                                                            </span>

                                                                        </span>

                                                                    </span>

                                                                    <bdt className="forloop-component" />

                                                                    <span style={{ fontSize: '15px' }}>

                                                                        <span data-custom-class="body_text">
                                                                            .
                                                                        </span>

                                                                    </span>

                                                                </span>

                                                            </span>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <span style={{ fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="statement-end-if-in-editor">

                                                        <bdt className="block-component" />

                                                    </bdt>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                    <bdt className="block-component" />

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">
                                            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <bdt className="block-component" />

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span data-custom-class="heading_2" style={{ color: 'rgb(0, 0, 0)' }}>

                                    <span style={{ fontSize: '15px' }}>

                                        <strong>
                                            Information automatically collected
                                        </strong>&nbsp;

                                    </span>

                                </span>

                            </div>

                            <div>

                                <div>

                                    <br />

                                </div>

                                <div style={{ lineHeight: '1.5' }}>

                                    <span style={{ color: 'rgb(127, 127, 127)' }}>

                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                        <span data-custom-class="body_text">

                                                            <strong>

                                                                <em>
                                                                    In Short:
                                                                </em>

                                                            </strong>&nbsp;

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                            <span data-custom-class="body_text">

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                        <span data-custom-class="body_text">

                                                            <strong>

                                                                <em>

                                                                </em>

                                                            </strong>&nbsp;

                                                            <em>
                                                                Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                                                            </em>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </div>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">
                                            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <br />

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <bdt className="block-component" />

                                        </span>

                                    </span>

                                </span>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">

                                            <bdt className="block-component" />

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <div style={{ lineHeight: '1.5' }}>

                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span data-custom-class="body_text">
                                            The information we collect includes:
                                            <bdt className="block-component" />

                                        </span>

                                    </span>

                                </span>

                            </div>

                            <ul>

                                <li style={{ lineHeight: '1.5' }}>

                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span data-custom-class="body_text">

                                                <em>
                                                    Log and Usage Data.
                                                </em>
                                                Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services
                                                <span style={{ fontSize: '15px' }}>

                                                </span>
                                                (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                                                <span style={{ fontSize: '15px' }}>

                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                        <span data-custom-class="body_text">

                                                            <span style={{ fontSize: '15px' }}>

                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                    <bdt className="statement-end-if-in-editor" />

                                                                </span>

                                                            </span>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </span>

                                </li>

                            </ul>

                            <div style={{ lineHeight: '1.5' }}>

                                <bdt className="block-component">

                                    <span style={{ fontSize: '15px' }}>

                                        <span data-custom-class="body_text" />

                                    </span>

                                </bdt>

                                <div style={{ lineHeight: '1.5' }}>

                                    <bdt className="block-component">

                                        <span style={{ fontSize: '15px' }}>

                                            <span data-custom-class="body_text" />

                                        </span>

                                    </bdt>

                                    <div>

                                        <bdt className="block-component">

                                            <span style={{ fontSize: '15px' }} />

                                        </bdt>

                                        <bdt className="statement-end-if-in-editor" />

                                        <span data-custom-class="body_text">

                                            <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                <span data-custom-class="body_text">

                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                        <span data-custom-class="body_text">

                                                            <bdt className="statement-end-if-in-editor">

                                                                <bdt className="block-component" />

                                                            </bdt>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                        <span style={{ fontSize: '15px' }}>

                                            <span data-custom-class="body_text">

                                                <bdt className="block-component" />

                                            </span>

                                        </span>

                                    </div>

                                    <div id="infouse" style={{ lineHeight: '1.5' }}>

                                        <span style={{ color: 'rgb(127, 127, 127)' }}>

                                            <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                        <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                            <strong>

                                                                <span data-custom-class="heading_1">
                                                                    2. HOW DO WE PROCESS YOUR INFORMATION?
                                                                </span>

                                                            </strong>&nbsp;

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </span>

                                    </div>

                                    <div>

                                        <div style={{ lineHeight: '1.5' }}>

                                            <br />

                                        </div>

                                        <div style={{ lineHeight: '1.5' }}>

                                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                    <span data-custom-class="body_text">

                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                <span data-custom-class="body_text">

                                                                    <strong>

                                                                        <em>
                                                                            In Short:
                                                                        </em>

                                                                    </strong>&nbsp;

                                                                    <em>
                                                                        We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                                                                    </em>

                                                                </span>

                                                            </span>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </div>

                                    </div>

                                    <div style={{ lineHeight: '1.5' }}>

                                        <br />

                                    </div>

                                    <div style={{ lineHeight: '1.5' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                <span data-custom-class="body_text">

                                                    <strong>
                                                        We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                                                    </strong>&nbsp;

                                                    <bdt className="block-component" />

                                                </span>

                                            </span>

                                        </span>

                                    </div>

                                    <ul>

                                        <li style={{ lineHeight: '1.5' }}>

                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span data-custom-class="body_text">

                                                        <strong>
                                                            To facilitate account creation and authentication and otherwise manage user accounts.
                                                        </strong>&nbsp;
                                                        We may process your information so you can create and log in to your account, as well as keep your account in working order.
                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                <span data-custom-class="body_text">

                                                                    <span style={{ fontSize: '15px' }}>

                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                            <span data-custom-class="body_text">

                                                                                <span style={{ fontSize: '15px' }}>

                                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                        <span data-custom-class="body_text">

                                                                                            <bdt className="statement-end-if-in-editor" />

                                                                                        </span>

                                                                                    </span>

                                                                                </span>

                                                                            </span>

                                                                        </span>

                                                                    </span>

                                                                </span>

                                                            </span>

                                                        </span>

                                                    </span>

                                                </span>

                                            </span>

                                        </li>

                                    </ul>

                                    <div style={{ lineHeight: '1.5' }}>

                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                <span data-custom-class="body_text">

                                                    <bdt className="block-component" />

                                                </span>

                                            </span>

                                        </span>

                                        <div style={{ lineHeight: '1.5' }}>

                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span data-custom-class="body_text">

                                                        <bdt className="block-component" />

                                                    </span>

                                                </span>

                                            </span>

                                            <div style={{ lineHeight: '1.5' }}>

                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                        <span data-custom-class="body_text">

                                                            <bdt className="block-component" />

                                                        </span>

                                                    </span>

                                                </span>

                                                <div style={{ lineHeight: '1.5' }}>

                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                            <span data-custom-class="body_text">

                                                                <bdt className="block-component" />

                                                            </span>

                                                        </span>

                                                    </span>

                                                    <div style={{ lineHeight: '1.5' }}>

                                                        <bdt className="block-component">

                                                            <span style={{ fontSize: '15px' }} />

                                                        </bdt>

                                                        <div style={{ lineHeight: '1.5' }}>

                                                            <bdt className="block-component">

                                                                <span style={{ fontSize: '15px' }} />

                                                            </bdt>

                                                            <div style={{ lineHeight: '1.5' }}>

                                                                <bdt className="block-component">

                                                                    <span style={{ fontSize: '15px' }} />

                                                                </bdt>

                                                                <div style={{ lineHeight: '1.5' }}>

                                                                    <bdt className="block-component">

                                                                        <span style={{ fontSize: '15px' }}>

                                                                            <span data-custom-class="body_text" />

                                                                        </span>

                                                                    </bdt>

                                                                    <p style={{ fontSize: '15px', lineHeight: '1.5' }}>

                                                                        <bdt className="block-component">

                                                                            <span style={{ fontSize: '15px' }} />

                                                                        </bdt>

                                                                    </p>

                                                                    <p style={{ fontSize: '15px', lineHeight: '1.5' }}>

                                                                        <bdt className="block-component">

                                                                            <span style={{ fontSize: '15px' }} />

                                                                        </bdt>

                                                                    </p>

                                                                    <p style={{ fontSize: '15px', lineHeight: '1.5' }}>

                                                                        <bdt className="block-component" />

                                                                    </p>

                                                                    <p style={{ fontSize: '15px', lineHeight: '1.5' }}>

                                                                        <bdt className="block-component" />

                                                                    </p>

                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                        <bdt className="block-component">

                                                                            <span style={{ fontSize: '15px' }} />

                                                                        </bdt>

                                                                    </div>

                                                                    <ul>

                                                                        <li style={{ lineHeight: '1.5' }}>

                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                    <span data-custom-class="body_text">

                                                                                        <strong>
                                                                                            To send you marketing and promotional communications.
                                                                                        </strong>&nbsp;
                                                                                        We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "
                                                                                    </span>

                                                                                </span>

                                                                            </span>

                                                                            &nbsp;<a data-custom-class="link" href="#privacyrights">

                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                        <span data-custom-class="body_text">
                                                                                            WHAT ARE YOUR PRIVACY RIGHTS?
                                                                                        </span>

                                                                                    </span>

                                                                                </span>

                                                                            </a>&nbsp;

                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                    <span data-custom-class="body_text">
                                                                                        " below).
                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                <span data-custom-class="body_text">

                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                            <span data-custom-class="body_text">

                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                        <span data-custom-class="body_text">

                                                                                                                            <bdt className="statement-end-if-in-editor" />

                                                                                                                        </span>

                                                                                                                    </span>

                                                                                                                </span>

                                                                                                            </span>

                                                                                                        </span>

                                                                                                    </span>

                                                                                                </span>

                                                                                            </span>

                                                                                        </span>

                                                                                    </span>

                                                                                </span>

                                                                            </span>

                                                                        </li>

                                                                    </ul>

                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                        <bdt className="block-component">

                                                                            <span style={{ fontSize: '15px' }} />

                                                                        </bdt>

                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                            <bdt className="block-component">

                                                                                <span style={{ fontSize: '15px' }} />

                                                                            </bdt>

                                                                            <div style={{ lineHeight: '1.5' }}>

                                                                                <span style={{ fontSize: '15px' }}>

                                                                                    <bdt className="block-component">

                                                                                        <span data-custom-class="body_text" />

                                                                                    </bdt>

                                                                                </span>

                                                                                <div style={{ lineHeight: '1.5' }}>

                                                                                    <bdt className="block-component">

                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                            <span data-custom-class="body_text" />

                                                                                        </span>

                                                                                    </bdt>

                                                                                </div>

                                                                                <ul>

                                                                                    <li style={{ lineHeight: '1.5' }}>

                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                            <span data-custom-class="body_text">

                                                                                                <strong>
                                                                                                    To post testimonials.
                                                                                                </strong>&nbsp;
                                                                                                We post testimonials on our Services that may contain personal information.
                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                            </span>

                                                                                        </span>

                                                                                    </li>

                                                                                </ul>

                                                                                <div style={{ lineHeight: '1.5' }}>

                                                                                    <bdt className="block-component">

                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                            <span data-custom-class="body_text" />

                                                                                        </span>

                                                                                    </bdt>

                                                                                </div>

                                                                                <ul>

                                                                                    <li style={{ lineHeight: '1.5' }}>

                                                                                        <span data-custom-class="body_text">

                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                <strong>
                                                                                                    To protect our Services.
                                                                                                </strong>&nbsp;
                                                                                                We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
                                                                                            </span>

                                                                                        </span>

                                                                                        <bdt className="statement-end-if-in-editor">

                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                <span data-custom-class="body_text" />

                                                                                            </span>

                                                                                        </bdt>

                                                                                    </li>

                                                                                </ul>

                                                                                <div style={{ lineHeight: '1.5' }}>

                                                                                    <bdt className="block-component">

                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                            <span data-custom-class="body_text" />

                                                                                        </span>

                                                                                    </bdt>

                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                        <bdt className="block-component">

                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                <span data-custom-class="body_text" />

                                                                                            </span>

                                                                                        </bdt>

                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                            <bdt className="block-component">

                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                    <span data-custom-class="body_text" />

                                                                                                </span>

                                                                                            </bdt>

                                                                                        </div>

                                                                                        <ul>

                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                <span data-custom-class="body_text">

                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                        <strong>
                                                                                                            To evaluate and improve our Services, products, marketing, and your experience.
                                                                                                        </strong>&nbsp;
                                                                                                        We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
                                                                                                    </span>

                                                                                                </span>

                                                                                                <bdt className="statement-end-if-in-editor">

                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                        <span data-custom-class="body_text" />

                                                                                                    </span>

                                                                                                </bdt>

                                                                                            </li>

                                                                                        </ul>

                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                            <bdt className="block-component">

                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                    <span data-custom-class="body_text" />

                                                                                                </span>

                                                                                            </bdt>

                                                                                        </div>

                                                                                        <ul>

                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                <span data-custom-class="body_text">

                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                        <strong>
                                                                                                            To identify usage trends.
                                                                                                        </strong>&nbsp;
                                                                                                        We may process information about how you use our Services to better understand how they are being used so we can improve them.
                                                                                                    </span>

                                                                                                </span>

                                                                                                <bdt className="statement-end-if-in-editor">

                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                        <span data-custom-class="body_text" />

                                                                                                    </span>

                                                                                                </bdt>

                                                                                            </li>

                                                                                        </ul>

                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                            <bdt className="block-component">

                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                    <span data-custom-class="body_text" />

                                                                                                </span>

                                                                                            </bdt>

                                                                                            <div style={{ lineHeight: '1.5' }}>

                                                                                                <bdt className="block-component">

                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                        <span data-custom-class="body_text" />

                                                                                                    </span>

                                                                                                </bdt>

                                                                                            </div>

                                                                                            <ul>

                                                                                                <li style={{ lineHeight: '1.5' }}>

                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                        <span data-custom-class="body_text">

                                                                                                            <strong>
                                                                                                                To determine the effectiveness of our marketing and promotional campaigns.
                                                                                                            </strong>&nbsp;
                                                                                                            We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
                                                                                                            <bdt className="statement-end-if-in-editor" />

                                                                                                        </span>

                                                                                                    </span>

                                                                                                </li>

                                                                                            </ul>

                                                                                            <div style={{ lineHeight: '1.5' }}>

                                                                                                <bdt className="block-component">

                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                        <span data-custom-class="body_text" />

                                                                                                    </span>

                                                                                                </bdt>

                                                                                                <div style={{ lineHeight: '1.5' }}>

                                                                                                    <bdt className="block-component">

                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                            <span data-custom-class="body_text" />

                                                                                                        </span>

                                                                                                    </bdt>

                                                                                                </div>

                                                                                                <ul>

                                                                                                    <li style={{ lineHeight: '1.5' }}>

                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                            <span data-custom-class="body_text">

                                                                                                                <strong>
                                                                                                                    To comply with our legal obligations.
                                                                                                                </strong>&nbsp;
                                                                                                                We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                            </span>

                                                                                                        </span>

                                                                                                    </li>

                                                                                                </ul>

                                                                                                <div style={{ lineHeight: '1.5' }}>

                                                                                                    <bdt className="block-component">

                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                            <span data-custom-class="body_text" />

                                                                                                        </span>

                                                                                                    </bdt>

                                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                                        <bdt className="block-component">

                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                <span data-custom-class="body_text" />

                                                                                                            </span>

                                                                                                        </bdt>

                                                                                                        <bdt className="block-component">

                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                <span data-custom-class="body_text" />

                                                                                                            </span>

                                                                                                        </bdt>

                                                                                                        <bdt className="block-component">

                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                <span data-custom-class="body_text" />

                                                                                                            </span>

                                                                                                        </bdt>

                                                                                                        <bdt className="block-component">

                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                <span data-custom-class="body_text" />

                                                                                                            </span>

                                                                                                        </bdt>

                                                                                                    </div>

                                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                                        <br />

                                                                                                    </div>

                                                                                                    <div id="whoshare" style={{ lineHeight: '1.5' }}>

                                                                                                        <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                            <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                        <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                            <strong>

                                                                                                                                <span data-custom-class="heading_1">
                                                                                                                                    3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                                                                                                                                </span>

                                                                                                                            </strong>&nbsp;

                                                                                                                        </span>

                                                                                                                    </span>

                                                                                                                </span>

                                                                                                            </span>

                                                                                                        </span>

                                                                                                    </div>

                                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                                        <br />

                                                                                                    </div>

                                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                <span data-custom-class="body_text">

                                                                                                                    <strong>

                                                                                                                        <em>
                                                                                                                            In Short:
                                                                                                                        </em>

                                                                                                                    </strong>&nbsp;

                                                                                                                    <em>
                                                                                                                        We may share information in specific situations described in this section and/or with the following
                                                                                                                        <bdt className="block-component" />
                                                                                                                        third parties.
                                                                                                                    </em>

                                                                                                                </span>

                                                                                                            </span>

                                                                                                        </span>

                                                                                                    </div>

                                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                                        <br />

                                                                                                    </div>

                                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                <span data-custom-class="body_text">

                                                                                                                    <bdt className="block-component" />

                                                                                                                </span>

                                                                                                            </span>

                                                                                                        </span>

                                                                                                    </div>

                                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                            <span data-custom-class="body_text">
                                                                                                                We
                                                                                                                <bdt className="block-component" />
                                                                                                                may need to share your personal information in the following situations:
                                                                                                            </span>

                                                                                                        </span>

                                                                                                    </div>

                                                                                                    <ul>

                                                                                                        <li style={{ lineHeight: '1.5' }}>

                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                <span data-custom-class="body_text">

                                                                                                                    <strong>
                                                                                                                        Business Transfers.
                                                                                                                    </strong>&nbsp;
                                                                                                                    We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                                                                                                </span>

                                                                                                            </span>

                                                                                                        </li>

                                                                                                    </ul>

                                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                            <span data-custom-class="body_text">

                                                                                                                <bdt className="block-component" />

                                                                                                            </span>

                                                                                                        </span>

                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                <bdt className="block-component">

                                                                                                                    <span data-custom-class="body_text" />

                                                                                                                </bdt>

                                                                                                            </span>

                                                                                                            <div style={{ lineHeight: '1.5' }}>

                                                                                                                <bdt className="block-component">

                                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                                        <span data-custom-class="body_text" />

                                                                                                                    </span>

                                                                                                                </bdt>

                                                                                                                <div style={{ lineHeight: '1.5' }}>

                                                                                                                    <bdt className="block-component">

                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                            <span data-custom-class="body_text" />

                                                                                                                        </span>

                                                                                                                    </bdt>

                                                                                                                    <div style={{ lineHeight: '1.5' }}>

                                                                                                                        <bdt className="block-component">

                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                <span data-custom-class="body_text" />

                                                                                                                            </span>

                                                                                                                        </bdt>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <bdt className="block-component">

                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                    <span data-custom-class="body_text" />

                                                                                                                                </span>

                                                                                                                            </bdt>

                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <bdt className="block-component">

                                                                                                                                                    <span data-custom-class="heading_1" />

                                                                                                                                                </bdt>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <bdt className="block-component" />

                                                                                                                                                            </span>

                                                                                                                                                            <bdt className="block-component">

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <bdt className="block-component" />

                                                                                                                                                                </span>

                                                                                                                                                            </bdt>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div id="inforetain" style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <strong>

                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                        4. HOW LONG DO WE KEEP YOUR INFORMATION?
                                                                                                                                                    </span>

                                                                                                                                                </strong>&nbsp;

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <strong>

                                                                                                                                            <em>
                                                                                                                                                In Short:
                                                                                                                                            </em>

                                                                                                                                        </strong>&nbsp;

                                                                                                                                        <em>
                                                                                                                                            We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                                                                                                                                        </em>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than
                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <bdt className="block-component" />

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                        <bdt className="block-component" />
                                                                                                                                        the period of time in which users have an account with us
                                                                                                                                        <bdt className="block-component" />

                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <bdt className="else-block" />

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>
                                                                                                                                        .
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <bdt className="block-component" />

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div id="infosafe" style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <strong>

                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                        5. HOW DO WE KEEP YOUR INFORMATION SAFE?
                                                                                                                                                    </span>

                                                                                                                                                </strong>&nbsp;

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <strong>

                                                                                                                                            <em>
                                                                                                                                                In Short:
                                                                                                                                            </em>

                                                                                                                                        </strong>&nbsp;

                                                                                                                                        <em>
                                                                                                                                            We aim to protect your personal information through a system of organizational and technical security measures.
                                                                                                                                        </em>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <bdt className="statement-end-if-in-editor" />

                                                                                                                                        </span>

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div id="privacyrights" style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <strong>

                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                        6. WHAT ARE YOUR PRIVACY RIGHTS?
                                                                                                                                                    </span>

                                                                                                                                                </strong>&nbsp;

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <strong>

                                                                                                                                            <em>
                                                                                                                                                In Short:
                                                                                                                                            </em>

                                                                                                                                        </strong>&nbsp;

                                                                                                                                        <em>

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <em>

                                                                                                                                                            <bdt className="block-component" />

                                                                                                                                                        </em>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>
                                                                                                                                            You may review, change, or terminate your account at any time.
                                                                                                                                        </em>

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:
                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ color: 'rgb(48, 48, 241)' }}>

                                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                                            &nbsp;<a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank">

                                                                                                                                                                <span style={{ fontSize: '15px' }}>
                                                                                                                                                                    https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                                                                                                                                                                </span>

                                                                                                                                                            </a>&nbsp;

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>
                                                                                                                                        .
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        If you are located in Switzerland, the contact details for the data protection authorities are available here:
                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ color: 'rgb(48, 48, 241)' }}>

                                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                &nbsp;<a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">
                                                                                                                                                                    https://www.edoeb.admin.ch/edoeb/en/home.html
                                                                                                                                                                </a>&nbsp;

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>
                                                                                                                                        .
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div id="withdrawconsent" style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <strong>

                                                                                                                                            <u>
                                                                                                                                                Withdrawing your consent:
                                                                                                                                            </u>

                                                                                                                                        </strong>&nbsp;
                                                                                                                                        If we are relying on your consent to process your personal information,
                                                                                                                                        <bdt className="block-component" />
                                                                                                                                        which may be express and/or implied consent depending on the applicable law,
                                                                                                                                        <bdt className="statement-end-if-in-editor" />
                                                                                                                                        you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            &nbsp;<a data-custom-class="link" href="#contact">

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </a>&nbsp;

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        " below
                                                                                                                                        <bdt className="block-component" />
                                                                                                                                        .
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor
                                                                                                                                    <bdt className="block-component" />
                                                                                                                                    when applicable law allows,
                                                                                                                                    <bdt className="statement-end-if-in-editor" />
                                                                                                                                    will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                                                                                                                                    <bdt className="block-component" />

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <bdt className="block-component">

                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                    <span data-custom-class="body_text" />

                                                                                                                                </span>

                                                                                                                            </bdt>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                <span data-custom-class="heading_2">

                                                                                                                                    <strong>
                                                                                                                                        Account Information
                                                                                                                                    </strong>&nbsp;

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                <span style={{ fontSize: '15px' }}>
                                                                                                                                    If you would at any time like to review or change the information in your account or terminate your account, you can:
                                                                                                                                    <bdt className="forloop-component" />

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                                                        <bdt className="question">
                                                                                                                                            Contact us using the contact information provided.
                                                                                                                                        </bdt>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                    <bdt className="forloop-component" />

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                    Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <bdt className="statement-end-if-in-editor">

                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                    <span data-custom-class="body_text" />

                                                                                                                                </span>

                                                                                                                            </bdt>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                                    <bdt className="block-component" />

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <bdt className="block-component">

                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                    <span data-custom-class="body_text" />

                                                                                                                                </span>

                                                                                                                            </bdt>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div id="DNT" style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <strong>

                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                        7. CONTROLS FOR DO-NOT-TRACK FEATURES
                                                                                                                                                    </span>

                                                                                                                                                </strong>&nbsp;

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div id="caresidents" style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <strong>

                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                        8. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                                                                                                                                                    </span>

                                                                                                                                                </strong>&nbsp;

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <strong>

                                                                                                                                            <em>
                                                                                                                                                In Short:
                                                                                                                                            </em>

                                                                                                                                        </strong>&nbsp;

                                                                                                                                        <em>
                                                                                                                                            Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
                                                                                                                                        </em>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span data-custom-class="heading_2" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                    <strong>
                                                                                                                                        CCPA Privacy Notice
                                                                                                                                    </strong>&nbsp;

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div>

                                                                                                                            <div>

                                                                                                                                <br />

                                                                                                                            </div>

                                                                                                                            <div style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        The California Code of Regulations defines a "resident" as:
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </div>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5', marginLeft: '20px' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        (1) every individual who is in the State of California for other than a temporary or transitory purpose and
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5', marginLeft: '20px' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        All other individuals are defined as "non-residents."
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <strong>
                                                                                                                                            What categories of personal information do we collect?
                                                                                                                                        </strong>&nbsp;

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        We have collected the following categories of personal information in the past twelve (12) months:
                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <table style={{ width: '100%' }}>

                                                                                                                            <tbody>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <strong>
                                                                                                                                                        Category
                                                                                                                                                    </strong>&nbsp;

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderTop: '1px solid black', borderRight: '1px solid black' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <strong>
                                                                                                                                                        Examples
                                                                                                                                                    </strong>&nbsp;

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', borderRight: '1px solid black', borderTop: '1px solid black', textAlign: 'center' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <strong>
                                                                                                                                                        Collected
                                                                                                                                                    </strong>&nbsp;

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        A. Identifiers
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderTop: '1px solid black', borderRight: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', textAlign: 'center', verticalAlign: 'middle', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        YES
                                                                                                                                                        <bdt className="else-block" />

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        B. Personal information categories listed in the California Customer Records statute
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Name, contact information, education, employment, employment history, and financial information
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        YES
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        C. Protected classification characteristics under California or federal law
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Gender and date of birth
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        YES
                                                                                                                                                        <bdt className="else-block" />

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        D. Commercial information
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Transaction information, purchase history, financial details, and payment information
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        YES
                                                                                                                                                        <bdt className="else-block" />

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        E. Biometric information
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Fingerprints and voiceprints
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        NO
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        F. Internet or other similar network activity
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        NO
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        G. Geolocation data
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Device location
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        NO
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        H. Audio, electronic, visual, thermal, olfactory, or similar information
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Images and audio, video or call recordings created in connection with our business activities
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        YES
                                                                                                                                                        <bdt className="else-block" />

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ width: '33.8274%', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        I. Professional or employment-related information
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '51.4385%', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ width: '14.9084%', textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        NO
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black', width: '33.8274%' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        J. Education Information
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ borderRight: '1px solid black', borderTop: '1px solid black', width: '51.4385%' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Student records and directory information
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ textAlign: 'center', borderRight: '1px solid black', borderTop: '1px solid black', width: '14.9084%' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        NO
                                                                                                                                                        <bdt className="statement-end-if-in-editor" />

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                                <tr>

                                                                                                                                    <td style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', width: '33.8274%' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        K. Inferences drawn from other personal information
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ borderBottom: '1px solid black', borderTop: '1px solid black', borderRight: '1px solid black', width: '51.4385%' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                                        Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics
                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                    <td style={{ textAlign: 'center', borderRight: '1px solid black', borderBottom: '1px solid black', borderTop: '1px solid black', width: '14.9084%' }}>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="block-component" />
                                                                                                                                                        NO
                                                                                                                                                        <bdt className="statement-end-if-in-editor">

                                                                                                                                                            <span data-custom-class="body_text" />

                                                                                                                                                        </bdt>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </div>

                                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                                            <br />

                                                                                                                                        </div>

                                                                                                                                    </td>

                                                                                                                                </tr>

                                                                                                                            </tbody>

                                                                                                                        </table>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <bdt className="block-component" />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:
                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                                            <bdt className="block-component" />

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            Receiving help through our customer support channels;
                                                                                                                                        </span>

                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                                </span>

                                                                                                                                                                            </span>

                                                                                                                                                                        </span>

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                                            <bdt className="block-component" />

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            Participation in customer surveys or contests; and
                                                                                                                                        </span>

                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                                </span>

                                                                                                                                                                            </span>

                                                                                                                                                                        </span>

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                                            <bdt className="block-component" />

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            Facilitation in the delivery of our Services and to respond to your inquiries.
                                                                                                                                        </span>

                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                                </span>

                                                                                                                                                                            </span>

                                                                                                                                                                        </span>

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <strong>
                                                                                                                                            How do we use and share your personal information?
                                                                                                                                        </strong>&nbsp;

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                More information about our data collection and sharing practices can be found in this privacy notice
                                                                                                                                <bdt className="block-component" />
                                                                                                                                .
                                                                                                                            </span>

                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        You may contact us
                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                by email at
                                                                                                                                                <bdt className="question">
                                                                                                                                                    rockademy@hotmail.com
                                                                                                                                                </bdt>
                                                                                                                                                ,
                                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                                <bdt className="block-component">

                                                                                                                                                    <span data-custom-class="body_text" />

                                                                                                                                                </bdt>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                or by referring to the contact details at the bottom of this document.
                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <strong>
                                                                                                                                            Will your information be shared with anyone else?
                                                                                                                                        </strong>&nbsp;

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <bdt className="question">
                                                                                                                                            The Rockademy LLC
                                                                                                                                        </bdt>

                                                                                                                                    </span>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months.
                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <bdt className="question">
                                                                                                                                                        The Rockademy LLC
                                                                                                                                                    </bdt>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>
                                                                                                                                        will not sell personal information in the future belonging to website visitors, users, and other consumers.
                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                    <bdt className="block-component" />

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                <bdt className="block-component">

                                                                                                                                    <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                            <bdt className="block-component" />

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </bdt>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <strong>
                                                                                                                                            Your rights with respect to your personal data
                                                                                                                                        </strong>&nbsp;

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <u>
                                                                                                                                            Right to request deletion of the data — Request to delete
                                                                                                                                        </u>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <u>
                                                                                                                                            Right to be informed — Request to know
                                                                                                                                        </u>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        Depending on the circumstances, you have a right to know:
                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            whether we collect and use your personal information;
                                                                                                                                            <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            the categories of personal information that we collect;
                                                                                                                                            <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            the purposes for which the collected personal information is used;
                                                                                                                                            <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            whether we sell your personal information to third parties;
                                                                                                                                            <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            the categories of personal information that we sold or disclosed for a business purpose;
                                                                                                                                            <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
                                                                                                                                            <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            the business or commercial purpose for collecting or selling personal information.
                                                                                                                                            <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <u>
                                                                                                                                            Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights
                                                                                                                                        </u>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        We will not discriminate against you if you exercise your privacy rights.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <u>
                                                                                                                                            Verification process
                                                                                                                                        </u>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <u>
                                                                                                                                            Other privacy rights
                                                                                                                                        </u>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            You may object to the processing of your personal information.
                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                            </span>

                                                                                                                                                                        </span>

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.
                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                            </span>

                                                                                                                                                                        </span>

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                            </span>

                                                                                                                                                                        </span>

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <ul>

                                                                                                                            <li style={{ lineHeight: '1.5' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span data-custom-class="body_text">
                                                                                                                                            You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.
                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <span style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                            </span>

                                                                                                                                                                        </span>

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </li>

                                                                                                                        </ul>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        To exercise these rights, you can contact us
                                                                                                                                    </span>

                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <bdt className="block-component" />
                                                                                                                                                    by email at
                                                                                                                                                    <bdt className="question">
                                                                                                                                                        rockademy@hotmail.com
                                                                                                                                                    </bdt>
                                                                                                                                                    ,
                                                                                                                                                    <bdt className="statement-end-if-in-editor" />

                                                                                                                                                    <bdt className="block-component" />

                                                                                                                                                </span>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <bdt className="block-component" />

                                                                                                                                                    <bdt className="block-component">

                                                                                                                                                        <span data-custom-class="body_text" />

                                                                                                                                                    </bdt>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
                                                                                                                            </span>

                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                    <bdt className="block-component">

                                                                                                                                        <bdt className="block-component">

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                                                    <bdt className="statement-end-if-in-editor">

                                                                                                                                                                                        <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                                    </bdt>

                                                                                                                                                                                </span>

                                                                                                                                                                            </span>

                                                                                                                                                                        </span>

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </bdt>

                                                                                                                                    </bdt>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div id="policyupdates" style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <strong>

                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                        9. DO WE MAKE UPDATES TO THIS NOTICE?
                                                                                                                                                    </span>

                                                                                                                                                </strong>&nbsp;

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <em>

                                                                                                                                            <strong>
                                                                                                                                                In Short:
                                                                                                                                            </strong>&nbsp;
                                                                                                                                            Yes, we will update this notice as necessary to stay compliant with relevant laws.
                                                                                                                                        </em>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div id="contact" style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <strong>

                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                        10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                                                                                                                                    </span>

                                                                                                                                                </strong>&nbsp;

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        If you have questions or comments about this notice, you may
                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />
                                                                                                                                                email us at
                                                                                                                                                <bdt className="question">
                                                                                                                                                    rockademy@hotmail.com
                                                                                                                                                </bdt>

                                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span data-custom-class="body_text">
                                                                                                                                                    or by post to:
                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                            <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                                        <bdt className="question">
                                                                                                                                                            The Rockademy LLC
                                                                                                                                                        </bdt>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                <bdt className="block-component" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                    <bdt className="question">
                                                                                                                                        524 Stevens Ave
                                                                                                                                    </bdt>

                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                            <bdt className="block-component" />

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span data-custom-class="body_text" style={{ fontSize: '15px' }}>

                                                                                                                                <bdt className="question">
                                                                                                                                    #5
                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </bdt>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                    <bdt className="question">
                                                                                                                                        Solana beach
                                                                                                                                    </bdt>

                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                            <bdt className="block-component" />

                                                                                                                                            <bdt className="block-component" />
                                                                                                                                            ,
                                                                                                                                            <bdt className="question">
                                                                                                                                                CA
                                                                                                                                            </bdt>

                                                                                                                                            <bdt className="statement-end-if-in-editor" />

                                                                                                                                            <bdt className="block-component" />

                                                                                                                                            <bdt className="block-component" />

                                                                                                                                            <bdt className="question">
                                                                                                                                                92075
                                                                                                                                            </bdt>

                                                                                                                                            <bdt className="statement-end-if-in-editor" />

                                                                                                                                            <bdt className="block-component" />

                                                                                                                                            <bdt className="block-component" />

                                                                                                                                            <bdt className="block-component" />

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span data-custom-class="body_text" style={{ fontSize: '15px' }}>

                                                                                                                                <bdt className="question">
                                                                                                                                    United States
                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                        <span style={{ fontSize: '15px' }}>

                                                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                                                                                        <bdt className="statement-end-if-in-editor" />

                                                                                                                                                                    </span>

                                                                                                                                                                </span>

                                                                                                                                                            </span>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                                <bdt className="else-block" />

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </bdt>

                                                                                                                                <bdt className="statement-end-if-in-editor" />

                                                                                                                            </span>

                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                                                        <bdt className="statement-end-if-in-editor" />

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <span data-custom-class="body_text">

                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <bdt className="statement-end-if-in-editor">

                                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)' }}>

                                                                                                                                                    <span style={{ fontSize: '15px' }}>

                                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                                            <bdt className="block-component">

                                                                                                                                                                <bdt className="block-component" />

                                                                                                                                                            </bdt>

                                                                                                                                                        </span>

                                                                                                                                                    </span>

                                                                                                                                                </span>

                                                                                                                                            </bdt>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                                <span style={{ fontSize: '15px' }}>

                                                                                                                                    <span data-custom-class="body_text">

                                                                                                                                        <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                <span data-custom-class="body_text">

                                                                                                                                                    <bdt className="statement-end-if-in-editor">

                                                                                                                                                        <bdt className="block-component" />

                                                                                                                                                    </bdt>

                                                                                                                                                </span>

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div id="request" style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ color: 'rgb(127, 127, 127)' }}>

                                                                                                                                <span style={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }}>

                                                                                                                                    <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                        <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                            <span id="control" style={{ color: 'rgb(0, 0, 0)' }}>

                                                                                                                                                <strong>

                                                                                                                                                    <span data-custom-class="heading_1">
                                                                                                                                                        11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                                                                                                                                                    </span>

                                                                                                                                                </strong>&nbsp;

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <br />

                                                                                                                        </div>

                                                                                                                        <div style={{ lineHeight: '1.5' }}>

                                                                                                                            <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                <span style={{ fontSize: '15px', color: 'rgb(89, 89, 89)' }}>

                                                                                                                                    <span data-custom-class="body_text">
                                                                                                                                        Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please
                                                                                                                                        <bdt className="block-component" />
                                                                                                                                        submit a request form by clicking
                                                                                                                                    </span>

                                                                                                                                    <span style={{ color: 'rgb(48, 48, 241)' }}>

                                                                                                                                        <span data-custom-class="body_text">

                                                                                                                                            <span style={{ fontSize: '15px' }}>

                                                                                                                                                &nbsp;<a data-custom-class="link" href="https://app.termly.io/notify/f70d0793-1198-49ef-8533-3e331a142d5e" rel="noopener noreferrer" target="_blank">
                                                                                                                                                    here
                                                                                                                                                </a>&nbsp;

                                                                                                                                            </span>

                                                                                                                                        </span>

                                                                                                                                    </span>

                                                                                                                                    <bdt className="block-component">

                                                                                                                                        <span data-custom-class="body_text" />

                                                                                                                                    </bdt>

                                                                                                                                </span>

                                                                                                                            </span>

                                                                                                                            <span data-custom-class="body_text">
                                                                                                                                .
                                                                                                                            </span>

                                                                                                                        </div>

                                                                                                                        <style dangerouslySetInnerHTML={{
                                                                                                                            __html: "ul {list-style-type: square;} ul > li > ul {list-style-type: circle;} ul > li > ul > li > ul {list-style-type: square;} ol li {font-family: Arial;}"
                                                                                                                        }} />


                                                                                                                    </div>


                                                                                                                    <div style={{ color: '#595959', fontSize: '14px', fontFamily: 'Arial', paddingTop: '16px' }}>

                                                                                                                        This privacy policy was created using Termly's
                                                                                                                        &nbsp;<a style={{ color: 'rgb(48, 48, 241) !important' }} href="https://termly.io/products/privacy-policy-generator">
                                                                                                                            Privacy Policy Generator
                                                                                                                        </a>&nbsp;
                                                                                                                        .

                                                                                                                    </div>


                                                                                                                </div>

                                                                                                            </div>

                                                                                                        </div>

                                                                                                    </div>

                                                                                                </div>

                                                                                            </div>

                                                                                        </div>

                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </Container>
        </Layout>
    )
}
