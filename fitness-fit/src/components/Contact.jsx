import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from 'react-icons/fa'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().optional(),
  message: yup.string().optional(),
})

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 500))
    alert(`Thank you, ${data.name}! We will reach out soon.`)
    reset()
  }

  return (
    <section id="contact" className="container-section py-20 md:py-28" data-aos="fade-up">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Join Us</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Book a free trial, ask a question, or reach us directly.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <input
                className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm dark:border-gray-700 dark:bg-gray-950"
                placeholder="Your name"
                {...register('name')}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input
                className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm dark:border-gray-700 dark:bg-gray-950"
                placeholder="name@email.com"
                {...register('email')}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Phone</label>
              <input
                className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm dark:border-gray-700 dark:bg-gray-950"
                placeholder="Optional"
                {...register('phone')}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea
                className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm dark:border-gray-700 dark:bg-gray-950"
                rows={4}
                placeholder="Optional"
                {...register('message')}
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Submitting...' : 'Book Free Trial'}
            </button>
          </div>
        </form>

        {/* Contact Info + Map */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
            <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 hover:text-blue-600 transition-colors"
              >
                <FaPhoneAlt className="text-lg" />
                +91 12345 67890
              </a>

              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-600 transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-600 transition-colors"
              >
                <FaInstagram className="text-lg" />
                Follow us on Instagram
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
            <iframe
              title="VIRIBUS GYM Location Map - Nalukettu, Koratty, Kerala"
             src="https://www.google.com/maps?q=Lulu+Mall+Kochi&output=embed"

              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
