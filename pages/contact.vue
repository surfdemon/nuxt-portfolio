<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-black to-blue-900 py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-6 font-heading text-center">Get In Touch</h1>
  
      </div>
    </div>

    <!-- Contact Content -->
    <div class="max-w-4xl mx-auto px-4 pb-10">
      <h2 class="text-2xl font-extrabold text-blue-400 text-center m-5">
          Have a question or want to work together? I'd love to hear from you.
    </h2>
      <div class="grid md:grid-cols-5 gap-8">
        <!-- Contact Info -->
        <div class="md:col-span-2 bg-blue-900/20 p-8 rounded-lg border border-blue-800">
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold mb-4 font-heading text-blue-400">Contact Information</h2>
              <p class="text-gray-300">Feel free to reach out through any of these channels</p>
            </div>

            <div class="space-y-6">
              <div>
                <div class="text-blue-300 mb-1">Location</div>
                <div class="text-lg">Cornwall, United Kingdom</div>
              </div>

              <div>
                <div class="text-blue-300 mb-1">Email</div>
                <a href="mailto:surfdemon@gmail.com" class="text-lg hover:text-blue-400 transition">
                  surfdemon@gmail.com
                </a>
              </div>

              <div>
                <div class="text-blue-300 mb-1">Social</div>
                <div class="flex space-x-4">
                  <a href="https://www.linkedin.com/in/rob-p-beach/" class="text-lg hover:text-blue-400 transition">LinkedIn</a>
                  <a href="https://github.com/surfdemon/" class="text-lg hover:text-blue-400 transition">GitHub</a>
                </div>
              </div>
            </div>

            <div class="pt-8 border-t border-blue-800">
              <h3 class="text-xl font-bold mb-4 font-heading text-blue-400">Current Status</h3>
              <p class="text-green-400">Available for work</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="md:col-span-3 bg-blue-900/20 p-8 rounded-lg border border-blue-800">
          <form class="space-y-6" name="contact" method="POST" data-netlify="true">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block mb-2 text-blue-300">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-blue-900/30 rounded-lg border border-blue-800 
                         text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label class="block mb-2 text-blue-300">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-blue-900/30 rounded-lg border border-blue-800 
                         text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label class="block mb-2 text-blue-300">Subject</label>
              <input
                name="subject"
                type="text"
                required
                class="w-full px-4 py-3 bg-blue-900/30 rounded-lg border border-blue-800 
                       text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label class="block mb-2 text-blue-300">Message</label>
              <textarea
                name="message"
                required
                rows="6"
                class="w-full px-4 py-3 bg-blue-900/30 rounded-lg border border-blue-800 
                       text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 
                     transition flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mail = useMail();
const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = async () => {
  try {
    await mail.send({
      from: form.value.email,
      name: form.value.name,
      subject: form.value.subject,
      text: form.value.message
    });
    console.log('Form submitted:', form.value);
    // Optionally, reset the form
    form.value = {
      name: '',
      email: '',
      message: ''
    };
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

useHead({
  title: 'Contact Page',
  meta: [
    {
      name: 'description',
      content: 'This is the contact page'
    }
  ]
})

</script>

<style>

</style>