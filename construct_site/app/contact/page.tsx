import ContactForm from "@/components/contact/ContactForm";
import { PageTransition } from "@/components/shared/animations";

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactForm />
    </PageTransition>
  );
}