import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  const faqArr = [
    { "title": "How does your 10-minute delivery work?", "desc": "Our delivery service utilizes a network of local couriers and strategically located micro-fulfillment centers to ensure that your groceries are picked and delivered within 10 minutes." },
    { "title": "What areas do you deliver to?", "desc": "Currently, we deliver to select neighborhoods within [City/Region]. We are continuously expanding our service areas, so please check the app for the latest updates." },
    { "title": "What types of groceries can I order?", "desc": "You can order a wide range of grocery items, including fresh produce, dairy, snacks, beverages, and household essentials. Our inventory is regularly updated to include popular items." },
    { "title": "Is there a minimum order amount?", "desc": "Yes, there is a minimum order amount of [amount] to qualify for delivery. This helps us maintain efficient operations and ensure timely deliveries." },
    { "title": "What if my order is late?", "desc": "We strive to deliver your groceries within 10 minutes. However, if there are any delays, you will be notified through the app, and we will do our best to resolve the issue promptly." },
    { "title": "How do I pay for my order?", "desc": "You can pay for your order directly through the app using various payment methods, including credit/debit cards, digital wallets, and other secure payment options." },
    { "title": "Can I track my order in real-time?", "desc": "Yes! Our app allows you to track your order in real-time, so you can see the status of your delivery and the estimated arrival time." },
    { "title": "What if an item I ordered is out of stock?", "desc": "If an item is out of stock, we will notify you through the app and offer alternatives or allow you to modify your order before it is processed." },
    { "title": "Do you offer contactless delivery?", "desc": "Yes, we prioritize safety and offer contactless delivery options. You can choose to have your groceries left at your doorstep without direct contact." },
    { "title": "How can I provide feedback about my experience?", "desc": "We value your feedback! You can provide feedback directly through the app after your order is delivered or contact our customer support team." }
]
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto" >
          {faqArr.map((question, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{question.title}</AccordionTrigger>
              <AccordionContent>
                {question.desc}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

  )
}

export default Faq
