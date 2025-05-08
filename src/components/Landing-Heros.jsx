import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const LandingHeros = () => {
    return (
        <section className="bg-white py-20 dark:bg-gray-900 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl space-y-6"
            >
              <h1 className="text-4xl text-slate-700 dark:text-white font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Save links with <span className="text-blue-500">auto-summaries</span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-500 dark:text-gray-400">
                Organize your web discoveries with smart summaries. Save time and never lose an important link again.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/signup"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-blue-500 px-6 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-6 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Log in
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-16"
            >
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-20 dark:from-gray-900"></div>
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" alt="LinkVault Dashboard Preview" className="w-full" />
              </div>
            </motion.div>
          </div>
        </section>
      )
}

export default LandingHeros