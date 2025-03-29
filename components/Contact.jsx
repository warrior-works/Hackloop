"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6"

function Contact() {
  const [state, handleSubmit] = useForm("xanenbvb") // Replace with your actual Formspree form ID
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault()
    handleSubmit(e)
    if (!state.errors) {
      toast("Message Successfully!🎉")
      setEmail("")
      setName("")
      setMessage("")

    }
  }

  return (
    <div>
      <section id="contact" className="relative mb-8 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4"></span>
              CONTACT US
              <span className="w-8 h-1 bg-red-500 ml-4"></span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Have questions? Our team is here to help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-500">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="mt-1 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/40 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-500 group-hover:text-amber-400 transition-colors duration-300">
                        Phone
                      </h4>
                      <p className="text-gray-400">+91 6209950346</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="mt-1 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/40 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-500 group-hover:text-amber-400 transition-colors duration-300">
                        Email
                      </h4>
                      <p className="text-gray-400">hellow.ashutosh@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="mt-1 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/40 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-500 group-hover:text-amber-400 transition-colors duration-300">
                        Location
                      </h4>
                      <p className="text-gray-400">Mostly On DevDisplay</p>
                      <h3 className="text-xl font-bold mb-4 text-amber-500 mt-2">Follow Us</h3>
                      <p className="text-gray-400 mb-6">
                        Stay updated with the latest news and announcements about the hackathon.
                      </p>
                      <div className="flex gap-4">
                        <a
                          href="https://www.devdisplay.org/profile/codeaashu"
                          className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/40 transition-colors duration-300 transform hover:scale-110"
                        >
                          <img
                            src="/DevDisplay.png"
                            alt="DevDisplay"
                            className="w-6 h-6"
                          />
                        </a>
                        <a
                          href="https://twitter.com/warrior_aashuu"
                          className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/40 transition-colors duration-300 transform hover:scale-110"
                        >
                          <FaXTwitter className="text-red-500 text-xl" />
                        </a>
                        <a
                          href="https://www.instagram.com/warrior_aashuu/"
                          className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center hover:bg-amber-500/40 transition-colors duration-300 transform hover:scale-110"
                        >
                          <FaInstagram className="text-amber-500 text-xl" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/ashutoshkumaraashu/"
                          className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center hover:bg-amber-500/40 transition-colors duration-300 transform hover:scale-110"
                        >
                          <FaLinkedinIn className="text-amber-500 text-xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-6">


                <div className="mt">
                  <h4 className="text-xl font-bold text-amber-500 mb-6">Ask Queries</h4>
                  <form onSubmit={handleSubscribe}>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <textarea
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Enter your queries"
                          className="flex-1 px-4 py-2 h-[151px] rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          type="submit"
                          disabled={state.submitting}
                          className="bg-gradient-to-r rounded-lg from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white transform hover:scale-105 transition-all duration-300 "
                        >
                          Send
                        </Button>
                      </div>
                    </div>

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-2 text-red-500 text-sm"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-2 text-red-500 text-sm"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="mt-2 text-red-500 text-sm"
                    />
                  </form>


                  {state.succeeded && (
                    <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                      Thank you for subscribing! We'll keep you updated 🎉.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

