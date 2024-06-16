'use client'
import { ValidationError, useForm } from '@formspree/react'
import React from 'react'

function ContactMe() {
    const [state, handleSubmit] = useForm("mvoeerqn");
    if (state.succeeded) {
        return (
            <div className="col-span-12 w-[40%] mx-auto my-5 bg-orange-500 border text-white px-6 py-4 rounded-lg">
                <p className="font-semibold">Thank you for reaching out!</p>
                <p className="text-sm">We appreciate your interest and will get back to you as soon as possible.</p>
            </div>
        )
    }
    return (
        <section className="col-span-12 bg-gray-100 my-5" id='contactMe'>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            Feel free to reach out to me for any inquiries, collaborations, or freelance opportunities. I&apos;m always excited to connect and explore new possibilities!
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    name="name"
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        name="email"
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                    placeholder="Message"
                                    rows={8}
                                    id="message"
                                    name="message"
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="text-white bg-orange-500 p-3 md:min-w-[150px] text-center rounded-lg transition duration-300 ease-in-out hover:bg-orange-600"
                                >
                                    {state.submitting ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContactMe
