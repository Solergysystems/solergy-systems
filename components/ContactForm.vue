<template>
  <section id="contact" class="section bg-gradient-to-br from-blue-50 via-white to-green-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Get Your <span class="text-gradient">Free Quote</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Start your solar journey today. Fill out the form below and our team will contact you within 24 hours.
        </p>
      </div>

      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="handleSubmit" class="card p-8 space-y-6">
          <!-- Success Message -->
          <div v-if="formStatus === 'success'" class="p-4 bg-green-50 border-2 border-green rounded-lg">
            <div class="flex items-center space-x-2 text-green">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="font-semibold">Thank you! We'll contact you soon.</p>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="formStatus === 'error'" class="p-4 bg-red-50 border-2 border-red-500 rounded-lg">
            <div class="flex items-center space-x-2 text-red-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="font-semibold">{{ errorMessage }}</p>
            </div>
          </div>

          <!-- Form Fields -->
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="input"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                required
                pattern="[0-9]{10}"
                class="input"
                placeholder="10-digit mobile"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="input"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label for="address" class="block text-sm font-semibold text-gray-700 mb-2">
              Installation Address
            </label>
            <input
              id="address"
              v-model="formData.address"
              type="text"
              class="input"
              placeholder="City, District, State"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
              Additional Details
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="input"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="btn btn-primary w-full text-lg py-4"
            :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
          >
            <span v-if="!isSubmitting">
              Send Enquiry
              <svg class="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span v-else>
              Sending...
            </span>
          </button>

          <p class="text-sm text-gray-500 text-center">
            By submitting this form, you agree to be contacted by Solergy Systems.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const formData = reactive({
  name: '',
  phone: '',
  email: '',
  address: '',
  message: ''
})

const isSubmitting = ref(false)
const formStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  formStatus.value = 'idle'
  errorMessage.value = ''

  try {
    // EmailJS configuration
    // Note: Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID'
    const templateId = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    // Check if EmailJS is configured
    if (serviceId === 'YOUR_SERVICE_ID' || !serviceId) {
      // For demo purposes, show success after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted (demo mode):', formData)
      
      formStatus.value = 'success'
      
      // Reset form after 3 seconds
      setTimeout(() => {
        Object.keys(formData).forEach(key => {
          formData[key as keyof typeof formData] = ''
        })
        formStatus.value = 'idle'
      }, 3000)
      
      return
    }

    // Send email using EmailJS
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        address: formData.address,
        system_size: formData.systemSize,
        message: formData.message,
        to_email: 'solergysystems7@gmail.com'
      },
      publicKey
    )

    formStatus.value = 'success'
    
    // Reset form
    setTimeout(() => {
      Object.keys(formData).forEach(key => {
        formData[key as keyof typeof formData] = ''
      })
      formStatus.value = 'idle'
    }, 3000)

  } catch (error) {
    console.error('Error sending email:', error)
    formStatus.value = 'error'
    errorMessage.value = 'Failed to send message. Please try calling us directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
