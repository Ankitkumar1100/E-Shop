import React from 'react';
import Layout from '../components/layout/Layout';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment partners.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Domestic shipping typically takes 3-5 business days. International shipping can take 7-14 business days depending on the destination. We offer free shipping on orders over $100.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all items in their original condition. Simply contact our customer service team to initiate a return. Return shipping costs may apply.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can see the exact shipping cost at checkout.'
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history.'
  },
  {
    question: 'Are the products authentic?',
    answer: 'Yes, all products sold on our platform are 100% authentic. We work directly with brands and authorized sellers to ensure product authenticity.'
  }
];

const FAQPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Support
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;