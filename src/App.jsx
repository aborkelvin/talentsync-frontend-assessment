import FAQ from "./components/faq";


function App() {
    return (
        <div className="">
            <div className="bg-[url('images/bgimg.png')] pt-10 pb-[96px] px-[128px] " >
            
                <div className="mb-[160px] px-8 py-4 flex justify-between items-center bg-[#F2F4F7] rounded-full border-[1px] border-[#D0D5DD] " >
                    <div className="flex gap-[10px] items-center" >
                        <img
                            src={process.env.PUBLIC_URL + '/images/logo.svg'}
                            alt="ClearLink logo"
                            className="w-[26px] h-[28px] "
                        />
                        <h1 className="text-[#101828] font-semibold text-2xl" >ClearLink <span className="text-[#528BFF]" >. </span> </h1>
                    </div>
                    <nav className="flex gap-10 items-center" >
                        <div className="flex gap-[6px] items-center ">
                            <span className="text-[#667085] text-lg font-semibold " >Products</span>
                            <img src={process.env.PUBLIC_URL + '/images/downarrow.svg'} alt="down arrow" className="w-[18px] h-[18px]" />
                        </div>
                        <div className="flex gap-[6px] items-center ">
                            <span className="text-[#667085] text-lg font-semibold " >Solutions</span>
                            <img src={process.env.PUBLIC_URL + '/images/downarrow.svg'} alt="down arrow" className="w-[18px] h-[18px]" />
                        </div>
                        <div className="flex gap-[6px] items-center ">
                            <span className="text-[#667085] text-lg font-semibold " >Resources</span>
                            <img src={process.env.PUBLIC_URL + '/images/downarrow.svg'} alt="down arrow" className="w-[18px] h-[18px]" />
                        </div>
                        <span className="text-[#667085] text-lg font-semibold " >Pricing</span>
                    </nav>
                    <div className="flex gap-2 items-center" >
                        <button className="px-6 py-[14px] rounded-full border-[1px] border-[#98A2B3] bg-[#FFFFFF] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
                         text-base text-[#101828] font-semibold " >
                            Talk to sales
                        </button>
                        <button className="px-6 py-[14px] rounded-full bg-[#175CD3] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
                        text-base text-[#FFFFFF] font-semibold  " >
                            Sign up for free
                        </button>
                    </div>
                </div>
                <div className="flex justify-between gap-10" >
            
                    <div className="" >
                        <h2 className="mb-6 text-[64px] font-semibold leading-[72px] text-[#1D2939] " >
                            Uniting the world,<br /> one video call at a time
                        </h2>
                        <p className="mb-12 text-[#667085] text-2xl " >
                            Experience the future of communication with ClearLink –<br /> where crystal-clear video conferencing meets <br /> unparalleled simplicity.
                        </p>
                        <div className="mb-12 flex gap-5 items-center ">
                            <button className="py-4 px-[28px] rounded-full bg-[#175CD3] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
                             text-[#FFFFFF] text-lg font-semibold " >
                                Start your free trial
                            </button>
                            <div className="flex gap-3 items-center" >
                                <img src={process.env.PUBLIC_URL + "/images/robot.svg"} alt="AI assistant" className="w-5 h-5" />
                                <span className="text-[#175CD3] text-lg font-semibold " >Discover AI assistant</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center ">
                            <img src={process.env.PUBLIC_URL + "/images/avatars.svg"} alt="avatars" className="" />
                            <div className="flex flex-col gap-1">
                                <div className="" >
                                    <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 1" className="w-5 h-5 mr-1 inline-block" />
                                    <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 2" className="w-5 h-5 mr-1 inline-block" />
                                    <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 3" className="w-5 h-5 mr-1 inline-block" />
                                    <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 4" className="w-5 h-5 mr-1 inline-block" />
                                    <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 5" className="w-5 h-5 mr-2 inline-block" />
                                    <span className="text-base text-[#344054] font-semibold relative top-[2px] " >5.0</span>
                                </div>
                                <p className="text-base text-[#475467] font-medium " >from 3,000+ reviews</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-8 max-w-[584px] h-fit w-full rounded-2xl border-[1px] border-[#B2DDFF] bg-[#EFF8FF] shadow-[0px_32px_64px_-12px_rgba(16,24,40,0.14)] " >
                        <div className="mb-10 grid grid-cols-3 grid-rows-2 gap-5" >
                            <img src={process.env.PUBLIC_URL + "/images/herofolder/animoji.png"} alt="profile" className="max-w-[155px]" />
                            <img src={process.env.PUBLIC_URL + "/images/herofolder/animoji2.png"} alt="profile" className="max-w-[155px]" />
                            <img src={process.env.PUBLIC_URL + "/images/herofolder/animoji3.png"} alt="profile" className="max-w-[155px]" />
                            <img src={process.env.PUBLIC_URL + "/images/herofolder/animoji4.png"} alt="profile" className="max-w-[155px]" />
                            <img src={process.env.PUBLIC_URL + "/images/herofolder/animoji5.png"} alt="profile" className="max-w-[155px]" />
                            <img src={process.env.PUBLIC_URL + "/images/herofolder/animoji6.png"} alt="profile" className="max-w-[155px]" />
                        </div>
                        <div className="flex gap-4 justify-center " >
                            <div className="p-3 w-[44px] h-[44px] border-[1px] border-[#D1E9FF] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#FFFFFF] " >
                                <img src={process.env.PUBLIC_URL + "/images/herofolder/microphone-01.svg"} alt="microphone" className="w-5 h-5" />
                            </div>
                            <div className="p-3 w-[44px] h-[44px] border-[1px] border-[#D1E9FF] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#FFFFFF] " >
                                <img src={process.env.PUBLIC_URL + "/images/herofolder/video-recorder.svg"} alt="video-recorder" className="w-5 h-5" />
                            </div>
                            <div className="p-3 w-[44px] h-[44px] border-[1px] border-[#D1E9FF] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#FFFFFF] " >
                                <img src={process.env.PUBLIC_URL + "/images/herofolder/monitor-01.svg"} alt="monitor" className="w-5 h-5" />
                            </div>
                            <div className="p-3 w-[44px] h-[44px] border-[1px] border-[#D1E9FF] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#FFFFFF] " >
                                <img src={process.env.PUBLIC_URL + "/images/herofolder/face-smile.svg"} alt="face-smile" className="w-5 h-5" />
                            </div>
                            <div className="p-3 w-[44px] h-[44px] border-[1px] border-[#D1E9FF] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#FFFFFF] " >
                                <img src={process.env.PUBLIC_URL + "/images/herofolder/message-text-circle-02.svg"} alt="message" className="w-5 h-5" />
                            </div>
                            <div className="p-3 w-[44px] h-[44px] border-[1px] border-[#D1E9FF] rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#FFFFFF] " >
                                <img src={process.env.PUBLIC_URL + "/images/herofolder/settings-01.svg"} alt="settings" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[96px] px-[64px] ">
                <p className="mb-12 text-xl font-medium text-[#475467] text-center " >
                    Join 1,500+ companies already video conferencing the ClearLink way
                </p>

                <div className="flex justify-center items-center flex-wrap gap-[69px]" >
                    {/* shopify, coinbase, dropbox, intercom, marvel, automattic */}
                    <img src={process.env.PUBLIC_URL + "/images/socialproof/Shopify.svg"} alt="Shopify" className="max-w-[155px] max-h-[45px]" />
                    <img src={process.env.PUBLIC_URL + "/images/socialproof/Coinbase.svg"} alt="Coinbase" className="max-w-[180px] max-h-[35px]" />
                    <img src={process.env.PUBLIC_URL + "/images/socialproof/Dropbox.svg"} alt="Dropbox" className="max-w-[185px] max-h-[40px]" />
                    <img src={process.env.PUBLIC_URL + "/images/socialproof/Intercom.svg"} alt="Intercom" className="max-w-[175px] max-h-[45px]" />
                    <img src={process.env.PUBLIC_URL + "/images/socialproof/Marvel.svg"} alt="Marvel" className="max-w-[100px] max-h-[40px]" />
                    <img src={process.env.PUBLIC_URL + "/images/socialproof/Automattic.svg"} alt="Automattic" className="max-w-[240px] max-h-[20px]" />
                </div>
            </div>

            <div className="py-[96px] px-[96px] 2xl:px-[140px] " >
                <div className="mb-20" >
                    <h4 className="mb-3 text-lg font-semibold text-[#175CD3]" >The ClearLink Advantage</h4>
                    <h3 className="mb-5 text-[48px] font-semibold text-[#1D2939] " >Why choose ClearLink?</h3>
                    <p className="text-2xl text-[#667085]" >
                        In a world where connection is everything, ClearLink takes the lead. Our <br /> cutting-edge video conferencing app offers:
                    </p>
                </div>
                <div className="flex justify-between items-center gap-10" >
                    
                    <div className="grid grid-rows-2 grid-cols-2 gap-x-10 gap-y-[14px]" >                        
                        <div className="max-w-[360px]" >
                            <div className="mb-5 p-4 w-[56px] h-[56px] border-[1px] border-[#EAECF0] rounded-full bg-[#F9FAFB] " >
                                <img src={process.env.PUBLIC_URL + "/images/herofolder/video-recorder.svg"} alt="video recorder" className="w-6 h-6" />
                            </div>
                            <h4 className="mb-2 text-[22px] font-semibold text-[#101828] " >Crystal-clear HD video</h4>
                            <p className="text-lg text-[#475467]" >
                                No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.
                            </p>
                        </div>

                        <div className="max-w-[360px]" >
                            <div className="mb-5 p-4 w-[56px] h-[56px] border-[1px] border-[#EAECF0] rounded-full bg-[#F9FAFB] " >
                                <img src={process.env.PUBLIC_URL + "/images/recording.svg"} alt="voice recording" className="w-6 h-6" />
                            </div>
                            <h4 className="mb-2 text-[22px] font-semibold text-[#101828] " >Noise-canceling audio</h4>
                            <p className="text-lg text-[#475467]" >
                                Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.
                            </p>
                        </div>

                        <div className="max-w-[360px]" >
                            <div className="mb-5 p-4 w-[56px] h-[56px] border-[1px] border-[#EAECF0] rounded-full bg-[#F9FAFB] " >
                                <img src={process.env.PUBLIC_URL + "/images/calendar.svg"} alt="voice recording" className="w-6 h-6" />
                            </div>
                            <h4 className="mb-2 text-[22px] font-semibold text-[#101828] " >Scheduling made easy</h4>
                            <p className="text-lg text-[#475467]" >
                                Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.
                            </p>
                        </div>

                        <div className="max-w-[360px]" >
                            <div className="mb-5 p-4 w-[56px] h-[56px] border-[1px] border-[#EAECF0] rounded-full bg-[#F9FAFB] " >
                                <img src={process.env.PUBLIC_URL + "/images/lock.svg"} alt="voice recording" className="w-6 h-6" />
                            </div>
                            <h4 className="mb-2 text-[22px] font-semibold text-[#101828] " >Bank-grade security</h4>
                            <p className="text-lg text-[#475467]" >
                                Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.
                            </p>
                        </div>
                    </div>

                    <div className="xl:p-5 relative " >
                        <img src={process.env.PUBLIC_URL + "/images/Hand-drawn arrow.svg"} alt="Hand-drawn arrow" className="absolute -top-[200px] left-20  " />
                        <img src={process.env.PUBLIC_URL + "/images/subhero.png"} alt="sub hero img" className="max-w-[500px] max-h-[500px] 2xl:max-w-[545px] 2xl:max-h-[530px] " />
                    </div>
                </div>
            </div>

            <div className="py-[96px] px-[96px] 2xl:px-[128px] bg-[#F9FAFB] flex justify-between gap-8  ">
                <div className="flex-1" >
                    <img src={process.env.PUBLIC_URL + "/images/socialproof/Shopify.svg"} alt="Shopify" className="mb-10 max-w-[113px] max-h-[33px]" />
                    <div className="mb-10" >
                        <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 1" className="w-5 h-5 mr-1 inline-block" />
                        <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 2" className="w-5 h-5 mr-1 inline-block" />
                        <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 3" className="w-5 h-5 mr-1 inline-block" />
                        <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 4" className="w-5 h-5 mr-1 inline-block" />
                        <img src={process.env.PUBLIC_URL + '/images/staricon.svg'} alt="rating star 5" className="w-5 h-5 inline-block" />
                    
                    </div>
                    <p className="mb-10 text-[44px] text-[#101828] font-medium leading-[60px] " >
                        ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.
                    </p>
                    <div className="flex justify-between items-center ">
                        <div className="flex gap-4">
                            <img src={process.env.PUBLIC_URL + "/images/Avatar.svg"} alt="avatar" className="w-[56px] h-[56px]" />
                            <div>
                                <span className="mb-[2px] text-xl font-semibold text-[#101828] " >Sarah Thompson</span>
                                <p className="text-lg text-[#475467]  " >Project Manager, Shopify</p>
                            </div>
                        </div>
                        <div className="flex gap-8 items-center">
                            <button className="p-4 w-[56px] h-[56px] border-[1px] border-[#D1E9FF] rounded-full bg-[#FFFFFFE5] " >
                                <img src={process.env.PUBLIC_URL + "/images/arrowleft.svg"} alt="left arrow" className="w-6 h-6" />
                            </button>
                            <button className="p-4 w-[56px] h-[56px] border-[1px] border-[#D1E9FF] rounded-full bg-[#FFFFFFE5] " >
                                <img src={process.env.PUBLIC_URL + "/images/arrowright.svg"} alt="right arrow" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1" >
                    <div className="mb-4 flex gap-4 items-end justify-center" >
                        <img src={process.env.PUBLIC_URL + "/images/testimonialImg.png"} alt="testimonial" className="" />
                        <img src={process.env.PUBLIC_URL + "/images/testimonialImg2.png"} alt="testimonial" className="" />
                    </div>
                    <div className="flex gap-4 items-start justify-center" >
                        <img src={process.env.PUBLIC_URL + "/images/testimonialImg3.png"} alt="testimonial" className="" />
                        <img src={process.env.PUBLIC_URL + "/images/testimonialImg4.png"} alt="testimonial" className="" />
                        <img src={process.env.PUBLIC_URL + "/images/testimonialImg5.png"} alt="testimonial" className="" />
                    </div>                    
                </div>
            </div>
            
            <div className="py-[96px] px-[96px] 2xl:px-[128px] flex justify-between gap-5 " >
                <div className="w-[40%]" >
                    <span className="mb-3 text-lg text-[#175CD3] font-semibold " >Support</span>
                    <h5 className="mb-5 text-[48px] font-semibold text-[#1D2939] " >FAQs</h5>
                    <p className="text-xl text-[#667085] " >
                        Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please <span className="underline">chat to our friendly team.</span>
                    </p>
                </div>

                <div className="flex-1" >
                    {
                        faqs.map((faq, index) => {
                            return (
                                <FAQ question={faq.question} last={faq.last} key={index} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="py-12 pl-[96px] 2xl:pl-[128px] flex justify-between items-start ">
                <div className="lg:pt-5 2xl:pt-10" >
                    <h5 className="mb-8 text-[#101828] text-[36px] 2xl:text-[48px] font-semibold " >Ready to clear the path to perfect communication?</h5>
                    <div className="mb-5 flex gap-3 items-center">
                        <img src={process.env.PUBLIC_URL + "/images/checkcircle.svg"} alt="check circle" className="w-[28px] h-[28px] " />
                        <span className="text-xl text-[#475467] " >30 days free trial</span>
                    </div>
                    <div className="mb-5 flex gap-3 items-center">
                        <img src={process.env.PUBLIC_URL + "/images/checkcircle.svg"} alt="check circle" className="w-[28px] h-[28px] " />
                        <span className="text-xl text-[#475467] " >Cancel at any time</span>
                    </div>
                    <div className="mb-5 flex gap-3 items-center">
                        <img src={process.env.PUBLIC_URL + "/images/checkcircle.svg"} alt="check circle" className="w-[28px] h-[28px] " />
                        <span className="text-xl text-[#475467] " >Access to all features</span>
                    </div>
                    <div className="mb-10 flex gap-3 items-center">
                        <img src={process.env.PUBLIC_URL + "/images/checkcircle.svg"} alt="check circle" className="w-[28px] h-[28px] " />
                        <span className="text-xl text-[#475467] " >Peronalized onboarding</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-6 py-[14px] rounded-full border-[1px] border-[#98A2B3] bg-[#FFFFFF] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
                         text-base text-[#101828] font-semibold " >
                            Talk to sales
                        </button>
                        <button className="px-6 py-[14px] rounded-full bg-[#175CD3] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
                        text-base text-[#FFFFFF] font-semibold  " >
                            Start your free trial
                        </button>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+ "/images/screenmockup.png" } alt="Screen mockup" className="lg:min-w-[724px] 2xl:min-w-[824px]" />
                </div>
            </div>
            
            <div className="pt-[96px] pb-12 px-[96px] 2xl:px-[128px] flex justify-between gap-12 ">
                <div className="max-w-[400px] " >
                    <div className="mb-8 flex gap-[10px] items-center" >
                        <img
                            src={process.env.PUBLIC_URL + '/images/logo.svg'}
                            alt="ClearLink logo"
                            className="w-[26px] h-[28px] "
                        />
                        <h1 className="text-[#101828] font-semibold text-2xl" >ClearLink <span className="text-[#528BFF]" >. </span> </h1>
                    </div>
                    <p className="text-[#475467] text-lg " >
                        ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!
                    </p>
                </div>
                <div className="flex gap-6 lg:gap-8">
                    <div className="flex flex-col gap-4 min-w-[150px] " >
                        <span className="text-base text-[#667085] font-semibold " >Product</span>
                        <span className="text-lg font-semibold text-[#475467]" >Overview</span>
                        <span className="text-lg font-semibold text-[#475467]" >Features</span>
                        <span className="text-lg font-semibold text-[#475467]" >Solutions</span>
                        <span className="text-lg font-semibold text-[#475467]" >Tutorials</span>
                        <span className="text-lg font-semibold text-[#475467]" >Pricing</span>
                    </div>
                    <div className="flex flex-col gap-4 min-w-[150px] " >
                        <span className="text-base text-[#667085] font-semibold " >Company</span>
                        <span className="text-lg font-semibold text-[#475467]" >About us</span>
                        <span className="text-lg font-semibold text-[#475467]" >Careers</span>
                        <span className="text-lg font-semibold text-[#475467]" >Press</span>
                        <span className="text-lg font-semibold text-[#475467]" >News</span>
                        <span className="text-lg font-semibold text-[#475467]" >Contact</span>
                    </div>
                    <div className="flex flex-col gap-4 min-w-[150px] " >
                        <span className="text-base text-[#667085] font-semibold " >Resources</span>
                        <span className="text-lg font-semibold text-[#475467]" >Blog</span>
                        <span className="text-lg font-semibold text-[#475467]" >Events</span>
                        <span className="text-lg font-semibold text-[#475467]" >Help centre</span>
                        <span className="text-lg font-semibold text-[#475467]" >Tutorials</span>
                        <span className="text-lg font-semibold text-[#475467]" >Support</span>
                    </div>
                    <div className="flex flex-col gap-4 min-w-[150px] " >
                        <span className="text-base text-[#667085] font-semibold " >Legal</span>
                        <span className="text-lg font-semibold text-[#475467]" >Terms</span>
                        <span className="text-lg font-semibold text-[#475467]" >Privacy</span>
                        <span className="text-lg font-semibold text-[#475467]" >Cookies</span>
                        <span className="text-lg font-semibold text-[#475467]" >Licenses</span>
                        <span className="text-lg font-semibold text-[#475467]" >Contact</span>
                    </div>
                    <div className="" >
                        <span className="mb-4 block text-base font-semibold text-[#004EEB]" >Get the app</span>
                        <img src={process.env.PUBLIC_URL + "/images/appstore.svg"} alt="app store" className="mb-4 min-w-[135px]" />
                        <img src={process.env.PUBLIC_URL + "/images/googlestore.svg"} alt="google store" className=" min-w-[135px] " />
                    </div>
                </div>
            </div>

            <div className="py-12 2xl:px-[160px] bg-[#F9FAFB] flex items-center justify-between">
                <span className="text-base text-[#667085] " >
                    © 2023 ClearLink. All rights reserved.
                </span>
                <div className="flex gap-6" >
                    {/* linkedIN, twitter, facebook, instagram, github, youtube */}
                    <img src={process.env.PUBLIC_URL + "/images/socials/linkedin.svg"} alt="linkedin" className="w-6 h-6" />
                    <img src={process.env.PUBLIC_URL + "/images/socials/twitter.svg"} alt="twitter" className="w-6 h-6" />
                    <img src={process.env.PUBLIC_URL + "/images/socials/facebook.svg"} alt="facebook" className="w-6 h-6" />
                    <img src={process.env.PUBLIC_URL + "/images/socials/instagram.svg"} alt="instagram" className="w-6 h-6" />
                    <img src={process.env.PUBLIC_URL + "/images/socials/github.svg"} alt="github" className="w-6 h-6" />
                    <img src={process.env.PUBLIC_URL + "/images/socials/youtube.svg"} alt="youtube" className="w-6 h-6" />
                </div>
            </div>

        </div>
    )
}    


export default App;



let faqs = [
    {
        question: "How many participants can join a ClearLink video conference?"
    },
    {
        question: "Can I use ClearLink on multiple devices?"
    },
    {
        question: "Is ClearLink compatible with other video conferencing platforms?"
    },
    {
        question: "How does ClearLink ensure the security of my video conferences?"
    },
    {
        question: "Do I need to download any software to use ClearLink?"
    },
    {
        question: "What kind of customer support does ClearLink provide?",
        last:true
    }
]