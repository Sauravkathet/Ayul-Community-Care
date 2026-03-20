import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(50).optional(),
  message: z.string().min(1, "Message is required").max(5000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const submitMutation = useSubmitContact({
    mutation: {
      onSuccess: () => {
        toast({ title: "Message Sent Successfully", description: "Thank you for reaching out. We will get back to you shortly." });
        form.reset();
      },
      onError: (error) => {
        toast({ variant: "destructive", title: "Submission Failed", description: error.message || "An unexpected error occurred. Please try again." });
      },
    },
  });

  const onSubmit = (data: ContactFormValues) => submitMutation.mutate({ data });

  return (
    <PageTransition>

      {/* Page header */}
      <div className="page-header-gradient pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-semibold mb-5 border border-white/20">
            Reach Out
          </span>
          <h1 className="text-5xl font-display font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            We are here to answer your questions and provide the support you need. Reach out to our friendly team today.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="absolute bottom-0 left-0 right-0 w-full h-12">
          <path d="M0,60 C480,10 960,10 1440,60 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-gradient text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <h3 className="text-2xl font-display font-bold mb-8 relative z-10">Get In Touch</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/15 p-3 rounded-xl shrink-0"><MapPin className="h-6 w-6 text-white" /></div>
                  <div>
                    <h4 className="font-semibold text-lg opacity-90 mb-1">Location</h4>
                    <p className="text-white/75">Sydney, NSW<br />Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/15 p-3 rounded-xl shrink-0"><Phone className="h-6 w-6 text-white" /></div>
                  <div>
                    <h4 className="font-semibold text-lg opacity-90 mb-1">Phone</h4>
                    <a href="tel:+61450602904" className="text-white/75 hover:text-white transition-colors">+61 450 602 904</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/15 p-3 rounded-xl shrink-0"><Mail className="h-6 w-6 text-white" /></div>
                  <div>
                    <h4 className="font-semibold text-lg opacity-90 mb-1">Email</h4>
                    <a href="mailto:admin@ayulcommunitycare.com.au" className="text-white/75 hover:text-white transition-colors break-all">admin@ayulcommunitycare.com.au</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="h-64 bg-gray-100 dark:bg-muted rounded-[2rem] overflow-hidden relative border border-gray-100 dark:border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3312.898864455823!2d151.2068940152102!3d-33.86650408065682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccb0!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" title="Sydney Location Map"
                className="absolute inset-0 grayscale opacity-80"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-card p-8 md:p-10 rounded-[2rem] card-shadow border border-gray-100 dark:border-border">
              <h3 className="text-2xl font-display font-bold mb-2 text-gray-900 dark:text-white">Send a Message</h3>
              <p className="text-gray-500 dark:text-muted-foreground text-sm mb-8">We typically respond within 1 business day.</p>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name *</label>
                    <input
                      id="name" {...form.register("name")}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F5F2] dark:bg-muted border border-[#E8DED1] dark:border-border focus:outline-none focus:border-[#8E6BBF] focus:ring-2 focus:ring-[#E6DDF5] transition-all text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address *</label>
                    <input
                      id="email" type="email" {...form.register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F5F2] dark:bg-muted border border-[#E8DED1] dark:border-border focus:outline-none focus:border-[#8E6BBF] focus:ring-2 focus:ring-[#E6DDF5] transition-all text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                    {form.formState.errors.email && <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
                  <input
                    id="phone" {...form.register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F5F2] dark:bg-muted border border-[#E8DED1] dark:border-border focus:outline-none focus:border-[#8E6BBF] focus:ring-2 focus:ring-[#E6DDF5] transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="+61 400 000 000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">How can we help? *</label>
                  <textarea
                    id="message" rows={5} {...form.register("message")}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F5F2] dark:bg-muted border border-[#E8DED1] dark:border-border focus:outline-none focus:border-[#8E6BBF] focus:ring-2 focus:ring-[#E6DDF5] transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="Tell us about your support needs..."
                  />
                  {form.formState.errors.message && <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full py-4 bg-[#8E6BBF] hover:bg-[#7d5cad] text-white font-bold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                  {!submitMutation.isPending && <Send size={18} />}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
