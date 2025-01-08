<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-black to-blue-900 py-20 h-72">
      <div class="max-w-6xl mx-auto px-4 py-5">
        <h1 class="text-5xl font-bold mb-6 font-heading text-center">Get In Touch</h1>
        <p class="text-xl text-blue-300 text-center">
            Have a question or want to work together? I'd love to hear from you.
      </p>
      </div>
    </div>

    <!-- Notices -->
    <Transition name="fadeSuccess">
      <div v-if="successMsg" class="bg-blue-900/20 rounded-lg border border-blue-800 mx-auto max-w-4xl px-4 py-7 my-6 text-center text-green-400 font-bold text-xl">
        Thank you I will get back to you as soon as possible.
      </div>
    </Transition>
    <Transition name="fadeError">
      <div v-if="errorMsg" class="bg-blue-900/20 rounded-lg border border-blue-800 mx-auto max-w-4xl px-4 py-7 my-6 text-center text-red-400 font-bold text-xl">
        Sorry there was an error sending your message. Please try again.
      </div>
    </Transition>

    <!-- Contact Content -->
    <div class="max-w-6xl mx-auto px-4 py-16">
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
          <form class="space-y-6" name="contact" method="POST" data-netlify="true" netlify data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
            <input type="hidden" name="form-name" value="contact" />
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block mb-2 text-blue-300">Name</label>
                <input
                  v-model="form.name"
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
                  v-model="form.email"
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
                v-model="form.subject"
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
                v-model="form.message"
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
const successMsg = ref(false);
const errorMsg = ref(false);

const handleSubmit = async (event) => {
  const myForm = event.target;
  const formData = new FormData(myForm);
console.log('form is ' + myForm);
console.log('formData is ' + formData);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
      form.value = {
        name: '',
        email: '',
        message: ''
      };
      successMsg.value = true;
      window.scrollTo(0,0);
      setTimeout(() => {
        successMsg.value = false;
      }, 6000);

    })
    .catch(error => {
      errorMsg.value = true; 
      setTimeout(() => {
        errorMsg.value = false;
      }, 6000);
    });

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
.fadeSuccess-enter-active, .fadeSuccess-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fadeSuccess-enter-from, .fadeSuccess-leave-to {
  opacity: 0;
}
.fadeError-enter-active, .fadeError-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fadeError-enter-from, .fadeError-leave-to {
  opacity: 0;
}
</style>