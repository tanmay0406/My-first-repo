// ./src/app/contact/page.js

"use client"; // Mark the parent component as a client component
// ./src/app/contact/page.js

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../componants/navbar';
import Switcher from '../componants/navbar';
import Footer from '../componants/footer';
import { FiHexagon } from '../assets/icons/vander';
import { conatctDetails } from '../data/data';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        comments: ''
    });
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true); // Start submission process
            try {
                const response = await axios.post('http://localhost:5000/api/contact', formData);
                setMessage(response.data.message);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    comments: ''
                });
                setErrors({});
            } catch (error) {
                setMessage('An error occurred. Please try again later.');
            }
            setIsSubmitting(false); // Submission process completed
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
            isValid = false;
        }

        if (!formData.comments.trim()) {
            errors.comments = 'Comments is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe
                            title="contact-iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            style={{ border: '0' }}
                            className="w-full h-[500px]"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <Image
                                src="/images/svg/contact.svg"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:me-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch!</h3>

                                    <form onSubmit={handleSubmit}>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="name" className="font-medium">
                                                    Your Name:
                                                </label>
                                                <input
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    className="form-input mt-2"
                                                    placeholder="Name :"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="email" className="font-medium">
                                                    Your Email:
                                                </label>
                                                <input
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    className="form-input mt-2"
                                                    placeholder="Email :"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <label htmlFor="subject" className="font-medium">
                                                    Your Question:
                                                </label>
                                                <input
                                                    name="subject"
                                                    id="subject"
                                                    className="form-input mt-2"
                                                    placeholder="Subject :"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                                {errors.subject && <p className="text-red-500">{errors.subject}</p>}
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="comments" className="font-medium">
                                                    Your Comment:
                                                </label>
                                                <textarea
                                                    name="comments"
                                                    id="comments"
                                                    className="form-input mt-2 textarea"
                                                    placeholder="Message :"
                                                    value={formData.comments}
                                                    onChange={handleChange}
                                                ></textarea>
                                                {errors.comments && <p className="text-red-500">{errors.comments}</p>}
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            id="submit"
                                            name="send"
                                            className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {conatctDetails.map((item, index) => {
                            const Icon = item.Icon;
                            return (
                                <div className="text-center px-6" key={index}>
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <FiHexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                            <Icon width={30} height={30} />
                                        </div>
                                    </div>

                                    <div className="content mt-7">
                                        <h5 className="title h5 text-xl font-medium">{item.title}</h5>
                                        <p className="text-slate-400 mt-3">{item.description}</p>

                                        <div className="mt-5">
                                            <Link
                                                href="tel:+152534-468-854"
                                                className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
                                            >
                                                {item.contact}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
            {message && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-lg">
                        <p className="text-xl font-medium">{message}</p>
                        <button
                            onClick={() => setMessage('')}
                            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
